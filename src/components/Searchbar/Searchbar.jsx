import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Header, SearchForm, SearchBtn, SearchInput } from './Searchbar.styled';

let schema = yup.object().shape({
  theme: yup.string().required('Search field is required'),
});

const initialValues = { theme: '' };

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ isValid, values }) => (
  <SearchForm>
    <SearchBtn type="submit" disabled={!isValid || !values.theme.trim()}>
      <span>&#128269;</span>
    </SearchBtn>
    <SearchInput
      className="input"
      type="text"
      name="theme"
      autoComplete="off"
      placeholder="Search images and photos"
    />
  </SearchForm>
)}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
