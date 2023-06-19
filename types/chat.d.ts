export interface Message {
  username: string;
  sid: string;
  message: string;
  users?: string[];
  receiveTime?: string;
}
