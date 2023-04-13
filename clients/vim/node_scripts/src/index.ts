import { TabbyClient } from "./TabbyClient";
import { CancelablePromise, ApiError } from "./generated";
const tabby = TabbyClient.getInstance();

interface VimRequest {
  0: number; // Vim request id
  1: {
    func: string;
    args?: any;
  };
}

interface VimResponse {
  0: number; // Matched request id, set to 0 if no request matched
  1: any; // Response data
}

/**
 * @param obj Find a function in this object
 * @param keyPath A string of keys separated by dots, e.g 'foo.bar.getSomething'
 * @returns The function if found that has bound target context, null otherwise
 */
function getFunction(obj, keyPath): Function | null {
  try {
    let [target, func] = keyPath.split(".").reduce(([_, obj], k) => [obj, obj[k]], [null, obj]);
    if (typeof func === "function") {
      return (func as Function).bind(target);
    }
  } catch (e) {
    // nothing
  }
  return null;
}

process.stdin.on("data", async (data) => {
  try {
    const req: VimRequest = JSON.parse(data.toString());
    const resp: VimResponse = [req[0], {}];
    const func = getFunction(tabby, req[1].func);
    if (func) {
      const args = Array.isArray(req[1].args) ? req[1].args : [req[1].args];
      const result = func(...args);
      if (result instanceof CancelablePromise && req[1].func.startsWith("api.")) {
        // Async API calls
        resp[1] = await result
          .then((response: any) => {
            tabby.changeStatus("ready");
            return response;
          })
          .catch((e: ApiError) => {
            process.stderr.write(JSON.stringify(e, Object.getOwnPropertyNames(e)) + "\n");
            tabby.changeStatus("disconnected");
            return null;
          });
      } else if (result instanceof Promise) {
        // Async calls (non-API)
        resp[1] = await result;
      } else {
        // Sync calls
        resp[1] = result;
      }
    }
    process.stdout.write(JSON.stringify(resp) + "\n");
  } catch (e) {
    process.stderr.write(JSON.stringify(e, Object.getOwnPropertyNames(e)) + "\n");
  }
});

tabby.on("statusChanged", (status) => {
  const resp: VimResponse = [0, { event: "statusChanged", status }];
  process.stdout.write(JSON.stringify(resp) + "\n");
});
