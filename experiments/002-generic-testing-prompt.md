# Experiment 002 - Generic Testing Prompt

## Purpose

Test whether the Generic Testing prompt can create or update automated tests based on the current project structure, detected test framework, and existing implementation changes.

## Asset Tested

```text
.github/prompts/generic-testing.prompt.md
```



## Validation Result

### Updated Test Files

- `sample-projects/angular-employee-management/src/app/app.spec.ts`
- `sample-projects/angular-employee-management/src/app/employees/employee-list/employee-list.spec.ts`

### Test Command

```bash
npm run test -- --watch=false --browsers=ChromeHeadless --no-progress