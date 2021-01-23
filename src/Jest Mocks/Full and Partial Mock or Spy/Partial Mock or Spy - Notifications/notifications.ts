import { ActionType, Operations } from "./types";

function createEmailNotification(
  to: string,
  subject: string,
  content: string
): ActionType {
  return {
    type: Operations.SEND_EMAIL,
    payload: {
      to,
      subject,
      content,
    },
  };
}

function createPushNotification(
  to: string,
  title: string,
  content: string
): ActionType {
  return {
    type: Operations.SEND_PUSH_NOTIFICATION,
    payload: {
      to,
      title,
      content,
    },
  };
}

async function sendNotification(action: unknown) {
  // send something to an API
}

export default {
  createEmailNotification,
  createPushNotification,
  sendNotification,
};
