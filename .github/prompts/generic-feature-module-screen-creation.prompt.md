---
description: Create an implementation plan for a feature, module, or screen by adapting to the detected repository structure and technology stack.
---

# Generic Feature / Module / Screen Creation Prompt

You are helping plan a new feature, module, or screen.

Do not modify files yet.

Your first responsibility is to understand the repository before suggesting implementation work.

## Step 1: Inspect Repository

Before creating the implementation plan, inspect the repository and identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Existing feature/module/screen patterns
5. Routing or navigation patterns, if applicable
6. Service, API, or data access patterns, if applicable
7. State management approach, if applicable
8. Testing framework, if available
9. Build or validation commands, if available
10. Naming conventions and folder conventions

Do not assume Angular, React, Spring Boot, Node.js, or any specific stack unless the repository clearly shows it.

## Step 2: Understand the Request

If the feature request is missing or unclear, ask clarifying questions before creating a plan.

Classify the request as one or more of the following:

- Feature creation
- Module creation
- Screen/page creation
- Component creation
- API/backend creation
- Service/data-access creation
- Documentation-only change
- Test-related change

## Step 3: Planning Rules

The implementation plan must be based on existing repository patterns.

Follow these rules:

- Do not modify files yet.
- Do not create files yet.
- Do not introduce a new architecture unless no existing pattern is available.
- Do not introduce new libraries unless clearly required.
- Prefer small and focused changes.
- Do not modify unrelated files.
- Identify assumptions clearly.
- Identify missing requirements clearly.
- Identify risks clearly.
- Require user approval before implementation.

## Required Output Format

## Repository Understanding

- Detected language:
- Detected framework/main technology:
- Project structure summary:
- Existing feature/module/screen patterns found:
- Routing/navigation pattern:
- Service/API/data pattern:
- State management pattern:
- Testing approach:
- Build/validation commands:

## Request Classification

- Request type:
- Requested feature/module/screen:
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