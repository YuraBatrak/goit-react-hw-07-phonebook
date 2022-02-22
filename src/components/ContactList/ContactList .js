import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "../Section/Section ";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import { getFilteredContacts } from "../../redux/filter";
import s from "./ContactList.module.css";
import { getAllContacts } from "../../redux/fetch";

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllContacts()), [dispatch]);
  return (
    <Section text="Contacts">
      <ul className={s.list}>
        {contacts.length === 0 ? (
          <p className={s.message}>Contact list is empty</p>
        ) : (
          contacts.map(({ name, id, number }) => (
            <ContactListItem name={name} key={id} number={number} id={id} />
          ))
        )}
      </ul>
    </Section>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
