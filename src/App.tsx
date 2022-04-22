import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenModal={handleOpenModal}
      />
      <Dashboard />
      <NewTransactionsModal 
        isOpen={openModal}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}