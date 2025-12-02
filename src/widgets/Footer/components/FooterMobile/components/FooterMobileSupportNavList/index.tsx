import ListItem from "@/widgets/Footer/components/FooterMobile/components/FooterMobileSupportNavList/components/ListItem";

const FooterMobileSupportNavList = () => {
  const supportList = [
    {
      title: "КОМПАНИЯ",
      list: [
        {
          name: "О нас",
          href: "/brand",
        },
        {
          name: "Документы",
          href: "/support/documents",
        },
        {
          name: "Контакты",
          href: "/support/contacts",
        },
      ],
    },
    {
      title: "ПОМОЩЬ",
      list: [
        {
          name: "Доставка",
          href: "/support/delivery",
        },
        {
          name: "Возврат",
          href: "/support/recovery",
        },
      ],
    },
  ];

  return (
    <ul className={"flex w-full flex-col justify-between gap-4"}>
      {supportList.map((item) => (
        <li key={crypto.randomUUID()} className={"border-tertiary border-b-1"}>
          <ListItem title={item.title} list={item.list} />
        </li>
      ))}
    </ul>
  );
};

export default FooterMobileSupportNavList;
