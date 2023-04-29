import { Routes, Route } from 'react-router-dom';

import { PhonebookStyled } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { ModalSignUp } from './Modal/Modal';
import SharedLayout from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/mainpage';
import { useSelector } from 'react-redux';

// import { useEffect } from 'react';

export const App = () => {

 const isModalActive = useSelector(state => state.modal)
  
  return (
    <PhonebookStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        {isModalActive &&   <Route index element={<ModalSignUp />} />}
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </PhonebookStyled>
  );
};
