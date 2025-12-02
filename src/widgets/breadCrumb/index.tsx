import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadCrumb = () => {
  // const data: TCategoriesResponseData = getDataAll();

  const pathname = usePathname();

  const result = pathname
    .split("/")
    .map((item) => {
      if (item === "Account") return { name: "Аккаунт", slug: "Account" };
      if (item === "brand") return { name: "Брэнд", slug: "brand" };
      if (item === "support") return { name: "Помощь", slug: "support" };
      if (item === "contacts") return { name: "Контакты", slug: "contacts" };
      if (item === "documents") return { name: "Документы", slug: "documents" };
      if (item === "recovery") return { name: "Возврат", slug: "recovery" };
      if (item === "delivery") return { name: "Доставка", slug: "delivery" };
      if (item === "categories")
        return { name: "Категории", slug: "categories" };
      if (item === "payments") return { name: "Оплата", slug: "payments" };

      // return Object.values(data)
      //   .map((category) => {
      //     return Object.values(category)
      //       .flat()
      //       .map((categoryItem) => {
      //         return {
      //           name: categoryItem.name,
      //           slug: categoryItem.slug,
      //         };
      //       });
      //   })
      //   .flat()
      //   .find((category) => category.slug === item);
    })
    .filter((item) => item !== undefined && item !== null);

  return (
    <div>
      {
        <ul
          className={
            "[&>*:hover]:text-hover text-tertiary flex items-center gap-1 text-[0.5rem] sm:text-sm [&>*]:cursor-pointer"
          }
        >
          <li>
            <Link href={"/public"}>Главная</Link>
          </li>
          {result.map((item) => (
            <li key={item.slug}> / {item.name}</li>
          ))}
        </ul>
      }
    </div>
  );
};
