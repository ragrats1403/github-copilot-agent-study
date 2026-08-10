# 04 - Copilot Feature Creation Experiments

## Purpose

This document defines a structured place for tracking GitHub Copilot feature creation experiments.
The goal is to capture experiment goals, status, results, and learnings in a consistent way.

---

## Experiment Tracking

Use this section to summarize each experiment with a clear title, date, status, and outcome.

### Experiment Entry Template

- **Experiment:** Short descriptive title
- **Date:** YYYY-MM-DD
- **Status:** Planned / In Progress / Completed / Blocked
- **Goal:** What feature or workflow the experiment is testing
- **Approach:** Tools, prompts, or repo artifacts used
- **Result:** What happened and whether the experiment succeeded
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
- **Result:** Confirmed the prompt can guide a repository-aware review process
- **Learnings:** Keep prompt instructions explicit about repository inspection and review format
- **Artifacts:** `.github/prompts/generic-code-review.prompt.md`

---

## Recommended Process

1. Add a new experiment entry whenever a new Copilot feature or workflow is tested.
2. Link the experiment to the relevant prompt, docs, or sample project.
3. Capture the status and update it as the experiment progresses.
4. Record concrete learnings and any changes that should be made to prompts or documentation.

---

## How to Use This Page

- Use this document as the single source of truth for Copilot feature experiments in this repo.
- Refer to it when planning new prompt files or docs updates.
- Keep experiment descriptions concise and actionable.
- Use the template to make comparisons easier over time.
