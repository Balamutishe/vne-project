export const SupportContentContacts = () => {
  const contacts = [
    {
      name: "ТЕЛЕФОН",
      value: "+7 999 966-98-55",
    },
    {
      name: "EMAIL",
      value: "info@vnewear.ru",
    },
    {
      name: "WHATSAPP",
      value: "+7 999 966-98-55",
    },
    {
      name: "TELEGRAM",
      value: "@acianera",
    },
  ];

  return (
    <div className={"w-1/3"}>
      <h4 className={"mb-3"}>Свяжитесь с нами</h4>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.name}
            className={"mb-3 flex items-center justify-start [&>*]:w-1/2"}
          >
            <span>{contact.name}:</span>
            <span>{contact.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
