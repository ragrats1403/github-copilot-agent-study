# 04 - Copilot Feature Creation Experiments

## Purpose

This document defines a structured place for tracking GitHub Copilot feature creation experiments.
The goal is to capture experiment goals, status updates, results, decision outcomes, and learnings in a consistent way.

---

## Experiment Tracking Table

| Experiment | Date | Status | Goal | Related Prompt(s) | Related Sample Project(s) | Decision Outcome |
|---|---|---|---|---|---|---|
| Copilot agent prompt review workflow | 2026-08-11 | Completed | Validate a generic code review prompt | `.github/prompts/generic-code-review.prompt.md` | `sample-projects/typescript-review-sample` | Use explicit repo inspection guidance in prompts |

---

## Experiment Entry Template

Use the template below for new experiments.

- **Experiment:** Short descriptive title
- **Date:** YYYY-MM-DD
- **Status:** Planned / In Progress / Completed / Blocked
- **Goal:** What feature or workflow the experiment is testing
- **Approach:** Tools, prompts, or repo artifacts used
- **Related Prompt(s):** Prompt file paths or names
- **Related Sample Project(s):** Sample project folders or relevant code
- **Result:** What happened and whether the experiment succeeded
- **Decision Outcome:** What was decided based on this experiment
- **Learnings:** Key takeaways and recommended next steps
- **Artifacts:** Links to related docs, prompts, sample projects, or notes

---

## Sample Experiments

### Experiment 1: Copilot agent prompt review workflow

- **Experiment:** Copilot agent prompt review workflow
- **Date:** 2026-08-11
- **Status:** Completed
- **Goal:** Validate a generic code review prompt for reviewing repository changes
- **Approach:** Use `.github/prompts/generic-code-review.prompt.md` and review sample repository state
- **Related Prompt(s):** `.github/prompts/generic-code-review.prompt.md`
- **Related Sample Project(s):** `sample-projects/typescript-review-sample`
- **Result:** Confirmed the prompt can guide a repository-aware review process
- **Decision Outcome:** Use explicit repository inspection and review format guidance in prompt templates
- **Learnings:** Keep prompt instructions explicit about repository inspection, project context, and review format
- **Artifacts:** `.github/prompts/generic-code-review.prompt.md`

---

## Recommended Process

1. Add a new experiment entry whenever a Copilot feature, prompt, or workflow is tested.
2. Record related prompt files and sample project references.
3. Track status updates and decision outcomes clearly.
4. Update the experiment entry as the work progresses.
5. Capture concrete learnings and any follow-up actions.

---

## How to Use This Page

- Use this document as the single source of truth for Copilot feature experiments in this repo.
- Refer to it when planning new prompt files, documentation, or sample project experiments.
- Keep experiment descriptions concise and actionable.
- Use the template and table to make experiments easier to compare over time.
