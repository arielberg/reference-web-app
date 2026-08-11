# Reference Web App

Minimal test fixture for [agent-control-plane](https://github.com/arielberg/agent-control-plane). Not a product — a small, human-readable codebase for E2E and future agent tasks.

## Structure

```text
reference-web-app/
├── src/           # Application source
├── tests/         # Node test runner tests
├── scripts/       # Build script
├── package.json
└── README.md
```

## Commands

```bash
npm ci
npm test
npm run lint
npm run build
```

## Purpose

Used as the first real Project in agent-control-plane to validate:

- Git repo cache
- Git worktree workspace materialization
- Isolated parallel workspaces
