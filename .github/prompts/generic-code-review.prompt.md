---
description: Review current code changes using a generic repository-adaptive checklist.
---

# Generic Code Review Prompt

Review the current Git changes.

Do not modify files.

Before reviewing, inspect the repository and identify:

1. Programming language
2. Framework or main technology
3. Project structure
4. Testing framework
5. Existing coding conventions
6. Build or validation commands if available

Then review the changes for:

1. Functional bugs
2. Security risks
3. Missing validation
4. Missing error handling
5. Incorrect assumptions
6. Type safety issues
7. Performance issues
8. Maintainability issues
9. Code duplication
10. Missing or weak tests
11. Project convention violations

For each finding, use this format:

## Finding

**Severity:** Critical / High / Medium / Low / Suggestion  
**File:** File path  
**Problem:** Explain the issue clearly  
**Impact:** Explain what could happen  
**Recommended Fix:** Provide a specific correction  
**Suggested Test:** Describe a test that would catch this issue  

If no meaningful issues are found, say that clearly and list what was reviewed.

End with:

## Summary

- Files reviewed:
- Main risks:
- Suggested next steps: