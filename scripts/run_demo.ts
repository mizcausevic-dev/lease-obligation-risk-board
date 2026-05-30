import { payload, summary } from "../src/services/leaseObligationRiskBoardService";

console.log("lease-obligation-risk-board demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().obligationRisks, null, 2));
