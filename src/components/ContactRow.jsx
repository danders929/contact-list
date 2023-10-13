export default function ContactRow({ contact, row}) {
  return (
    <tr onClick={() => row(() => contact.id )}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>

  );
}