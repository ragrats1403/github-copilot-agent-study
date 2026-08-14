---
name: generic-coding-skill
description: Plan and implement coding work such as features, modules, screens, components, APIs, or documentation changes by adapting to the detected repository structure and technology stack.
---

# Generic Coding Skill

Use this skill when the user asks to create, modify, or plan coding work.

This includes:

- Feature creation
- Module creation
- Screen or page creation
- Component creation
- Backend API creation
- Service or data-access creation
- Documentation-only implementation
- Small refactoring connected to a feature request

## Core Rule

Inspect the repository before planning or implementing.

Do not assume the technology stack. Detect it from the repository.

## Repository Inspection Checklist

Before planning, identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Existing feature/module/screen patterns
5. Routing or navigation pattern
6. Service, API, or data-access pattern
7. State management approach
8. Testing framework
9. Build command
10. Test command
11. Naming and folder conventions

## Request Classification

Classify the user request as one or more of:

- Frontend feature
- Backend feature
- Full-stack feature
- Module creation
- Screen/page creation
- Component creation
- API/backend creation
- Service/data-access creation
- Documentation-only change
- Test-related change

## Planning Rules

Before modifying files:

1. Explain repository understanding.
2. Explain request classification.
3. Propose exact file changes.
4. Provide an implementation plan.
5. Provide validation steps.
6. List assumptions, risks, and missing requirements.
7. Ask for approval.

## Implementation Rules

After approval:

- Modify only approved files.
- Keep changes focused.
- Follow existing project conventions.
- Do not introduce new libraries unless clearly required.
- Do not modify unrelated files.
- Prefer simple, maintainable implementation.
- Run build and tests when available.
- Report exact changed files.

## Required Planning Output

Use this format before implementation:

## Boundary With Testing Workflow

This skill may identify that automated tests are needed, but it should not create or modify automated test files unless the user explicitly asks for coding and testing together.

For the OD-002 workflow, automated test creation is handled by the Generic Testing Skill.

When planning a coding task, list test needs under the Validation Plan or Follow-up Testing Needs section instead of proposing `.spec.ts`, `.test.ts`, JUnit, or other automated test files as part of the coding implementation.

## Repository Understanding

- Detected language:
- Detected framework/main technology:
- Project structure summary:
- Existing patterns found:
- Build command:
- Test command:

## Request Classification

- Request type:
- Requested work:
- Business/user goal:
- Main user flow:

## Proposed File Changes

| Action | File Path | Purpose |
|---|---|---|
| Create / Modify | path/to/file | reason |

## Implementation Plan

1. Step one
2. Step two
3. Step three

## Validation Plan

- Build command:
- Test command:
- Manual validation steps:

## Risks, Assumptions, and Questions

### Assumptions

- Assumption 1

### Risks

- Risk 1

### Questions

- Question 1

## Approval Required

Stop after this plan.

Do not create, modify, delete, or run destructive commands until the user approves the plan.

Do not include automated test files in Proposed File Changes unless the user explicitly asks to include tests in the coding implementation.