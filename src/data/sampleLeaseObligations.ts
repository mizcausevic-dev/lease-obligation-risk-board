export type LeaseLaneItem = {
  leaseId: string;
  property: string;
  portfolio: string;
  issueType: string;
  owner: string;
  nextAction: string;
  risk: "red" | "yellow" | "green";
  excerpt: string;
};

export type ObligationRisk = {
  riskId: string;
  obligation: string;
  owner: string;
  source: string;
  readiness: "red" | "yellow" | "green";
  requiredEvidence: string;
  impactArea: string;
  note: string;
};

export type LandlordPacket = {
  packetId: string;
  marketOrAsset: string;
  completenessScore: number;
  status: "red" | "yellow" | "green";
  blocker: string;
  nextReviewHours: number;
  decisionNote: string;
};

export const leaseLane: LeaseLaneItem[] = [
  {
    leaseId: "LS-104",
    property: "Harbor Point Tower",
    portfolio: "Multifamily",
    issueType: "Insurance certificate gap",
    owner: "Asset Management",
    nextAction: "Collect updated COI and reissue landlord packet",
    risk: "red",
    excerpt: "The renewal packet is ready, but the tenant insurance certificate on file expired before the amended possession date."
  },
  {
    leaseId: "LS-118",
    property: "Cedar Grove Shops",
    portfolio: "Retail",
    issueType: "CAM true-up dispute",
    owner: "Property Operations",
    nextAction: "Lock CAM support schedule and send exception summary",
    risk: "yellow",
    excerpt: "The renewal is commercially acceptable, but the CAM true-up packet is still missing one disputed utility allocation."
  },
  {
    leaseId: "LS-132",
    property: "Northline Flex Campus",
    portfolio: "Industrial",
    issueType: "Maintenance covenant drift",
    owner: "Facilities Governance",
    nextAction: "Publish corrected maintenance rider and approval log",
    risk: "yellow",
    excerpt: "The lease rider changed after the last approval round, but the tenant packet still reflects the earlier maintenance cadence."
  },
  {
    leaseId: "LS-149",
    property: "Station Square Offices",
    portfolio: "Office",
    issueType: "Expansion option timing mismatch",
    owner: "Leasing Counsel",
    nextAction: "Repair option dates and route amended notice for signature",
    risk: "red",
    excerpt: "The expansion option notice references the prior commencement date, which would invalidate the current election window."
  }
];

export const obligationRisks: ObligationRisk[] = [
  {
    riskId: "OB-21",
    obligation: "Missing insurance renewal packet",
    owner: "Asset Management",
    source: "Tenant file and insurer correspondence",
    readiness: "red",
    requiredEvidence: "Updated COI, landlord acknowledgment, and revised occupancy file",
    impactArea: "Occupancy and landlord exposure",
    note: "Without the new certificate packet, the landlord would renew the lease into an uncovered insurance state."
  },
  {
    riskId: "OB-28",
    obligation: "CAM evidence not reconciled",
    owner: "Property Operations",
    source: "CAM workbook and renewal packet",
    readiness: "yellow",
    requiredEvidence: "Final CAM schedule, utility support, and exception acknowledgment",
    impactArea: "Commercial renewal trust",
    note: "The tenant is ready to sign, but the final CAM support schedule still has one disputed line item."
  },
  {
    riskId: "OB-34",
    obligation: "Maintenance rider not fully acknowledged",
    owner: "Facilities Governance",
    source: "Rider package and service schedule",
    readiness: "yellow",
    requiredEvidence: "Corrected rider, tenant signoff, and updated service matrix",
    impactArea: "Service-level enforceability",
    note: "The negotiated maintenance change is valid, but the signed rider set still trails the new operating cadence."
  },
  {
    riskId: "OB-41",
    obligation: "Expansion option notice misdated",
    owner: "Leasing Counsel",
    source: "Option notice and commencement records",
    readiness: "red",
    requiredEvidence: "Corrected notice, commencement audit, and countersignature package",
    impactArea: "Lease enforceability",
    note: "The option packet still references the old commencement date, which risks invalidating the current notice."
  }
];

export const landlordPackets: LandlordPacket[] = [
  {
    packetId: "PK-07",
    marketOrAsset: "Harbor Point Tower renewal packet",
    completenessScore: 59,
    status: "red",
    blocker: "Insurance packet gap and occupancy exposure",
    nextReviewHours: 16,
    decisionNote: "Do not circulate for signature until the insurance packet and landlord acknowledgment are reconciled."
  },
  {
    packetId: "PK-14",
    marketOrAsset: "Cedar Grove Shops CAM review",
    completenessScore: 76,
    status: "yellow",
    blocker: "CAM support schedule still pending",
    nextReviewHours: 24,
    decisionNote: "The packet can clear if disputed CAM support is closed in the next operator cycle."
  },
  {
    packetId: "PK-22",
    marketOrAsset: "Northline Flex Campus rider sync",
    completenessScore: 83,
    status: "yellow",
    blocker: "Maintenance rider matrix not fully updated",
    nextReviewHours: 30,
    decisionNote: "Hold until the rider proof and tenant acknowledgment stay aligned."
  },
  {
    packetId: "PK-31",
    marketOrAsset: "Internal landlord packet sync",
    completenessScore: 96,
    status: "green",
    blocker: "No active blocker",
    nextReviewHours: 72,
    decisionNote: "Packet is safe for governed landlord review and final tenant circulation."
  }
];
