export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Transaction {
  id: number;
  user_id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  title: string;
  transaction_date: string;
  created_at: string;
}
