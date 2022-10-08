import css from './Contacts.module.css';
import React from 'react';

const Contacts = () => {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
    </li>
  );
};

export default Contacts;
