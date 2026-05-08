export type Notification = {
  id: number;
  type: "like" | "reply" | "follow";
  text: string;
  read: boolean;
  targetId: string;
};
