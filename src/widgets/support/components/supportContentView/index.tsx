"use client";

import { useParams } from "next/navigation";
import {
  SupportContentContacts,
  SupportContentDelivery,
  SupportContentDocuments,
  SupportContentRecovery,
} from "./components";

export const SupportContentView = () => {
  const { content } = useParams<{
    content: "delivery" | "recovery" | "documents" | "contacts";
  }>();

  switch (content) {
    case "delivery":
      return <SupportContentDelivery />;
    case "recovery":
      return <SupportContentRecovery />;
    case "documents":
      return <SupportContentDocuments />;
    case "contacts":
      return <SupportContentContacts />;
    default:
      return (
        <div className={"hidden sm:block"}>МЫ ВСЕГДА РАДЫ ВАМ ПОМОЧЬ!!!</div>
      );
  }
};
