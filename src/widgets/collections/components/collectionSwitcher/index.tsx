import { TGender } from "@/shared/types/categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleCategoryMain,
  toggleCollectionMain,
} from "@/widgets/collections/collectionsSlice";
import { clsx } from "clsx";

export const CollectionSwitcher = () => {
  const { collectionMainType } = useAppSelector(
    (state) => state.collectionsState,
  );
  const dispatch = useAppDispatch();

  const buttonsList: {
    name: string;
    value: TGender;
  }[] = [
    {
      name: "ЖЕНСКОЕ",
      value: "women",
    },
    {
      name: "МУЖСКОЕ",
      value: "men",
    },
  ];

  return (
    <div className={"flex-center-between gap-5"}>
      {buttonsList.map((button) => (
        <button
          key={crypto.randomUUID()}
          className={clsx(
            "border-tertiary cursor-pointer border-b-1 px-9.5 py-1 transition-colors lg:py-1.5",
            {
              "border-b-hover text-hover": collectionMainType === button.value,
            },
          )}
          onClick={() => {
            dispatch(toggleCollectionMain(button.value));
            dispatch(toggleCategoryMain("trousers"));
          }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};
