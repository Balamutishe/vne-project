import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";
import { setSearchFieldValue } from "../headerSearchFieldSlice";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  TCategoriesNames,
  TCollectionsNames,
} from "@/lib/mongoRepository/actions";

export const useSearchByName = () => {
  const searchParams = useSearchParams();
  const { collection, category } = useParams<{
    collection: TCollectionsNames;
    category: TCategoriesNames;
  }>();
  const { push } = useRouter();

  return {
    searchValue: searchParams.get("productName") || "",
    handleSearchValueSet: useDebouncedCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFieldValue(e.target.value);

        const newSearchParams = new URLSearchParams();
        searchParams
          .entries()
          .forEach(([key, value]) => newSearchParams.set(key, value));

        if (e.target.value) {
          newSearchParams.set("productName", e.target.value);

          if (!collection || !category) {
            push(`/?${newSearchParams.toString()}`);
          } else if (collection && category) {
            push(
              `/collections/${collection}/${category}?${newSearchParams.toString()}`,
            );
          }
        } else {
          newSearchParams.delete("productName");

          if (!collection || !category) {
            push(`/`);
          } else if (collection && category) {
            push(`/collections/${collection}/${category}`);
          }
        }
      },
      500,
    ),
  };
};
