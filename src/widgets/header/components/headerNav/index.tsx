import { TGender } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import { DropdownMenuClose } from "@/widgets/header/components/dropdownMenu/components";
import { toggleDropdownMenuVisible } from "@/widgets/header/components/dropdownMenu/dropdownMenuSlice";
import BurgerSvg from "@/widgets/header/icons/burger.svg";

export const HeaderNav = () => {
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );
  const dispatch = useAppDispatch();

  const navList: { name: string; value: TGender }[] = [
    { name: "ЖЕНЩИНАМ", value: "women" },
    { name: "МУЖЧИНАМ", value: "men" },
    { name: "АКСЕССУАРЫ", value: "unisex" },
  ];

  return (
    <>
      <div className={"lg:hidden"}>
        {!isDropdownMenuVisible ? (
          <button
            className={"flex w-full cursor-pointer items-center justify-start"}
            onClick={() => {
              dispatch(toggleDropdownMenuVisible(true));
            }}
          >
            <BurgerSvg width={32} height={32} />
          </button>
        ) : (
          <DropdownMenuClose />
        )}
      </div>
      <nav className={"hidden lg:block"}>
        <ul className={"flex items-center lg:gap-6 xl:gap-8"}>
          {navList.map((item) => (
            <li
              key={crypto.randomUUID()}
              onClick={() => {
                dispatch(toggleDropdownMenuVisible(true));
                dispatch(toggleCollectionHeader(item.value));
              }}
              className={
                "hover:text-hover active:text-active cursor-pointer transition-colors"
              }
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
