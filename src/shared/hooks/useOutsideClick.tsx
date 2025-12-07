import { RefObject, useEffect } from "react";

export const useOutsideClick = ({
  ref,
  callback,
  callbackValue,
}: {
  ref: RefObject<HTMLElement | null>;
  callback: (value: boolean) => void;
  callbackValue: boolean;
}) => {
  return useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(callbackValue);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
};
