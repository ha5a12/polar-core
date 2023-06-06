var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ApiError: () => ApiError,
  CancelError: () => CancelError,
  CancelablePromise: () => CancelablePromise,
  EventType: () => EventType,
  TabbyAgent: () => TabbyAgent,
  agentEventNames: () => agentEventNames
});
module.exports = __toCommonJS(src_exports);

// src/TabbyAgent.ts
var import_axios2 = __toESM(require("axios"));
var import_events = require("events");
var import_uuid = require("uuid");
var import_deep_equal = __toESM(require("deep-equal"));
var import_deepmerge = __toESM(require("deepmerge"));

// src/generated/core/BaseHttpRequest.ts
var BaseHttpRequest = class {
  constructor(config) {
    this.config = config;
  }
};

// src/generated/core/request.ts
var import_axios = __toESM(require("axios"));
var import_form_data = __toESM(require("form-data"));

// src/generated/core/ApiError.ts
var ApiError = class extends Error {
  constructor(request2, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};

// src/generated/core/CancelablePromise.ts
var CancelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
};
var _isResolved, _isRejected, _isCancelled, _cancelHandlers, _promise, _resolve, _reject;
var CancelablePromise = class {
  constructor(executor) {
    __privateAdd(this, _isResolved, void 0);
    __privateAdd(this, _isRejected, void 0);
    __privateAdd(this, _isCancelled, void 0);
    __privateAdd(this, _cancelHandlers, void 0);
    __privateAdd(this, _promise, void 0);
    __privateAdd(this, _resolve, void 0);
    __privateAdd(this, _reject, void 0);
    __privateSet(this, _isResolved, false);
    __privateSet(this, _isRejected, false);
    __privateSet(this, _isCancelled, false);
    __privateSet(this, _cancelHandlers, []);
    __privateSet(this, _promise, new Promise((resolve2, reject) => {
      __privateSet(this, _resolve, resolve2);
      __privateSet(this, _reject, reject);
      const onResolve = (value) => {
        var _a;
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isResolved, true);
        (_a = __privateGet(this, _resolve)) == null ? void 0 : _a.call(this, value);
      };
      const onReject = (reason) => {
        var _a;
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isRejected, true);
        (_a = __privateGet(this, _reject)) == null ? void 0 : _a.call(this, reason);
      };
      const onCancel = (cancelHandler) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateGet(this, _cancelHandlers).push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => __privateGet(this, _isResolved)
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => __privateGet(this, _isRejected)
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => __privateGet(this, _isCancelled)
      });
      return executor(onResolve, onReject, onCancel);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
  cancel() {
    var _a;
    if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
      return;
    }
    __privateSet(this, _isCancelled, true);
    if (__privateGet(this, _cancelHandlers).length) {
      try {
        for (const cancelHandler of __privateGet(this, _cancelHandlers)) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    __privateGet(this, _cancelHandlers).length = 0;
    (_a = __privateGet(this, _reject)) == null ? void 0 : _a.call(this, new CancelError("Request aborted"));
  }
  get isCancelled() {
    return __privateGet(this, _isCancelled);
  }
};
_isResolved = new WeakMap();
_isRejected = new WeakMap();
_isCancelled = new WeakMap();
_cancelHandlers = new WeakMap();
_promise = new WeakMap();
_resolve = new WeakMap();
_reject = new WeakMap();

// src/generated/core/request.ts
var isDefined = (value) => {
  return value !== void 0 && value !== null;
};
var isString = (value) => {
  return typeof value === "string";
};
var isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
var isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
var isFormData = (value) => {
  return value instanceof import_form_data.default;
};
var isSuccess = (status) => {
  return status >= 200 && status < 300;
};
var base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
var getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
var getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
var getFormData = (options) => {
  if (options.formData) {
    const formData = new import_form_data.default();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
var resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
var getHeaders = async (config, options, formData) => {
  const token = await resolve(options, config.TOKEN);
  const username = await resolve(options, config.USERNAME);
  const password = await resolve(options, config.PASSWORD);
  const additionalHeaders = await resolve(options, config.HEADERS);
  const formHeaders = typeof formData?.getHeaders === "function" && formData?.getHeaders() || {};
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers,
    ...formHeaders
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return headers;
};
var getRequestBody = (options) => {
  if (options.body) {
    return options.body;
  }
  return void 0;
};
var sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const source = import_axios.default.CancelToken.source();
  const requestConfig = {
    url,
    headers,
    data: body ?? formData,
    method: options.method,
    withCredentials: config.WITH_CREDENTIALS,
    cancelToken: source.token
  };
  onCancel(() => source.cancel("The user aborted a request."));
  try {
    return await import_axios.default.request(requestConfig);
  } catch (error) {
    const axiosError = error;
    if (axiosError.response) {
      return axiosError.response;
    }
    throw error;
  }
};
var getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers[responseHeader];
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
var getResponseBody = (response) => {
  if (response.status !== 204) {
    return response.data;
  }
  return void 0;
};
var catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    throw new ApiError(options, result, "Generic Error");
  }
};
var request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options, formData);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: isSuccess(response.status),
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// src/generated/core/AxiosHttpRequest.ts
var AxiosHttpRequest = class extends BaseHttpRequest {
  constructor(config) {
    super(config);
  }
  /**
   * Request method
   * @param options The request options from the service
   * @returns CancelablePromise<T>
   * @throws ApiError
   */
  request(options) {
    return request(this.config, options);
  }
};

// src/generated/services/DefaultService.ts
var DefaultService = class {
  constructor(httpRequest) {
    this.httpRequest = httpRequest;
  }
  /**
   * Completions
   * @param requestBody
   * @returns CompletionResponse Successful Response
   * @throws ApiError
   */
  completionsV1CompletionsPost(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/completions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Events
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  eventsV1EventsPost(requestBody) {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/events",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/TabbyApi.ts
var TabbyApi = class {
  constructor(config, HttpRequest = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "",
      VERSION: config?.VERSION ?? "0.1.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH
    });
    this.default = new DefaultService(this.request);
  }
};

// src/generated/models/EventType.ts
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2["COMPLETION"] = "completion";
  EventType2["VIEW"] = "view";
  EventType2["SELECT"] = "select";
  return EventType2;
})(EventType || {});

// src/utils.ts
function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
function splitLines(input) {
  return input.match(/.*(?:$|\r?\n)/g).filter(Boolean);
}
function splitWords(input) {
  return input.match(/\w+|\W+/g).filter(Boolean);
}
function isBlank(input) {
  return input.trim().length === 0;
}
function cancelable(promise, cancel) {
  return new CancelablePromise((resolve2, reject, onCancel) => {
    promise.then((resp) => {
      resolve2(resp);
    }).catch((err) => {
      reject(err);
    });
    onCancel(() => {
      cancel();
    });
  });
}

// src/AgentConfig.ts
var defaultAgentConfig = {
  server: {
    endpoint: "http://localhost:8080"
  },
  logs: {
    level: "silent"
  },
  analytics: {
    enabled: true
  }
};

// src/CompletionCache.ts
var import_lru_cache = require("lru-cache");
var import_object_hash = __toESM(require("object-hash"));
var import_object_sizeof = __toESM(require("object-sizeof"));
var CompletionCache = class {
  constructor() {
    this.options = {
      maxSize: 1 * 1024 * 1024,
      // 1MB
      partiallyAcceptedCacheGeneration: {
        enabled: true,
        perCharacter: {
          lines: 1,
          words: 10,
          max: 30
        },
        perWord: {
          lines: 1,
          max: 20
        },
        perLine: {
          max: 3
        }
      }
    };
    this.cache = new import_lru_cache.LRUCache({
      maxSize: this.options.maxSize,
      sizeCalculation: import_object_sizeof.default
    });
  }
  has(key) {
    return this.cache.has(this.hash(key));
  }
  set(key, value) {
    for (const entry of this.createCacheEntries(key, value)) {
      this.cache.set(this.hash(entry.key), entry.value);
    }
  }
  get(key) {
    return this.cache.get(this.hash(key));
  }
  hash(key) {
    return (0, import_object_hash.default)(key);
  }
  createCacheEntries(key, value) {
    const list = [{ key, value }];
    if (this.options.partiallyAcceptedCacheGeneration.enabled) {
      const entries = value.choices.map((choice) => {
        return this.calculatePartiallyAcceptedPositions(choice.text).map((position) => {
          return {
            prefix: choice.text.slice(0, position),
            suffix: choice.text.slice(position),
            choiceIndex: choice.index
          };
        });
      }).flat().reduce((grouped, entry) => {
        grouped[entry.prefix] = grouped[entry.prefix] || [];
        grouped[entry.prefix].push({ suffix: entry.suffix, choiceIndex: entry.choiceIndex });
        return grouped;
      }, {});
      for (const prefix in entries) {
        const cacheKey = {
          ...key,
          text: key.text.slice(0, key.position) + prefix + key.text.slice(key.position),
          position: key.position + prefix.length
        };
        const cacheValue = {
          ...value,
          choices: entries[prefix].map((choice) => {
            return {
              index: choice.choiceIndex,
              text: choice.suffix
            };
          })
        };
        list.push({
          key: cacheKey,
          value: cacheValue
        });
      }
    }
    return list;
  }
  calculatePartiallyAcceptedPositions(completion) {
    const positions = [];
    const option = this.options.partiallyAcceptedCacheGeneration;
    const lines = splitLines(completion);
    let index = 0;
    let offset = 0;
    while (index < lines.length - 1 && index < option.perLine.max) {
      offset += lines[index].length;
      positions.push(offset);
      index++;
    }
    const words = lines.slice(0, option.perWord.lines).map(splitWords).flat();
    index = 0;
    offset = 0;
    while (index < words.length && index < option.perWord.max) {
      offset += words[index].length;
      positions.push(offset);
      index++;
    }
    const characters = lines.slice(0, option.perCharacter.lines).map(splitWords).flat().slice(0, option.perCharacter.words).join("");
    offset = 1;
    while (offset < characters.length && offset < option.perCharacter.max) {
      positions.push(offset);
      offset++;
    }
    return positions.filter((v, i, arr) => arr.indexOf(v) === i).sort((a, b) => a - b);
  }
};

// src/TabbyAgent.ts
var TabbyAgent = class extends import_events.EventEmitter {
  constructor() {
    super();
    this.config = defaultAgentConfig;
    this.status = "connecting";
    this.completionCache = new CompletionCache();
    this.onConfigUpdated();
  }
  onConfigUpdated() {
    this.api = new TabbyApi({ BASE: this.config.server.endpoint });
    this.ping();
  }
  changeStatus(status) {
    if (this.status != status) {
      this.status = status;
      const event = { event: "statusChanged", status };
      super.emit("statusChanged", event);
    }
  }
  async ping(tries = 0) {
    try {
      await import_axios2.default.get(this.config.server.endpoint);
      this.changeStatus("ready");
      return true;
    } catch (e) {
      if (tries > 5) {
        this.changeStatus("disconnected");
        return false;
      }
      this.changeStatus("connecting");
      const pingRetryDelay = 1e3;
      await sleep(pingRetryDelay);
      return this.ping(tries + 1);
    }
  }
  wrapApiPromise(promise) {
    return cancelable(
      promise.then((resolved) => {
        this.changeStatus("ready");
        return resolved;
      }).catch((err) => {
        this.changeStatus("disconnected");
        throw err;
      }),
      () => {
        promise.cancel();
      }
    );
  }
  createPrompt(request2) {
    const maxLines = 20;
    const prefix = request2.text.slice(0, request2.position);
    const lines = splitLines(prefix);
    const cutoff = Math.max(lines.length - maxLines, 0);
    const prompt = lines.slice(cutoff).join("");
    return prompt;
  }
  initialize(params) {
    if (params.config) {
      this.updateConfig(params.config);
    }
    return true;
  }
  updateConfig(config) {
    if (!(0, import_deep_equal.default)(this.config, config)) {
      this.config = (0, import_deepmerge.default)(this.config, config);
      this.onConfigUpdated();
      const event = { event: "configUpdated", config: this.config };
      super.emit("configUpdated", event);
    }
    return true;
  }
  getConfig() {
    return this.config;
  }
  getStatus() {
    return this.status;
  }
  getCompletions(request2) {
    if (this.completionCache.has(request2)) {
      return new CancelablePromise((resolve2) => {
        resolve2(this.completionCache.get(request2));
      });
    }
    const prompt = this.createPrompt(request2);
    if (isBlank(prompt)) {
      return new CancelablePromise((resolve2) => {
        resolve2({
          id: "agent-" + (0, import_uuid.v4)(),
          created: (/* @__PURE__ */ new Date()).getTime(),
          choices: []
        });
      });
    }
    const promise = this.wrapApiPromise(
      this.api.default.completionsV1CompletionsPost({
        prompt,
        language: request2.language
      })
    );
    return cancelable(
      promise.then((response) => {
        this.completionCache.set(request2, response);
        return response;
      }),
      () => {
        promise.cancel();
      }
    );
  }
  postEvent(request2) {
    return this.wrapApiPromise(this.api.default.eventsV1EventsPost(request2));
  }
};

// src/Agent.ts
var agentEventNames = ["statusChanged", "configUpdated"];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiError,
  CancelError,
  CancelablePromise,
  EventType,
  TabbyAgent,
  agentEventNames
});
//# sourceMappingURL=index.js.map
