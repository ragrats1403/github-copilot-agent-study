---
description: Estimate development effort by adapting to the detected repository structure, technology stack, feature scope, risks, and testing needs.
---

# Generic Development Estimation Prompt

Create a development effort estimate for the requested work.

Do not modify files.

This workflow is for estimating development effort, complexity, risks, assumptions, and possible implementation approach.

## Step 1: Inspect Repository

Before estimating, inspect the repository and identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Existing feature/module/screen/API patterns
5. Testing framework
6. Build and validation commands
7. Current Git changes, if relevant

Do not assume a specific technology stack unless the repository clearly shows it.

## Step 2: Understand the Request

Identify:

1. Requested feature or task
2. Business/user goal
3. Frontend scope
4. Backend scope
5. Database scope
6. Testing scope
7. Integration scope
8. Documentation scope
9. Missing requirements

## Estimation Rules

- Base the estimate on repository evidence and the stated requirement.
- Separate confirmed scope from assumptions.
- Do not overestimate without explaining why.
- Do not underestimate unknowns.
- Include risk and complexity.
- Include testing effort.
- Include review and validation effort.
- If requirements are unclear, list questions.
- Do not modify files.

## Required Output Format

## Repository Understanding

- Detected language:
- Detected framework/main technology:
- Project structure summary:
- Existing relevant patterns:
- Testing approach:
- Build/validation commands:

## Request Summary

- Requested work:
- Business/user goal:
- Scope type:
  - Frontend:
  - Backend:
  - Database:
  - Testing:
  - Documentation:

## Effort Estimate

| Work Item | Complexity | Estimated Effort | Notes |
|---|---|---|---|
| Item | Low / Medium / High | X hours / X days | Notes |

## Overall Estimate

- Best case:
- Most likely:
- Worst case:

## Complexity Assessment

- Technical complexity:
- Requirement clarity:
- Testing complexity:
- Integration complexity:
- Risk level:

## Assumptions

- Assumption 1

## Risks

- Risk 1

## Questions / Missing Information

- Question 1

## Recommendation

Provide a short recommendation for how to proceed.