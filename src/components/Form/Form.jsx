import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ onInpChange }) => {
  return (
    <form className={css.form}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          {' '}
          <label htmlFor="inputName">Name</label>
          <input
            id="inputName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInpChange}
          />
        </div>
        <div>
          <label htmlFor="inputTel">Number</label>
          <input
            id="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInpChange}
          />
        </div>

        <button type="submit">Add contact</button>
      </div>
    </form>
  );
};

Form.propTypes = {};

export default Form;
