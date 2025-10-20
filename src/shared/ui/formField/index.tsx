import { InputHTMLAttributes, ReactNode } from "react";

interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  labelText?: string;
  children?: ReactNode;
  containerStyle?: string;
}

export function FormField({
  children,
  labelText,
  id,
  containerStyle,
  ...rest
}: IFormField) {
  return (
    <div className={`group flex flex-col gap-2 text-sm ${containerStyle}`}>
      {labelText && (
        <label htmlFor={id} className={"group-hover:text-hover cursor-pointer"}>
          {labelText}
        </label>
      )}
      <div className={"flex flex-1"}>
        {children}
        <input
          {...rest}
          id={id}
          autoComplete={"off"}
          className={
            "border-tertiary group-hover:border-hover w-full cursor-pointer px-2 py-3" +
            " border-1 transition-colors outline-none"
          }
        />
      </div>
    </div>
  );
}
