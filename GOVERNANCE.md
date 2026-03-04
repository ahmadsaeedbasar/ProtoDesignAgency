# Governance Checklist

This checklist defines minimum repository controls for production safety.

## Branch Protection (`main`)

- [ ] Require pull request before merge
- [ ] Require at least 1 approving review
- [ ] Dismiss stale approvals when new commits are pushed
- [ ] Require conversation resolution before merge
- [ ] Require status checks to pass before merge
- [ ] Require branch to be up to date before merge
- [ ] Include administrators in restrictions
- [ ] Restrict force pushes
- [ ] Restrict branch deletions

## Required Status Checks

Use job-level required checks from `.github/workflows/ci.yml`:

- [ ] `quality / Lint`
- [ ] `quality / Test`
- [ ] `quality / Build`

If GitHub only exposes the full job name, require:

- [ ] `quality`

## PR Quality Rules

- [ ] PR template is required for all changes
- [ ] Link issue/requirement in PR description
- [ ] UI changes include screenshots
- [ ] Dev verifies `npm run lint`, `npm run test`, and `npm run build` locally before requesting review

## Dependency & Security Hygiene

- [ ] Dependabot enabled (weekly)
- [ ] Security policy present (`SECURITY.md`)
- [ ] No secrets committed (`.env` ignored, `.env.example` only)
- [ ] Run `npm audit` regularly and patch moderate/high vulnerabilities

## Release Controls

- [ ] Tag releases using semantic versioning (`vMAJOR.MINOR.PATCH`)
- [ ] Only merge release changes through PR (no direct pushes)
- [ ] Keep release notes per tag (GitHub Releases)
- [ ] Verify Docker image build before release

## Ownership (Optional but Recommended)

- [ ] Add `CODEOWNERS` for mandatory review paths
- [ ] Assign owners for `src/app`, `.github`, and DevOps files

## Incident Readiness

- [ ] Define escalation contact for production incidents
- [ ] Keep rollback procedure documented (last stable tag)
- [ ] Keep deployment runbook updated in `DEVOPS.md`