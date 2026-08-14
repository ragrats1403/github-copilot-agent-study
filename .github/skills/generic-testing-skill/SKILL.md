---
name: generic-testing-skill
description: Create, update, and validate automated tests by adapting to the detected repository structure, technology stack, and existing test framework.
---

# Generic Testing Skill

Use this skill when the user asks for automated testing work.

This includes:

- Creating automated tests
- Updating stale tests
- Fixing failing tests
- Improving test coverage
- Adding component tests
- Adding unit tests
- Adding service tests
- Adding backend tests
- Adding integration tests where appropriate

This skill is not for manual QA test case writing unless the user explicitly asks for manual test scenarios.

## Core Rule

Inspect the repository before planning or modifying tests.

Do not assume the test framework. Detect it from the repository.

## Repository Inspection Checklist

Before planning, identify:

1. Programming language
2. Framework or main technology
3. Existing test framework
4. Existing test file patterns
5. Existing naming conventions
6. Production files related to the test request
7. Existing test files related to the request
8. Build command
9. Test command
10. Current Git changes, if relevant

## Testing Scope Checklist

Identify:

1. Changed production files
2. Existing tests to update
3. New test files to create
4. Stale assertions to remove
5. Behaviors to verify
6. Edge cases to cover
7. Validation commands to run

## Boundary With Coding Workflow

This skill may identify production code issues, but it should not modify production files unless the user explicitly approves it.

For the OD-002 workflow, feature and production code changes are handled by the Generic Coding Skill.

When planning testing work, focus on automated test files such as:

- `.spec.ts`
- `.test.ts`
- JUnit tests
- Mockito tests
- Jest tests
- Vitest tests
- Pytest tests
- Other existing repository test formats

## Testing Rules

Before modifying files:

1. Explain repository understanding.
2. Explain test scope.
3. Propose exact test file changes.
4. Provide an implementation plan.
5. Provide validation steps.
6. Ask for approval.

After approval:

- Modify only approved test files.
- Do not modify production files unless explicitly approved.
- Follow the existing test framework and project conventions.
- Do not introduce a new testing library unless clearly required.
- Prefer small, focused automated tests.
- Test behavior, not implementation details.
- Update stale tests when behavior intentionally changed.
- Do not modify unrelated files.
- Run test and build commands when available.
- Report exact changed files and exact terminal results.

## Required Planning Output

Use this format before implementation:

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
- Edge cases to consider:

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

Do not create, modify, delete, or run destructive commands until the user approves the plan.

## Required Final Output After Implementation

After implementation and validation, report:

## Changed Files

- File path 1

## Test Command Used

```bash
test command here