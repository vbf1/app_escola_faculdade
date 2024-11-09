import { IUser } from "./user.interface";

export interface IMessage {
  id: string;
  content: string;
  user_id: string;
  recipient_user_id: number;
  userID: IUser;
}
