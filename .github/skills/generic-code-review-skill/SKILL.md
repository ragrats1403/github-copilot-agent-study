---
name: generic-code-review-skill
description: Review code changes by adapting to the detected repository structure, technology stack, conventions, risks, and validation requirements.
---

# Generic Code Review Skill

Use this skill when the user asks for code review, pull request review, change review, or quality review.

This includes reviewing:

- Feature changes
- Module or screen changes
- Backend/API changes
- Test changes
- Refactoring changes
- Documentation-related code changes
- Current Git changes

## Core Rule

Inspect the repository and changed files before reviewing.

Do not modify files.

## Repository Inspection Checklist

Before reviewing, identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Existing conventions
5. Changed files
6. Related files
7. Testing framework
8. Build command
9. Test command

## Review Checklist

Review the changed files for:

1. Correctness
2. Runtime errors
3. Type errors
4. Framework-specific mistakes
5. Routing/navigation issues
6. Validation issues
7. Security concerns
8. Error handling gaps
9. Maintainability
10. Duplication
11. Performance concerns
12. Test quality
13. Missing test coverage
14. Scope creep
15. Consistency with existing project patterns

## Severity Levels

Use these severity levels:

- Critical: likely production-breaking, data-loss, security vulnerability, or major runtime failure
- High: serious bug or broken user flow
- Medium: issue that can cause incorrect behavior or maintainability problems
- Low: minor improvement
- Suggestion: optional improvement or cleanup

## Review Rules

- Do not modify files.
- Do not rewrite code unless asked.
- Do not invent issues.
- Focus on actionable findings.
- Include exact file names.
- Include impact and recommended fix.
- Distinguish blocking issues from suggestions.
- If no major issue is found, say so clearly.
- Avoid over-reporting low-value nitpicks.
- Mention validation status if test/build results are available.
- Use actual build/test results as stronger evidence than assumptions.
- If `npm run build` and automated tests pass, avoid claiming compile-breaking issues unless the issue is independently proven.
- Clearly separate verified defects from possible compatibility concerns.

## Required Output Format

## Repository Understanding

- Detected language:
- Detected framework/main technology:
- Changed files reviewed:
- Related files checked:
- Build command:
- Test command:

## Framework Version Validation Rule

Before reporting framework-specific issues, verify the framework version and current framework behavior.

Do not report an issue as Critical or High based only on older framework conventions.

For Angular projects:

- Check the Angular version from `package.json`.
- In Angular 19 and later, components are standalone by default, so missing `standalone: true` is not automatically an error.
- `styleUrl` is valid for a single stylesheet in modern Angular.
- Do not recommend changing `styleUrl` to `styleUrls` unless the project version or build output proves it is required.

If build and tests already passed, do not claim that the code will fail to compile unless there is direct evidence.

Prefer wording such as:

- "Verify against the project's Angular version"
- "Potential compatibility concern"
- "No issue if build/test already passes"

Do not mark version-dependent assumptions as Critical without validation evidence.

## Findings

### Finding 1

- Severity:
- File:
- Problem:
- Impact:
- Recommended Fix:
- Suggested Test:

## Summary

- Blocking issues:
- Non-blocking issues:
- Scope alignment:
- Test/build status:
- Overall review result:

## Recommendation

Provide a short recommendation for next action.