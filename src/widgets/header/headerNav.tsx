import { useAppDispatch } from "@/store/hooks";
import { toggleCategoriesType } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";

export const HeaderNav = () => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className={"flex w-2/5 items-center gap-8"}>
        <li
          key={crypto.randomUUID()}
          onClick={() => {
            dispatch(toggleDropdownMenuVisible(true));
            dispatch(toggleCategoriesType("women"));
          }}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          ЖЕНЩИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => {
            dispatch(toggleDropdownMenuVisible(true));
            dispatch(toggleCategoriesType("men"));
          }}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          МУЖЧИНАМ
        </li>
        <li
          key={crypto.randomUUID()}
          onClick={() => {
            dispatch(toggleDropdownMenuVisible(true));
            dispatch(toggleCategoriesType("accessories"));
          }}
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          АКСЕССУАРЫ
        </li>
      </ul>
    </nav>
  );
};
