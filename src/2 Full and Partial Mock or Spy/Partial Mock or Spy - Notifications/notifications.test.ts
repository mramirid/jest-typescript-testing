import { ActionType, Operations } from "./types";
import notifs from "./notifications";

jest.doMock("./notifications", () => ({
  ...jest.requireActual<typeof notifs>("./notifications"),
  sendNotification: jest.fn(async () => {}),
}));

describe("Partial module mocking with jest.requireActual", () => {
  test("Test notification", () => {
    expect(
      notifs.createEmailNotification(
        "test@test.com",
        "New Email Notification",
        "Hello World"
      )
    ).toEqual<ActionType>({
      type: Operations.SEND_EMAIL,
      payload: {
        to: "test@test.com",
        subject: "New Email Notification",
        content: "Hello World",
      },
    });

    expect(
      notifs.createPushNotification(
        "test@test.com",
        "New Push Notification",
        "Hello World"
      )
    ).toEqual<ActionType>({
      type: Operations.SEND_PUSH_NOTIFICATION,
      payload: {
        to: "test@test.com",
        title: "New Push Notification",
        content: "Hello World",
      },
    });
  });
});
