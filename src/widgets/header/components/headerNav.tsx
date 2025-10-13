import { useAppDispatch } from "@/store/hooks";
import { toggleCategoriesType } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";

export const HeaderNav = () => {
  const dispatch = useAppDispatch();

  const navList: { name: string; value: "women" | "men" | "accessories" }[] = [
    { name: "ЖЕНЩИНАМ", value: "women" },
    { name: "МУЖЧИНАМ", value: "men" },
    { name: "АКСЕССУАРЫ", value: "accessories" },
  ];

  return (
    <nav>
      <ul className={"flex items-center lg:gap-6 xl:gap-8"}>
        {navList.map((item) => (
          <li
            key={crypto.randomUUID()}
            onClick={() => {
              dispatch(toggleDropdownMenuVisible(true));
              dispatch(toggleCategoriesType(item.value));
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
  );
};
