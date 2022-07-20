export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
  alias?: string;
}

export interface Movements {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
  accountId: string;
}

