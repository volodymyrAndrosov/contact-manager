import React, { useState, useContext } from "react";
import Contact from "../Contact/Contact";
import { ContactContext } from "../../Context/Provider";

const ContactsList = () => {
  const [state] = useContext(ContactContext);

  return (
    <React.Fragment>
      <h1 className='display-4 mb-2'>
        <span className='text-danger'>Contact</span> List
      </h1>
      {state.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </React.Fragment>
  );
};

export default ContactsList;
