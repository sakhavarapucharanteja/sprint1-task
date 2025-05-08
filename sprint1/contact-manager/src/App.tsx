import React from "react";
import AddContact from "./components/AddContact";
import ContactList from "./features/contacts/ContactList";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default App;
