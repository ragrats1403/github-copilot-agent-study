---
description: Create or update automated tests by adapting to the detected repository structure, technology stack, and existing test framework.
---

# Generic Automated Test Creation Prompt

Create or update automated tests for the requested code changes.

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
- Prefer small, focused tests.
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

## Approval Required

Stop after this plan.

Do not create, modify, or delete files until the user approves the plan.