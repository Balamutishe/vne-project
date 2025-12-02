import Link from "next/link";

const FooterSocials = () => {
  return (
    <div
      className={
        "[&>*]:border-tertiary flex justify-between xl:text-base [&>*]:w-1/4 [&>*]:border-b-1 [&>*]:py-4" +
        " xl:[&>*]:py-8"
      }
    >
      <div className={"container-padding border-r-1"}>
        Мы создаём простую и качественную базовую одежду вне времени и моды —
        комфортную, универсальную и отражающую индивидуальность.
      </div>
      <div className={"container-padding border-r-1 px-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/brand"}>О нас</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/documents"}>Документы</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/contacts"}>Контакты</Link>
          </li>
        </ul>
      </div>
      <div className={"container-padding border-r-1 px-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/delivery"}>Доставка</Link>
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            <Link href={"/support/recovery"}>Возврат</Link>
          </li>
        </ul>
      </div>
      <div className={"container-padding pl-4"}>
        <ul className={"flex flex-col lg:gap-3 xl:gap-6"}>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Вконтакте
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Инстаграм
          </li>
          <li
            className={
              "hover:text-hover active:text-active cursor-pointer transition-colors"
            }
          >
            Телеграм
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSocials;