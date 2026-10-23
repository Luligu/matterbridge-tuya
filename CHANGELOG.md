# <img src="https://matterbridge.io/assets/matterbridge.svg" alt="Matterbridge Logo" width="64px" height="64px">&nbsp;&nbsp;&nbsp;Matterbridge tuya plugin changelog

[![npm version](https://img.shields.io/npm/v/matterbridge-tuya.svg)](https://www.npmjs.com/package/matterbridge-tuya)
[![npm downloads](https://img.shields.io/npm/dt/matterbridge-tuya.svg)](https://www.npmjs.com/package/matterbridge-tuya)
[![Docker Version](https://img.shields.io/docker/v/luligu/matterbridge/latest?label=docker%20version)](https://hub.docker.com/r/luligu/matterbridge)
[![Docker Pulls](https://img.shields.io/docker/pulls/luligu/matterbridge?label=docker%20pulls)](https://hub.docker.com/r/luligu/matterbridge)
![Node.js CI](https://github.com/Luligu/matterbridge-tuya/actions/workflows/build.yml/badge.svg)
![CodeQL](https://github.com/Luligu/matterbridge-tuya/actions/workflows/codeql.yml/badge.svg)
[![codecov](https://codecov.io/gh/Luligu/matterbridge-tuya/branch/main/graph/badge.svg)](https://codecov.io/gh/Luligu/matterbridge-tuya)
[![tested with Vitest](https://img.shields.io/badge/tested_with-Vitest-6E9F18.svg?logo=vitest&logoColor=white)](https://vitest.dev)
[![styled with Oxc](https://img.shields.io/badge/styled_with-Oxc-9BE4E0.svg?logo=oxc&logoColor=white)](https://oxc.rs/docs/guide/usage/formatter.html)
[![linted with Oxc](https://img.shields.io/badge/linted_with-Oxc-9BE4E0.svg?logo=oxc&logoColor=white)](https://oxc.rs/docs/guide/usage/linter.html)
[![TypeScript Native](https://img.shields.io/badge/TypeScript_Native-3178C6?logo=typescript&logoColor=white)](https://github.com/microsoft/typescript-go)
[![ESM](https://img.shields.io/badge/ESM-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![matterbridge.io](https://img.shields.io/badge/matterbridge.io-online-brightgreen)](https://matterbridge.io)
![under development](https://img.shields.io/badge/status-under%20development-orange)

[![powered by](https://img.shields.io/badge/powered%20by-matterbridge-blue)](https://www.npmjs.com/package/matterbridge)
[![powered by](https://img.shields.io/badge/powered%20by-matter--history-blue)](https://www.npmjs.com/package/matter-history)
[![powered by](https://img.shields.io/badge/powered%20by-node--ansi--logger-blue)](https://www.npmjs.com/package/node-ansi-logger)
[![powered by](https://img.shields.io/badge/powered%20by-node--persist--manager-blue)](https://www.npmjs.com/package/node-persist-manager)

---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

If you like this project and find it useful, please consider giving it a star on [GitHub](https://github.com/Luligu/matterbridge-tuya) and sponsoring it.

<a href="https://www.buymeacoffee.com/luligugithub"><img src="https://matterbridge.io/assets/bmc-button.svg" alt="Buy me a coffee" width="120"></a>

## [0.0.5] - 2026-10-23

### Breaking changes

- [matterbridge]: Require matterbridge v.3.11.0 with matter v.1.6.1.
- [node]: Drop Node.js 20 support, matching matterbridge v.3.11.0. Supported versions are Node.js 22.13, 24 and 26.

### Added

- [devcontainer]: Add [`Dev Container`](.devcontainer/README.md) v.2.2.0 with dual Node and Bun runtime support.
- [agents]: Add a [`shared setup`](.agents/README.md) for all agents: OpenAI Codex, Claude Code, GitHub Copilot and Google Gemini / Antigravity.
- [agents]: Add [`commit message instructions`](.github/commit-message-instructions.md) v.1.0.0 for the VS Code Copilot "Generate Commit Message" button (Conventional Commits).
- [agents]: Add the Copilot `Matterbridge` custom agent (`.github/agents/matterbridge.agent.md`) that works without subagents.

### Changed

- [test]: Migrate tests from `matterbridge/vitest-utils` to the unified `matterbridge/test-utils`.
- [styleguide]: Update [`STYLEGUIDE.md`](STYLEGUIDE.md) to v.1.1.0: align it with the lint and format config and add the Commit Messages and Changelog sections.
- [vscode]: Update `.vscode/settings.json` to v.1.0.16: configure commit message instructions, exclude templates from Vitest discovery and refine terminal command approvals.
- [vscode]: Add Bundle, Minify, Obfuscate, Pack and Docker install tasks to `.vscode/tasks.json`.
- [agents]: Update `.claude/settings.json` to v.1.0.9, `.antigravity/settings.json` to v.1.0.6 and `.codex/rules/default.rules` to v.1.0.7.
- [gitignore]: Update `.gitignore` to v.1.0.5: ignore `tmp/`, `.DS_Store` and Windows `Zone.Identifier` files.
- [lint]: Update `.oxlintrc.json` and `.oxfmtrc.json` to v.1.2.0: align shared ignore patterns.
- [vitest]: Replace `vite.config.ts` with `vitest.config.ts` v.2.0.9 and update test and coverage exclusions.
- [scripts]: Update `scripts/clean.mjs` and `scripts/deep-clean.mjs` to v.2.0.0: log removed paths, add dry-run support and expose importable entry points.
- [scripts]: Update release, download, Git status, Git sync, prepublish, pruning, workflow cleanup and version helpers to v.2.0.0 with CLI previews and importable entry points.
- [scripts]: Update `scripts/deep-clean.mjs` and `scripts/prepublish-clean.mjs` to v.2.1.0: also remove `tmp/` and `bun.lock`.
- [tsconfig]: Remove `**/__test__/*` from the `tsconfig.build.json` and `tsconfig.build.production.json` exclusions.
- [workflows]: Update `build.yml` and `codecov.yml` to v.2.0.8 and `publish.yml` to v.2.0.7.
- [package]: Remove `--disable-nested-config` from the `lint` and `lint:fix` scripts.
- [package]: Run `checkDependencies` and `updateDependencies` with `npx npm-check-updates@latest`.
- [package]: Remove the `softReset:bun` script.
- [package]: Upgrade package.
- [package]: Bump `node-ansi-logger` to v.3.3.1.
- [package]: Bump `node-persist-manager` to v.2.1.1.
- [package]: Bump `oxfmt` to v.0.74.0.
- [package]: Bump `oxlint` to v.1.89.0.
- [package]: Bump `oxlint-tsgolint` to v.7.0.2004.
- [package]: Bump `vitest` to v.5.0.5.
- [package]: Bump `@vitest/coverage-v8` to v.5.0.5.
- [package]: Bump `@types/node` to v.26.6.5.
- [package]: Bump `typescript` to v.7.0.2.

<a href="https://www.buymeacoffee.com/luligugithub"><img src="https://matterbridge.io/assets/bmc-button.svg" alt="Buy me a coffee" width="80"></a>

## [0.0.4] - 2026-08-14

### Breaking changes

- [matterbridge]: Require matterbridge v.3.10.0 with matter v.1.6.0.

### Added

- [chip]: Add chip-test toolchain agents instruction and chip-test runner.
- [frontend]: Add plugin-frontend agents instructions.

### Changed

- [package]: Bump `oxfmt` to v.0.63.0.
- [package]: Bump `oxlint` to v.1.78.0.
- [package]: Bump `oxlint-tsgolint` to v.7.0.2001.
- [package]: Bump `@types/node` to v.26.2.0.
- [package]: Update agents configs.

<a href="https://www.buymeacoffee.com/luligugithub"><img src="https://matterbridge.io/assets/bmc-button.svg" alt="Buy me a coffee" width="80"></a>

## [0.0.3] - 2026-07-17

### Breaking changes

- Require matterbridge v.3.9.0.

### Changed

- [package]: Apply uniform style.
- [package]: Upgrade package.
- [package]: Update dependencies.
- [toolchain]: Migrate to the native toolchain (tsgo + oxlint + oxfmt + vitest). Replace ESLint/Prettier with Oxc, migrate the unit tests from Jest to Vitest, and move them from `src/` to `vitest/`.

<a href="https://www.buymeacoffee.com/luligugithub"><img src="https://matterbridge.io/assets/bmc-button.svg" alt="Buy me a coffee" width="80"></a>

## [0.0.1] - 2024-08-28

First published release.

<a href="https://www.buymeacoffee.com/luligugithub">
  <img src="https://matterbridge.io/assets/bmc-button.svg" alt="Buy me a coffee" width="120">
</a>
