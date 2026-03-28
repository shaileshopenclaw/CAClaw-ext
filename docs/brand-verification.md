---
summary: "Phase 2 verification checklist and explicit exceptions for the CAClaw brand rollout"
read_when:
  - You want evidence that the primary CAClaw brand rollout is complete
  - You need to distinguish real leftover branding defects from preserved compatibility references
title: "CAClaw Brand Verification"
---

# CAClaw brand verification

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


This checklist records what Phase 2 changed, what was verified, and which remaining `OpenClaw` references are intentional for compatibility, history, or upstream-context reasons.

## Verified rollout surfaces

| Surface                                | File(s)                                                                         | Expected visible state                                                    | Verification result |
| -------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------- |
| README hero and onboarding-facing copy | `README.md`                                                                     | Product presented as `CAClaw` on top-level branding and guided setup copy | Verified            |
| Shared brand assets                    | `extensions/caclaw/assets/caclaw-logo-text.svg`, `extensions/caclaw/assets/caclaw-logo-text-dark.svg` | Shared wordmark assets visibly render `CAClaw`                            | Verified            |
| Web UI shell                           | `ui/index.html`                                                                 | Browser title shows `CAClaw Control`                                      | Verified            |
| CLI tagline                            | `src/cli/tagline.ts`                                                            | Default visible tagline uses `CAClaw`                                     | Verified            |
| Android packaged artifact naming       | `apps/android/app/build.gradle.kts`                                             | APK output names use `caclaw-*`                                           | Verified            |
| iOS visible display names              | `apps/ios/project.yml`                                                          | App and extension display names show `CAClaw`                             | Verified            |

## Verification commands used

```bash
grep -n 'CAClaw' README.md ui/index.html src/cli/tagline.ts apps/ios/project.yml extensions/caclaw/assets/caclaw-logo-text.svg extensions/caclaw/assets/caclaw-logo-text-dark.svg
grep -n 'caclaw-' apps/android/app/build.gradle.kts
grep -n 'CFBundleDisplayName: CAClaw\|CFBundleDisplayName: CAClaw Share\|CFBundleDisplayName: CAClaw Activity' apps/ios/project.yml
grep -n 'OpenClaw' README.md ui/index.html src/cli/tagline.ts
```

## Intentional compatibility-preserved references

These references remain by design and do not count as Phase 2 rollout failures.

### Runtime and package compatibility

- `openclaw` CLI command examples remain unchanged because the runtime command has not been migrated.
- package ids such as `openclaw-control-ui` remain unchanged because they are compatibility-facing internals.
- iOS bundle ids, Android namespace/application ids, storage keys, and route/base-path contracts remain `openclaw`-prefixed where they are operational identifiers rather than visible product labels.

### Explicitly allowed visible exceptions on targeted surfaces

- `README.md:22` references the underlying OpenClaw platform intentionally to explain that CAClaw is built on it.
- `README.md:402` references a third-party plugin compatibility requirement for `@tencent-weixin/openclaw-weixin`; this is an upstream/package constraint, not product branding.
- `README.md:491` keeps the historical origin statement about Molty and OpenClaw.
- `README.md:555` preserves the contributor title `Steve (OpenClaw)` because it is a contributor label, not current product UI.

## No unexplained leftovers on the targeted primary surfaces

- `ui/index.html` has no remaining visible `OpenClaw` product labels.
- `src/cli/tagline.ts` has no remaining `OpenClaw` product label in the default tagline.
- Remaining targeted-surface `OpenClaw` references are documented above and justified.

## Follow-on note

Phase 3 should focus on plain-language CA UX, not on broad internal identifier migration. If a future phase changes commands, bundle ids, or package ids, that should be planned as compatibility work rather than hidden inside copy or visual cleanup.
