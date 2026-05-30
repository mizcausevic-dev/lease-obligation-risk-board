import { describe, expect, test } from "vitest";

import {
  landlordPosture,
  leaseObligationLane,
  obligationRiskBoard,
  summary,
  verification
} from "./services/leaseObligationRiskBoardService";

describe("lease-obligation-risk-board", () => {
  test("returns a renewal-safe recommendation", () => {
    expect(summary().recommendation).toMatch(/renewal|lease|notice/i);
  });

  test("maps lease changes and obligation risks", () => {
    expect(leaseObligationLane().length).toBeGreaterThan(2);
    expect(obligationRiskBoard().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("verification posture stays buyer-readable", () => {
    expect(landlordPosture().every((packet) => packet.marketOrAsset.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("lease"))).toBe(true);
  });
});
