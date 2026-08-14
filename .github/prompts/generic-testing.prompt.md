---
description: Create or update automated tests by adapting to the detected repository structure, technology stack, and existing test framework.
---

# Generic Testing Prompt

Create or update automated tests for the requested code changes.

In this workflow, "Testing" refers to automated test creation and automated test maintenance.

Examples include:

- Angular Karma/Jasmine `.spec.ts` tests
- React Jest/Vitest `.test.ts` or `.spec.ts` tests
- Spring Boot JUnit/Mockito tests
- Node.js Jest tests
- Backend integration tests where applicable

Do not create manual QA test cases unless the user explicitly asks for manual test scenarios.

Do not modify files until the user approves the test plan.

## Step 1: Inspect Repository

Before creating the test plan, inspect the repository and identify:

1. Programming language
2. Framework or main technology
3. Existing test framework
4. Existing test file patterns
5. Existing naming conventions
6. Build command
7. Test command
8. Current Git changes

Do not assume a specific test framework unless the repository clearly shows it.

## Step 2: Understand Test Scope

Identify:

1. Production files changed
2. Existing test files affected
3. New test files needed
4. Stale tests that must be updated
5. Behaviors that should be covered
6. Edge cases that should be tested

## Testing Rules

- Follow the existing test framework and project conventions.
- Do not introduce a new test library unless clearly required.
- Prefer small, focused automated tests.
- Test behavior, not implementation details.
- Update stale tests when behavior intentionally changed.
- Add tests for new behavior when reasonable.
- Do not modify production code unless required and approved.
- Do not modify unrelated files.
- Ask for approval before creating or modifying test files.

## Required Output Format

## Repository Understanding

- Detected language:
- Detected framework/main technology:
- Detected test framework:
- Existing test patterns:
- Build command:
- Test command:

## Test Scope

- Changed production files:
- Existing tests to update:
- New tests to add:
- Behaviors to verify:

## Proposed Test Changes

| Action | File Path | Purpose |
|---|---|---|
| Create / Modify | path/to/file | reason |

## Implementation Plan

1. Step one
2. Step two
3. Step three

## Validation Plan

- Test command:
- Build command:
- Expected result:

## Validation Result

After running tests, report:

- Test command used
- Test status: Passed / Failed / Inconclusive
- Exact terminal summary
- Number of tests executed
- Number of tests passed
- Number of tests failed
- Build result
- Key insights
- Remaining limitations

Do not claim tests passed unless the terminal output clearly shows a final success summary such as `TOTAL: X SUCCESS`.

## Approval Required

Stop after this plan.

Do not create, modify, or delete files until the user approves the plan.