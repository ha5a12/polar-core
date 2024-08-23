import { EventEmitter } from "events";
import { workspace, ExtensionContext, WorkspaceConfiguration, ConfigurationTarget, Memento } from "vscode";
import { ClientProvidedConfig } from "tabby-agent";

interface AdvancedSettings {
  "inlineCompletion.triggerMode"?: "automatic" | "manual";
  "chatEdit.history"?: number;
}

export interface PastServerConfig {
  endpoint: string;
  token: string | null;
}

export class Config extends EventEmitter {
  constructor(private readonly context: ExtensionContext) {
    super();
    context.subscriptions.push(
      workspace.onDidChangeConfiguration(async (event) => {
        if (event.affectsConfiguration("tabby")) {
          this.emit("updated");
        }
      }),
    );
  }

  private get workspace(): WorkspaceConfiguration {
    return workspace.getConfiguration("tabby");
  }

  get memento(): Memento {
    return this.context.globalState;
  }

  get serverEndpoint(): string {
    return this.workspace.get("endpoint", "");
  }

  set serverEndpoint(value: string) {
    if (value !== this.serverEndpoint) {
      this.workspace.update("endpoint", value, ConfigurationTarget.Global);
    }
  }

  get serverToken(): string {
    return this.memento.get("server.token", "");
  }

  set serverToken(value: string) {
    if (value !== this.serverToken) {
      this.memento.update("server.token", value);
      this.emit("updated");
    }
  }

  get inlineCompletionTriggerMode(): "automatic" | "manual" {
    const advancedSettings = this.workspace.get("settings.advanced", {}) as AdvancedSettings;
    return advancedSettings["inlineCompletion.triggerMode"] || "automatic";
  }

  set inlineCompletionTriggerMode(value: "automatic" | "manual") {
    if (value !== this.inlineCompletionTriggerMode) {
      const advancedSettings = this.workspace.get("settings.advanced", {}) as AdvancedSettings;
      const updatedValue = { ...advancedSettings, "inlineCompletion.triggerMode": value };
      this.workspace.update("settings.advanced", updatedValue, ConfigurationTarget.Global);
      this.emit("updated");
    }
  }

  get maxChatEditHistory(): number {
    const advancedSettings = this.workspace.get("settings.advanced", {}) as AdvancedSettings;
    const numHistory = advancedSettings["chatEdit.history"] === undefined ? 20 : advancedSettings["chatEdit.history"];
    if (numHistory < 0) {
      return 20;
    } else if (numHistory === 0) {
      return 0;
    } else {
      return numHistory;
    }
  }

  set maxChatEditHistory(value: number) {
    if (value != this.maxChatEditHistory) {
      const advancedSettings = this.workspace.get("settings.advanced", {}) as AdvancedSettings;
      const updateValue = { ...advancedSettings, "chatEdit.history": value };
      this.workspace.update("settings.advanced", updateValue, ConfigurationTarget.Global);
      this.emit("updated");
    }
  }

  get inlineCompletionEnabled(): boolean {
    return workspace.getConfiguration("editor").get("inlineSuggest.enabled", true);
  }

  set inlineCompletionEnabled(value: boolean) {
    if (value !== this.inlineCompletionEnabled) {
      workspace.getConfiguration("editor").update("inlineSuggest.enabled", value, ConfigurationTarget.Global);
    }
  }

  get keybindings(): "vscode-style" | "tabby-style" {
    return this.workspace.get("keybindings", "vscode-style");
  }

  get anonymousUsageTrackingDisabled(): boolean {
    return this.workspace.get("config.telemetry", false);
  }

  get mutedNotifications(): string[] {
    return this.memento.get("notifications.muted", []);
  }

  set mutedNotifications(value: string[]) {
    this.memento.update("notifications.muted", value);
    this.emit("updated");
  }

  get chatEditRecentlyCommand(): string[] {
    return this.memento.get("edit.recentlyCommand", []);
  }

  set chatEditRecentlyCommand(value: string[]) {
    this.memento.update("edit.recentlyCommand", value);
  }

  get pastServerConfigs(): PastServerConfig[] {
    return this.memento.get("server.pastServerConfigs", []);
  }

  async appendPastServerConfig(config: PastServerConfig) {
    const pastConfigs = this.pastServerConfigs.filter((c) => c.endpoint !== config.endpoint);
<<<<<<< HEAD
    pastConfigs.push(config);

    await this.memento.update("server.pastServerConfigs", pastConfigs);
=======
    const newPastConfigs = [config, ...pastConfigs.slice(0, 4)];
    await this.memento.update("server.pastServerConfigs", newPastConfigs)
>>>>>>> d2980716d (limit max count)
  }

  async removePastServerConfigByApiEndpoint(apiEndpoint: string) {
    const pastConfigs = this.pastServerConfigs.filter((c) => c.endpoint !== apiEndpoint);
    await this.memento.update("server.pastServerConfigs", pastConfigs);
  }

  async restoreServerConfig(config: PastServerConfig) {
    await this.memento.update("server.token", config.token);
    this.serverEndpoint = config.endpoint;
  }

  buildClientProvidedConfig(): ClientProvidedConfig {
    return {
      server: {
        endpoint: this.serverEndpoint,
        token: this.serverToken,
      },
      inlineCompletion: {
        triggerMode: this.inlineCompletionTriggerMode == "automatic" ? "auto" : "manual",
      },
      keybindings: this.keybindings == "tabby-style" ? "tabby-style" : "default",
      anonymousUsageTracking: {
        disable: this.anonymousUsageTrackingDisabled,
      },
    };
  }
}
