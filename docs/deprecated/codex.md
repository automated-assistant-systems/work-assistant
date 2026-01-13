# Codex (MindForge Orchestrator) — Deprecated

## Status

**Deprecated:** Yes  
**Effective Date:** 2026-01-XX  
**Repository:** work-assistant  
**Replacement:** Task Assistant (GitHub App)

---

## Overview

Codex (formerly *MindForge Orchestrator*) was an internal GitHub automation system
used to experiment with issue management, telemetry, and PR orchestration.

Codex is **no longer active** in this repository and must not be re-enabled.

All automation responsibilities previously handled by Codex have been
formally transferred to **Task Assistant**.

---

## Reason for Deprecation

Codex was deprecated for the following reasons:

1. **Superseded Architecture**
   - Task Assistant provides a cleaner, config-driven, marketplace-ready implementation
   - Removes experimental and repo-specific coupling

2. **Operational Risk Reduction**
   - Eliminates overlapping automation authorities
   - Prevents conflicting workflows and telemetry writers

3. **Product Consolidation**
   - Task Assistant is the supported, maintained, and documented automation system
   - Codex is no longer developed or supported

---

## Scope of Deprecation

The following Codex components have been deprecated and removed or disabled:

- GitHub Actions workflows
- Automation scripts and engines
- Codex configuration files
- Codex secrets and credentials
- Codex telemetry writers

Any remaining Codex artifacts exist **only for historical reference** and must not
be reintroduced into active workflows.

---

## Migration Path

| Codex Capability | Replacement |
|------------------|-------------|
| Issue automation | Task Assistant |
| Label enforcement | Task Assistant |
| Milestone enforcement | Task Assistant |
| Telemetry emission | Task Assistant |
| PR orchestration | Task Assistant |

There is **no backward compatibility** with Codex.

---

## Historical Reference

Codex activity prior to deprecation may remain visible in:

- Commit history
- Closed issues and pull requests
- Archived telemetry artifacts (if retained)

These records are preserved for audit and documentation purposes only.

---

## Policy

- Codex **must not** be reinstalled in this repository
- Codex workflows **must not** be reintroduced
- All future automation must be implemented via **Task Assistant**

Violations of this policy should be treated as a configuration or governance error.

---

## Maintainers

This deprecation is intentional and permanent.

For automation changes or questions, refer to:
- Task Assistant documentation
- Repository maintainers

