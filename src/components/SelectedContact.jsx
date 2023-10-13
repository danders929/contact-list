import { useState, useEffect } from "react";
export default function SelectedContact({ selectedContactId }) {

  const [contacts, setContacts] = useState({});
  
  useEffect(() => {
    async function fetchContacts() {
      try {
        const dataAPI = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await dataAPI.json();
        setContacts(() => json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr className="contactHead">
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        <tr>
          <td>{contacts.name}</td>
          <td>{contacts.email}</td>
          <td>{contacts.phone}</td>
        </tr>
      </thead>
    </table>
  );
}