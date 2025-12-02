import { toggleVariantPaymentForm } from "@/features/payment/paymentSlice";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ArrowDownSvg from "@/widgets/Products/ProductDetails/icons/arrow-down.svg";
import { clsx } from "clsx";
import { FC, useRef, useState } from "react";

type OptionType = {
  value: "pickup" | "pickupPoint" | "courier" | "default";
  label: string;
  disabled?: boolean;
};

interface CustomSelectProps {
  options: OptionType[];
  initialValue?: OptionType;
  id?: string;
  mainLabelText?: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  id,
  mainLabelText,
}) => {
  const dispatch = useAppDispatch();
  const { variantPaymentForm } = useAppSelector((state) => state.paymentState);

  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick({ ref, callback: setShowOptions });

  const handleOptionClick = (value: OptionType) => {
    dispatch(toggleVariantPaymentForm(value));
    setShowOptions(false);
  };

  return (
    <div className={"group relative flex flex-col gap-2 text-sm"} ref={ref}>
      {mainLabelText && (
        <label
          htmlFor={id}
          className={"group-hover:text-hover cursor-pointer"}
          onClick={() => setShowOptions(!showOptions)}
        >
          {mainLabelText}
        </label>
      )}
      <input
        defaultValue={variantPaymentForm.value}
        name={"deliveryMethod"}
        className={"hidden"}
        id={id}
      />
      <div
        className={clsx(
          "group group-hover:border-hover border-tertiary flex w-full cursor-pointer justify-between px-2 py-3" +
            " border-1",
          {
            "text-tertiary": variantPaymentForm.value === "default",
          },
        )}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{variantPaymentForm.label}</span>
        <span className={"flex items-center"}>
          <ArrowDownSvg
            width={13}
            height={8}
            className={clsx(
              "group-hover:[&>path]:stroke-hover rotate-0 transition-transform",
              {
                "rotate-180": showOptions,
              },
            )}
          />
        </span>
      </div>
      {showOptions && (
        <div className={"outline-active absolute top-18 w-full outline-1"}>
          {options.map((opt) => (
            <div
              key={opt.value.toString()}
              className={
                "bg-hover hover:bg-active z-50 cursor-pointer px-2 py-4 text-white"
              }
              onClick={() => handleOptionClick(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
