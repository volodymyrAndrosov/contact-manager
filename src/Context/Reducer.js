export const reducer = (state, action) => {
  switch (action.type) {
    case "DEL_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      throw new Error();
  }
};
