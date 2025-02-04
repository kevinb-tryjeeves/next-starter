export type FundingSource = {
  accountName: string;
  accountNumber: string;
};

export type Invoice = {
  id: string;
  invoiceNumber: string;
  clientName: string;
  fundingSource: FundingSource;
  amount: number;
  currency: "USD" | "MXN"; // Using literal types for currencies
  status: "pending" | "paid"; // Using literal types for status
  dueDate: string;
  createdAt: string;
};
