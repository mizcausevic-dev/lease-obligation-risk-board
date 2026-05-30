import { describe, expect, test } from "vitest";

import {
  renderDocs,
  renderLandlordPosture,
  renderLeaseLane,
  renderObligationRisks,
  renderOverview,
  renderVerification
} from "./render";
import {
  landlordPackets,
  leaseLane,
  obligationRisks
} from "../data/sampleLeaseObligations";

const renderers = [
  ["overview", renderOverview],
  ["lease-lane", renderLeaseLane],
  ["obligation-risks", renderObligationRisks],
  ["landlord-posture", renderLandlordPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Lease Obligation Risk Board");
    expect(html).toContain('href="/lease-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("lease lane lists every change with a risk tag", () => {
    const html = renderLeaseLane();
    for (const change of leaseLane) {
      expect(html).toContain(change.leaseId);
    }
    expect(html).toContain('class="st needs"');
  });

  test("obligation risks list every blocker with readiness tags", () => {
    const html = renderObligationRisks();
    for (const block of obligationRisks) {
      expect(html).toContain(block.riskId);
    }
    expect(html).toContain('class="bad"');
    expect(html).toContain("Lease enforceability");
  });

  test("landlord posture shows packets and completeness scores", () => {
    const html = renderLandlordPosture();
    for (const packet of landlordPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/obligation-risks");
    expect(html).toContain("/landlord-posture");
  });
});
