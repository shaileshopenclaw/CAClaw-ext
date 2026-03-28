# CA Integration Rails

This page explains where future CA integrations should go.

The main idea is:

- keep OpenClaw stable
- add CA-specific capability in clear places
- do not scatter CA logic everywhere

## The three main rails

### 1. Skills
Use a skill when the value is mainly:

- guidance
- checklists
- reusable prompts
- domain-specific structure

### 2. Plugins
Use a plugin when the value is mainly:

- runtime capability
- reusable product behavior
- packaged CA functionality that OpenClaw should load directly

### 3. MCP
Use MCP when the value is mainly:

- tool-like external access
- controlled connection to external systems
- explicit service boundaries

## Simple decision rule

Ask this:

1. Is this mostly workflow guidance? → use a skill
2. Is this a reusable runtime capability? → use a plugin
3. Is this an external tool or system connection? → use MCP if it fits

## Why this matters

This approach keeps the CA layer:

- easier to maintain
- safer to review
- easier to expand later
- less likely to damage the main OpenClaw product

