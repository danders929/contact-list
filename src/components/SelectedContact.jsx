import { useEffect } from "react";
import { useState } from "react";
export default function SelectedContact({ selectedContactId }) {
  console.log(selectedContactId);
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
console.log(contacts)
  return (
    <div>
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
      {/* <h1>In Selected Person</h1> */}
    </div>
  );
}