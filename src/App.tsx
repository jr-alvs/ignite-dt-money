import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('root');

export const App = () => {
  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Header
        onOpenModal={handleOpenModal}
      />
      <Dashboard />
      <NewTransactionsModal 
        isOpen={openModal}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}