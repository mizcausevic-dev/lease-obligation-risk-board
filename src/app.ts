// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  leaseObligationLane,
  obligationRiskBoard,
  payload,
  landlordPosture,
  summary,
  verification
} from "./services/leaseObligationRiskBoardService";
import {
  renderLeaseLane,
  renderObligationRisks,
  renderDocs,
  renderLandlordPosture,
  renderOverview,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5544);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/lease-lane", (_req, res) => res.type("html").send(renderLeaseLane()));
app.get("/obligation-risks", (_req, res) => res.type("html").send(renderObligationRisks()));
app.get("/landlord-posture", (_req, res) => res.type("html").send(renderLandlordPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/lease-lane", (_req, res) => res.json(leaseObligationLane()));
app.get("/api/obligation-risks", (_req, res) => res.json(obligationRiskBoard()));
app.get("/api/landlord-posture", (_req, res) => res.json(landlordPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Lease Obligation Risk Board listening on http://${host}:${port}`);
  });
}

export default app;
