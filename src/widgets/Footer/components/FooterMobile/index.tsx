import FooterMobileSupportNavList from "@/widgets/Footer/components/FooterMobile/components/FooterMobileSupportNavList";
import InstagramSvg from "@/widgets/Footer/icons/instagram.svg";
import TelegramSvg from "@/widgets/Footer/icons/telegram.svg";
import VkSvg from "@/widgets/Footer/icons/vk.svg";
import Image from "next/image";

const FooterMobile = () => {
  return (
    <section
      className={
        "flex-center-between border-tertiary container-padding flex-col gap-10 border-t-1 border-b-1 py-8"
      }
    >
      <section className={"flex-center-between flex-col gap-4"}>
        <div>
          <Image
            src={"/images/logo.svg"}
            alt={"Logo"}
            width={115}
            height={31}
          />
        </div>
        <p>
          Мы создаём простую и качественную базовую одежду вне времени и моды —
          комфортную, универсальную и отражающую индивидуальность.
        </p>
      </section>
      <FooterMobileSupportNavList />
      <section className={"flex-center-between flex-col gap-4"}>
        <h3>СОЦСЕТИ</h3>
        <ul className={"flex items-center justify-center gap-8"}>
          <li>
            <TelegramSvg />
          </li>
          <li>
            <VkSvg />
          </li>
          <li>
            <InstagramSvg />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default FooterMobile;
