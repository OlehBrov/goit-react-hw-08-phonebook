import { Formik, Field } from 'formik';
import styled from 'styled-components';
import { FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/FilterSlices';
import { useGetAllContactsQuery } from 'redux/contactsAPI';

export function Filter() {
  const filterValue = useSelector(state => state.filter);
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  if (contacts&& contacts.length > 0) {
    return (
      <Formik initialValues={filterValue}>
        <FilterStyled>
          <label htmlFor="searchfilter"></label>
          <Input
            id="searchfilter"
            filter="filter"
            placeholder="Search contact"
            value={filterValue}
            onChange={handleChange}
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
