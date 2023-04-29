import { Routes, Route } from 'react-router-dom';

import { PhonebookStyled } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { ModalSignUp } from './Modal/Modal';
import SharedLayout from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/mainpage';
// import { useEffect } from 'react';

export const App = () => {
  return (
    <PhonebookStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="login" element={<ModalSignUp />} />
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </PhonebookStyled>
  );
};
