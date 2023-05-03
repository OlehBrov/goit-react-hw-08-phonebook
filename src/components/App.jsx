import { Routes, Route } from 'react-router-dom';

import { PhonebookStyled } from './App.styled';

import { ModalSignUp } from './AuthPages/SignUp';
import SharedLayout from './SharedLayout/SharedLayout';
import { MainPage } from 'pages/mainpage';
import { LogIn } from './AuthPages/LogIn';
import { PrivateRoute } from 'Routes/Routes';
import { WelcomePage } from 'pages/welcomePage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { EditItem } from './EditingComponent/EditItem';

// import { useEffect } from 'react';

export const App = () => {
  const isToken = useSelector(state => state.auth.token);
   const { data, refetch } = useGetAllContactsQuery()

  useEffect(() => {
    if(isToken)
    refetch()
  }, [isToken, refetch])

  return (
    <PhonebookStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PrivateRoute> <MainPage /></PrivateRoute>} />
            <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<ModalSignUp />} />
           <Route path="/editContact" element={<EditItem />} />
        </Route>
      </Routes>
    </PhonebookStyled>
  );
};
