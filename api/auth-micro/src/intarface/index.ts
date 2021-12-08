export interface IAnswerService {
  email: string;
  name: string;
  lastName: string;
  roles: string;
  permission: boolean;
  _id: string;
  access_token: string;
}
export interface IMessage {
  message: string;
}

export type IAnswerPromise = IAnswerService | IMessage;
