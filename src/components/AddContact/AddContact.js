import React, { useState, useContext } from "react";
import { ContactContext } from "../../Context/Provider";
import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";

const AddContact = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setError] = useState({});

  const { name, email, phone } = state;

  const [globalState, dispatch] = useContext(ContactContext);

  const handleOnChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitInfo = e => {
    e.preventDefault();

    const contact = {
      id: uuidv4(),
      ...state,
    };

    if (name == "") {
      setError({ name: "name is too bad" });
      return;
    }
    if (email == "") {
      setError({ email: "email is too bad" });
      return;
    }
    if (phone == "") {
      setError({ phone: "phone is too bad" });
      return;
    }

    dispatch({
      type: "ADD_CONTACT",
      payload: contact,
    });

    setState({
      name: "",
      email: "",
      phone: "",
    });
    setError({});

    props.history.push("/");
  };

  return (
    <div className='card mb-3'>
      <div className='card-header'>Add Contact</div>
      <div className='card-body'>
        <form onSubmit={submitInfo}>
          <TextInputGroup
            label='Name'
            name='name'
            placeholder='Enter name...'
            value={name}
            onChange={handleOnChange}
            error={errors.name}
          />
          <TextInputGroup
            label='Email'
            name='email'
            placeholder='Enter email...'
            value={email}
            onChange={handleOnChange}
            error={errors.email}
          />
          <TextInputGroup
            label='Phone'
            name='phone'
            placeholder='Enter phone...'
            value={phone}
            onChange={handleOnChange}
            error={errors.phone}
          />
          <input
            type='submit'
            value='Add Contact'
            className='btn btn-light btn-block'
          />
        </form>
      </div>
    </div>
  );
};

const TextInputGroup = props => {
  const { label, name, value, placeholder, onChange, error } = props;

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};
export default AddContact;
