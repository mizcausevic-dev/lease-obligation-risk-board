# Architecture

## Overview

`lease-obligation-risk-board` is a lightweight TypeScript + Express control plane for modeling the operating layer between lease changes, renewal blockers, and landlord-safe packet posture.

## Surfaces

- `overview`
  - active lease changes
  - blocked renewals
  - packet readiness
  - governance recommendation
- `lease-lane`
  - property-by-property queue
  - owner routing
  - downstream packet impact
- `obligation-risks`
  - insurance, CAM, rider, and option blockers
  - required evidence
  - readiness posture
- `landlord-posture`
  - landlord and counsel packets
  - completeness score
  - next review timing
- `verification`
  - what the repo proves about lease-governance systems

## Data Model

- `LeaseLaneItem`
  - property, portfolio, owner, risk, issue type, next action
- `ObligationRisk`
  - obligation, source, required evidence, owner, readiness, impact area
- `LandlordPacket`
  - packet completeness, blocker, review window, decision note

## Design Principle

Lease state should be inspectable by leasing, property, legal, and revenue stakeholders. The system should explain:
- which lease change is under pressure right now
- which evidence packet is still missing
- who owns the next move
- where enforceability or exposure risk is building
