import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface ITransactionData {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<ITransactionData, 'id' | 'createdAt'>;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransactionData[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {
  const [ transactions, setTransactions ] = useState<ITransactionData[]>([]);

  const getDataTransactions = async (): Promise<void> => {
    const response = await api.get('/transactions');

    if (response.data) {
      setTransactions(response.data.transactions)
    }
  };

  useEffect(() => {
    getDataTransactions();
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {  
    const responseTransaction = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    
    const { transaction } = responseTransaction.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const UseTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
}