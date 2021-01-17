export enum Operations {
  SEND_EMAIL = "SEND_EMAIL",
  SEND_PUSH_NOTIFICATION = "SEND_PUSH_NOTIFICATION",
}

export interface ActionType {
  type: Operations;
  payload: Record<string, string>;
}
