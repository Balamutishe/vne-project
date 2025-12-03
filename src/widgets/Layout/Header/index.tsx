import DropdownVisibilityChange from "@/features/Dropdown/DropdownVisibilityChange";
import { CollectionListView } from "@/widgets/Collections/components";
import { Dropdown } from "@/widgets/Dropdown";
import {
  HeaderLogo,
  HeaderToolbar,
  NavList,
} from "@/widgets/Layout/Header/components";

const Header = () => {
  return (
    <header className={`sm:p-0`}>
      <section
        className={`container-padding flex-center-between h-12 lg:h-16 [&>*]:w-1/3`}
      >
        <section>
          <div className={"lg:hidden"}>
            <DropdownVisibilityChange />
          </div>
          <div className={"hidden lg:block"}>
            <NavList />
          </div>
        </section>
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <Dropdown
        ComponentList={<CollectionListView variant={"header"} />}
        ComponentNav={<NavList />}
      />
    </header>
  );
};

export default Header;
