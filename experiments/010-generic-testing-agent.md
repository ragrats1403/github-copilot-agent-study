# Experiment 010 - Generic Testing Agent

## Purpose

Test whether the Generic Testing Agent can create an automated testing plan for an existing Angular screen while respecting the OD-002 workflow separation.

## Asset Tested

```text
.github/agents/generic-testing-agent.agent.md
```

## Retest Result

After strengthening the validation command rule, the Generic Testing Agent was tested again.

The retest was successful.

The agent correctly used the required non-interactive Angular/Karma command:

```bash
npm run test -- --watch=false --browsers=ChromeHeadless --no-progress