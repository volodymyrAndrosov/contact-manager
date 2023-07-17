import React, { useState, useContext } from "react";
import { ContactContext } from "../../Context/Provider";

const Contact = props => {
  const { name, email, phone, id } = props.contact;

  const [isEnableInfo, setIsEnableInfo] = useState(false);
  const [state, dispatch] = useContext(ContactContext);

  const toggleInfo = () => {
    setIsEnableInfo(!isEnableInfo);
  };

  const deleteContact = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id,
    });
  };

  return (
    <div className='card card-body mb-3'>
      <h4>
        Name: {name}
        <i
          onClick={toggleInfo}
          className='fas fa-sort-down'
          style={{ cursor: "pointer" }}
        />
        <i
          onClick={() => {
            deleteContact(id);
          }}
          className='fas fa-times'
          style={{ cursor: "pointer", float: "right", color: "red" }}
        />
      </h4>
      {isEnableInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
