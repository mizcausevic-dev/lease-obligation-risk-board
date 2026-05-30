// SPDX-License-Identifier: AGPL-3.0-or-later

import { landlordPackets, leaseLane, obligationRisks } from "../data/sampleLeaseObligations";

export function summary() {
  return {
    leaseChanges: leaseLane.length,
    urgentObligations: leaseLane.filter((item) => item.risk === "red").length,
    blockedRenewals: obligationRisks.filter((item) => item.readiness !== "green").length,
    riskyPackets: landlordPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Repair insurance, CAM, and option-date blockers first so lease renewals do not close with exposure, disputed obligations, or unenforceable notices."
  };
}

export function leaseObligationLane() {
  return leaseLane;
}

export function obligationRiskBoard() {
  return obligationRisks;
}

export function landlordPosture() {
  return landlordPackets;
}

export function verification() {
  return [
    "Lease changes map to named evidence packets, not just comments in a leasing thread.",
    "Obligation risks surface the exact proof still required before a renewal or option packet is safe to circulate.",
    "Landlord posture ties insurance, CAM, riders, and notices into one readable operating packet.",
    "The board is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real tenants, leases, addresses, or legal notices are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    leaseLane: leaseObligationLane(),
    obligationRisks: obligationRiskBoard(),
    landlordPackets: landlordPosture(),
    verification: verification()
  };
}
