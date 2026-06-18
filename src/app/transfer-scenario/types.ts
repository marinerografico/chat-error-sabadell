export type TransferStep =
  | "closed"
  | "distributive"
  | "form"
  | "summary-detail"
  | "signing"
  | "summary-relational"
  | "signing-deferred"
  | "outcome-scheduled"
  | "outcome-bizum"
  | "outcome-manager";

export type BizumStep = "closed" | "distributive" | "form" | "signing" | "success";

export type IncidentStatus = "none" | "open" | "resolved";

export type AssistantMode = "hidden" | "drawer" | "expanded" | "minimized";

export type ResolutionPath = "none" | "bizum" | "deferred" | "manager";

export type ChatRole = "event" | "assistant" | "user" | "success";

export type ChatAction = {
  id: string;
  label: string;
  tag?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export type CrossSellCard = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
};

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  actions?: ChatAction[];
  crossSell?: CrossSellCard[];
  timestamp: number;
};

export type TransferDraft = {
  beneficiary: string;
  iban: string;
  amount: string;
  concept: string;
  accountName: string;
  ordenante: string;
  balance: string;
};

export const SIGNATURE_CODE = "806482";

export const DEFAULT_TRANSFER: TransferDraft = {
  beneficiary: "María del Carmen García",
  iban: "ES21 0081 5331 0001 2345 6789",
  amount: "150,00",
  concept: "Pago vacaciones",
  accountName: "CUENTA SABADELL",
  ordenante: "LAURA GARCÍA MARTÍNEZ",
  balance: "11.263,22",
};
