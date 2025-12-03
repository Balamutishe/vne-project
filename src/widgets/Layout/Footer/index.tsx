import FooterDesktop from "./components/FooterDesktop";
import FooterMobile from "./components/FooterMobile";

const Footer = () => {
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

export default Footer;
