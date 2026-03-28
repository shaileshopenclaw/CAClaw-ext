import { definePluginEntry, type OpenClawPluginApi } from "./runtime-api.js";

export default definePluginEntry({
  id: "caclaw",
  name: "OpenClaw CA Add-on",
  description: "Plugin-shipped CA workflow pack, docs, and integration starting point.",
  register(_api: OpenClawPluginApi) {
    // This plugin is intentionally skills-first.
    // Future CA MCP tools, prompts, and runtime services should land here
    // instead of forking broad OpenClaw product surfaces.
  },
});
