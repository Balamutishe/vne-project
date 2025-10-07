"use client";

import { LoginForm } from "@/features/auth/components/loginForm";
import { RegisterForm } from "@/features/auth/components/registerForm";
import { useState } from "react";
import { clsx } from "clsx";

export const Auth = () => {
  const [varForm, setVarForm] = useState<"login" | "register">("login");

  return (
    <section className={"flex w-full justify-center"}>
      <div className={"flex w-1/2 flex-col gap-5"}>
        <div className={"flex h-full items-start justify-between [&>*]:w-1/2"}>
          <button
            className={clsx("cursor-pointer bg-black/10 p-1", {
              "bg-hover text-background": varForm === "login",
            })}
            onClick={() => setVarForm("login")}
          >
            Вход
          </button>
          <button
            className={clsx("cursor-pointer bg-black/10 p-1", {
              "bg-hover text-background": varForm === "register",
            })}
            onClick={() => setVarForm("register")}
          >
            Регистрация
          </button>
        </div>
        {varForm === "login" && <LoginForm />}
        {varForm === "register" && <RegisterForm />}
      </div>
    </section>
  );
};
