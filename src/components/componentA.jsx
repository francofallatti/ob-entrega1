import React from "react";
import { Contact } from "../models/contact.class";
import ComponentB from "./componentB";

const ComponentA = () => {
  const defaultContact = new Contact(
    "franco",
    "fallatti",
    "example@gmail.com",
    false
  );
  return (
    <div>
      <ComponentB contact={defaultContact}></ComponentB>
    </div>
  );
};

export default ComponentA;
