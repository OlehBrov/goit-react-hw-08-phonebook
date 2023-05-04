import { Routes, Route } from 'react-router-dom';

import { PhonebookStyled } from './App.styled';

import { ModalSignUp } from './AuthPages/SignUp';
import SharedLayout from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/mainpage';
import { LogIn } from './AuthPages/LogIn';
import { PrivateRoute } from 'Routes/Routes';
import { WelcomePage } from 'pages/welcomePage';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { EditItem } from './EditingComponent/EditItem';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { MainContainer } from './MainContainer/MainContainer';
import image from '../images/background/brussels-gf7e1e87eb_1920.jpg'

// import { useEffect } from 'react';

export const App = () => {
  const isToken = useSelector(state => state.auth.token);
  const { data } = useGetAllContactsQuery(isToken ?? skipToken);

  return (
    <MainContainer>
      <PhonebookStyled>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<ModalSignUp />} />
            <Route path="/editContact" element={<EditItem />} />
          </Route>
        </Routes>
      </PhonebookStyled>
    </MainContainer>
  );
};
