import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

export const SupportNav = () => {
  const { content } = useParams<{
    content: "delivery" | "recovery" | "documents" | "contacts";
  }>();

  const baseUrl = "/support";

  const navList = [
    { url: `${baseUrl}/delivery`, name: "ДОСТАВКА" },
    { url: `${baseUrl}/recovery`, name: "ВОЗВРАТ" },
    { url: `${baseUrl}/documents`, name: "ДОКУМЕНТЫ" },
    { url: `${baseUrl}/contacts`, name: "КОНТАКТЫ" },
  ];

  return (
    <nav>
      <ul className={"flex flex-col gap-8"}>
        {navList.map((link) => (
          <li
            key={link.name}
            className={clsx("hover:text-hover", {
              "text-hover hover:text-active":
                link.url === `${baseUrl}/${content}`,
            })}
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
