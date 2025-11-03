import {
  BurgerButton,
  NavList,
} from "@/widgets/header/components/headerNav/components";

export const HeaderNav = () => {
  return (
    <section>
      <div className={"lg:hidden"}>
        <BurgerButton />
      </div>
      <div className={"hidden lg:block"}>
        <NavList />
      </div>
    </section>
  );
};
