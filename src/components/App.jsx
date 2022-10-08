import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
// import css from './App.module.css';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form onInpChange={this.handleChange} />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={this.contacts} />
        </Section>
      </div>
    );
  }
}
