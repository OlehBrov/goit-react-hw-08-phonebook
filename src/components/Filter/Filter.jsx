import { Formik, Field } from 'formik';
import styled from 'styled-components';
import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/FilterSlices';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { TextField } from '@mui/material';

export function Filter() {
  const filterValue = useSelector(state => state.filter);
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  if (contacts && contacts.length > 0) {
    return (
      <Formik initialValues={filterValue}>
        <FilterStyled>
          <TextField
            id="standard-helperText"
            label="Search contact"
            name="search"
            placeholder="Please enter name"
            onChange={handleChange}
            value={filterValue}
            fullWidth
            // helperText="Name"
          />
        </FilterStyled>
      </Formik>
    );
  }
}

export const Input = styled(Field)`
  font-size: 25px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;
