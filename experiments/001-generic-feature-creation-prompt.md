# Experiment 001 - Generic Feature / Module / Screen Creation Prompt

## Purpose

Test whether the generic feature/module/screen creation prompt can inspect the repository, classify the request, create an implementation plan, and stop before modifying files.

## Asset Tested

```text
.github/prompts/generic-feature-module-screen-creation.prompt.md



## Retest Result

After adding the Testing Workflow boundary, the Generic Coding Skill was tested again using a Department List screen planning request.

The skill correctly:

- Detected the Angular 20 TypeScript project
- Identified standalone component and routing patterns
- Proposed only coding-related files
- Did not include automated test files in the proposed file changes
- Listed testing under the Validation Plan only
- Asked for approval before implementation

## Result

The Generic Coding Skill boundary with the Testing workflow is now resolved.

## Remaining Minor Issue

The markdown table formatting still needs improvement because the table header was rendered as `ActionFile PathPurpose`.

This is a formatting issue only and does not affect the workflow logic.