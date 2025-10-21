import { Basket } from "@/features/basket";
import { toggleBasketOpen } from "@/features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import UserSvg from "../../icons/user.svg";
import BagSvg from "../../icons/bag.svg";
import { HeaderSearchField } from "@/features/header/headerSearchField";

export const HeaderToolbar = () => {
  const dispatch = useAppDispatch();

  const { totalQuantity, isBasketOpen } = useAppSelector(
    (state) => state.basketState,
  );
  const { isAuth } = useAppSelector((state) => state.authState);

  return (
    <div className={"flex min-w-[25%] items-center justify-end gap-7"}>
      <Link
        href={"/brand"}
        className={
          "hover:text-hover active:text-active hidden cursor-pointer transition-colors lg:block"
        }
      >
        О БРЕНДЕ
      </Link>
      <HeaderSearchField />
      <Link href={isAuth ? "/account" : "/auth"} className={"hidden sm:block"}>
        <UserSvg
          className={"hover:[&>path]:stroke-hover cursor-pointer"}
          width={24}
          height={24}
        />
      </Link>
      <div className={"relative"}>
        {totalQuantity > 0 && (
          <span
            className={
              "bg-hover text-background absolute -top-2 -right-3 flex h-3 w-3 items-center sm:-top-3 sm:-right-4" +
              " sm:h-5" +
              " sm:w-5" +
              " justify-center" +
              " rounded-full p-2 text-xs leading-0 sm:text-base"
            }
          >
            {totalQuantity}
          </span>
        )}
        <BagSvg
          className={"hover:[&>path]:fill-hover hidden cursor-pointer sm:block"}
          width={24}
          height={24}
          onClick={() => {
            dispatch(toggleBasketOpen(!isBasketOpen));
          }}
        />
        <Link href={"/basket"} className={"sm:hidden"}>
          <BagSvg
            className={"hover:[&>path]:fill-hover cursor-pointer"}
            width={24}
            height={24}
          />
        </Link>
      </div>
      {isBasketOpen && window.screen.width > 640 && (
        <div
          className={"bg-background absolute top-12 right-0 z-100 sm:top-16"}
        >
          <Basket />
        </div>
      )}
    </div>
  );
};
