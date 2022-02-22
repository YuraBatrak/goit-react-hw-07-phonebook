import React, { useState } from "react";
import Section from "../Section/Section ";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import s from "./ContactForm.module.css";
import { addContacts } from "../../redux/fetch";
import { getContacts } from "../../redux/filter";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.map((contact) => contact.name).includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContacts({ name, number }));
    setName("");
    setNumber("");
  };
  return (
    <Section text="Phonebook">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            id={shortid.generate()}
            placeholder="Name"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor="number">
          <input
            onChange={handleChange}
            id={shortid.generate()}
            type="tel"
            placeholder="Number"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </Section>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
