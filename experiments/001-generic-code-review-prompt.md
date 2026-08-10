# Experiment 001 - Generic Code Review Prompt

## Purpose

Test whether the generic code review prompt file is detected and usable in VS Code Copilot Chat.

## Asset Tested

```text
.github/prompts/generic-code-review.prompt.md
```

## Actual Result

The `/generic-code-review` prompt appeared in Copilot Chat and was successfully executed.

Copilot checked the repository status and detected that there were no current Git changes to review.

It returned a low-severity finding stating that there were no active code or documentation changes at this time.

## Notes

The prompt file is working and can be invoked from Copilot Chat.

Observation: The output created a "Finding" even when there was no real issue. The prompt can be improved later to return a dedicated "No Findings" section when there are no reviewable changes.