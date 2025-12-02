import FooterDesktop from "@/widgets/Footer/components/FooterDesktop";
import FooterMobile from "@/widgets/Footer/components/FooterMobile";

export const Footer = () => {
  return (
    <footer className={"sm:max-h-77"}>
      <div className={"hidden sm:block"}>
        <FooterDesktop />
      </div>
      <div className={"sm:hidden"}>
        <FooterMobile />
      </div>
    </footer>
  );
};
