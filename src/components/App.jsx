import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
// import css from './App.module.css';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const namesArr = contacts.map(el => el.name.toLocaleLowerCase());

    console.log('submit', name, number, namesArr);
    if (!namesArr.includes(name.toLocaleLowerCase())) {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: '',
      });
    } else {
      alert(`${name} is already in contact.`);
    }
  };

  handleDeleteUser = userId => {
    const { contacts } = this.state;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  handleChangeSearch = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  applyFilters = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => {
      // Якщо ми написали запит на пошук, але в юзера не співпадає ім'я з запитом, то він не підходить і повертаємо false
      if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      // В інших випадках true
      return true;
    });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <Form
            onInpChange={this.handleChange}
            onFormSubmit={this.handleSubmit}
            name={name}
            number={number}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChangeSearch={this.handleChangeSearch} />
          <ContactsList
            contacts={this.applyFilters()}
            onDeleteUser={this.handleDeleteUser}
          />
        </Section>
      </div>
    );
  }
}
