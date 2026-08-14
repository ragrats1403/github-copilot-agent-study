---
name: generic-development-estimation-skill
description: Estimate development effort by analyzing repository context, requested scope, complexity, assumptions, risks, testing effort, and validation needs.
---

# Generic Development Estimation Skill

Use this skill when the user asks for effort estimation, task sizing, project planning, impact analysis, or development complexity assessment.

This includes:

- Feature effort estimation
- Module or screen estimation
- Backend/API estimation
- Full-stack estimation
- Testing effort estimation
- Risk and assumption analysis
- Best-case, likely-case, and worst-case effort ranges

## Core Rule

Inspect the repository and request context before estimating.

Do not modify files.

## Repository Inspection Checklist

Before estimating, identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Existing feature/module/screen/API patterns
5. Existing testing framework
6. Build command
7. Test command
8. Current Git changes, if relevant

## Scope Checklist

Identify whether the request includes:

1. Frontend work
2. Backend work
3. Database work
4. API integration
5. Authentication or authorization
6. State management
7. Validation rules
8. Error handling
9. Testing
10. Documentation
11. Deployment or configuration changes

## Estimation Rules

- Separate confirmed scope from assumptions.
- Do not overestimate without explaining why.
- Do not underestimate unclear or missing requirements.
- Include testing, review, and validation effort.
- Include risks and dependencies.
- Mention unknowns clearly.
- Do not modify files.
- Do not create implementation files.
- Do not run destructive commands.

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