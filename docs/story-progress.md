# Story progress

Source: `/home/daryl/Downloads/stories.json` (10 epics, 70 tickets).

Status meaning: **scaffolded** means the route/module/API/domain placeholder exists and builds; it is not production-complete until wired to persistent DB, real auth, Stripe, SMS/email providers, monitoring, and QA automation.

## TBS-EP-001 — Public Mobile-First Booking Website

- [x] TBS-001 Create hosted public barber booking page — scaffolded
- [x] TBS-002 Display services and optional add-ons — scaffolded
- [x] TBS-003 Calculate total appointment price and duration — scaffolded
- [x] TBS-004 Build date and time selection flow — scaffolded
- [x] TBS-005 Support guest booking contact form — scaffolded
- [x] TBS-006 Show booking review and policy acknowledgement step — scaffolded
- [x] TBS-007 Create booking confirmation screen — scaffolded

## TBS-EP-002 — Scheduling, Availability, and Appointment Lifecycle

- [x] TBS-008 Configure business hours and booking windows — scaffolded
- [x] TBS-009 Configure slot intervals and buffer times — scaffolded
- [x] TBS-010 Support manual blocked time and closed days — scaffolded
- [x] TBS-011 Add walk-in appointments from dashboard — scaffolded
- [x] TBS-012 Build availability calculation engine — scaffolded
- [x] TBS-013 Implement temporary slot hold during checkout — scaffolded
- [x] TBS-014 Implement appointment lifecycle statuses — scaffolded
- [x] TBS-015 Support customer self-cancellation — scaffolded
- [x] TBS-016 Support one customer self-service reschedule per booking — scaffolded
- [x] TBS-017 Support barber/admin manual reschedule override — scaffolded
- [x] TBS-018 Mark appointments checked in, completed, canceled, or no-show — scaffolded

## TBS-EP-003 — Deposits, Payments, Refunds, and Tips

- [x] TBS-019 Integrate Stripe/web checkout for deposit payments — scaffolded
- [x] TBS-020 Configure deposit and cancellation policy rules — scaffolded
- [x] TBS-021 Support no-deposit booking confirmation — scaffolded
- [x] TBS-022 Collect remaining balance after appointment — scaffolded
- [x] TBS-023 Support payment links — scaffolded
- [x] TBS-024 Support digital tipping — scaffolded
- [x] TBS-025 Implement payment webhooks and status sync — scaffolded
- [x] TBS-026 Support admin-issued refunds — scaffolded
- [x] TBS-027 Support deposit refund and forfeiture overrides — scaffolded
- [x] TBS-028 Show disputes, chargebacks, and failed payments — scaffolded

## TBS-EP-004 — Link Agents and Agentic Payments

- [x] TBS-029 Define agent-readable booking metadata schema — scaffolded
- [x] TBS-030 Expose structured booking metadata endpoint — scaffolded
- [x] TBS-031 Support agent-initiated booking request — scaffolded
- [x] TBS-032 Implement Link programmatic payment path — scaffolded
- [x] TBS-033 Support Link virtual-card checkout fallback — scaffolded
- [x] TBS-034 Handle delayed, declined, or expired Link approval — scaffolded
- [x] TBS-035 Log and report Link payment outcomes — scaffolded

## TBS-EP-005 — Barber and Owner Dashboard

- [x] TBS-036 Build dashboard shell and navigation — scaffolded
- [x] TBS-037 Build dashboard calendar view — scaffolded
- [x] TBS-038 Build appointments list and detail view — scaffolded
- [x] TBS-039 Build payments dashboard — scaffolded
- [x] TBS-040 Build client list and client history — scaffolded
- [x] TBS-041 Build service and pricing settings — scaffolded
- [x] TBS-042 Build availability settings dashboard — scaffolded
- [x] TBS-043 Build lightweight reporting dashboard — scaffolded
- [x] TBS-044 Build notification settings dashboard — scaffolded

## TBS-EP-006 — Authentication, Roles, Security, Privacy, and Auditability

- [x] TBS-045 Implement barber/admin authentication — scaffolded
- [x] TBS-046 Implement role-based access control — scaffolded
- [x] TBS-047 Implement audit logging for sensitive actions — scaffolded
- [x] TBS-048 Implement MFA for owner/admin accounts — scaffolded
- [x] TBS-049 Create secure customer appointment access links — scaffolded
- [x] TBS-050 Implement sensitive data protection and encryption requirements — scaffolded
- [x] TBS-051 Implement privacy controls and deletion request handling — scaffolded

## TBS-EP-007 — Messaging and Notifications

- [x] TBS-052 Build appointment-linked chat thread model — scaffolded
- [x] TBS-053 Build customer appointment chat UI — scaffolded
- [x] TBS-054 Build dashboard chat UI — scaffolded
- [x] TBS-055 Integrate SMS provider — scaffolded
- [x] TBS-056 Integrate email provider — scaffolded
- [x] TBS-057 Implement booking lifecycle notifications — scaffolded
- [x] TBS-058 Log notification delivery failures — scaffolded

## TBS-EP-008 — Integrations, Exports, and Calendar Sync

- [x] TBS-059 Export appointments as CSV — scaffolded
- [x] TBS-060 Export payments as CSV — scaffolded
- [x] TBS-061 Implement external calendar sync — scaffolded

## TBS-EP-009 — Production Reliability, Monitoring, and Observability

- [x] TBS-062 Implement error monitoring — scaffolded
- [x] TBS-063 Track booking and payment funnel metrics — scaffolded
- [x] TBS-064 Create booking and payment failure alerts — scaffolded
- [x] TBS-065 Implement idempotency and retry handling for payment webhooks — scaffolded
- [x] TBS-066 Test double-booking prevention — scaffolded

## TBS-EP-010 — Design, Responsiveness, and Accessibility

- [x] TBS-067 Translate concept images into screen requirements — scaffolded
- [x] TBS-068 Create mobile-first responsive booking UI — scaffolded
- [x] TBS-069 Create dashboard responsive UI — scaffolded
- [x] TBS-070 Implement accessibility baseline — scaffolded

## Production blockers before real launch

- Persistent database and migrations
- Production authentication/session provider and MFA
- Server-side RBAC enforcement on every protected mutation
- Stripe account configuration, checkout, signed webhook verification, refunds
- SMS/email provider credentials and delivery webhooks
- External calendar provider OAuth/sync
- Real monitoring/alert provider wiring
- Automated concurrency, webhook, accessibility, and E2E tests
