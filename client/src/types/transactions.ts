export type Transactions = {
  _id: string;
  itemId: string;
  transactionType: "IN" | "OUT";
  quantity: number;
  remarks?: string | undefined;
  createdBy: string;
  createdAt: Date;
};
