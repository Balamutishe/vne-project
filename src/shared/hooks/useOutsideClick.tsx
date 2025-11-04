import { RefObject, useEffect } from "react";

export const useOutsideClick = ({
  ref,
  callback,
}: {
  ref: RefObject<HTMLElement | null>;
  callback: (value: boolean) => void;
}) => {
  return useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
};
