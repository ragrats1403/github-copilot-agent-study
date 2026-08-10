# 03 - Custom Instructions, Prompt Files, Skills, and Custom Agents

## Purpose

This document explains the difference between Custom Instructions, Prompt Files, Skills, and Custom Agents as part of OD-001: GitHub Copilot Study.

These concepts are related, but they are not the same. Understanding the difference is important before creating reusable GitHub Copilot agents and skills.

---

## Simple Summary

| Concept | Simple Meaning |
|---|---|
| Custom Instructions | General rules Copilot should follow |
| Prompt Files | Reusable prompts for repeated tasks |
| Skills | Reusable capability packages for specialized workflows |
| Custom Agents | Role-based Copilot configurations for specific responsibilities |

---

## 1. Custom Instructions

Custom Instructions are persistent rules that guide Copilot behavior.

They are useful for rules that should apply often.

Example:

```text
Follow the existing project structure.
Use strict TypeScript.
Do not introduce new libraries without approval.
Prefer simple and maintainable solutions.
Run tests before saying the task is complete.