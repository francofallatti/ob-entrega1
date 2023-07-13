import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

const ComponentB = ({ contact }) => {
  const [state, setState] = useState(contact.connected);
  const changeConnect = () => {
    setState(!state);
  };
  return (
    <div>
      <h5>Nombre: {contact.name}</h5>
      <h5>Apellido: {contact.lastName}</h5>
      <p>Email: {contact.email}</p>
      <p>{state ? "Contacto En Línea" : "Contacto No Disponible"}</p>

      <button onClick={changeConnect}>Cambiar estado</button>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
