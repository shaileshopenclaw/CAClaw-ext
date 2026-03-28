# CA Plugin Rails

This page explains when CA functionality should become part of the plugin itself.

Use the plugin layer when the CA add-on needs:

- packaged runtime behavior
- reusable CA-specific capability inside OpenClaw
- a feature that should travel with the add-on as a product capability

## Good plugin-layer examples

Examples may include:

- packaged CA workflow features
- CA-specific commands or services
- reusable logic that should not live only in prompt files

## Keep the plugin focused

The plugin should stay:

- understandable
- modular
- easy to review
- easy to expand without touching unrelated OpenClaw core areas

