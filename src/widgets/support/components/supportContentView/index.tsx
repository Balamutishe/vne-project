import { useParams } from "next/navigation";
import {
  SupportContentContacts,
  SupportContentDelivery,
  SupportContentDocuments,
  SupportContentRecovery,
} from "@/widgets/support/components";

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
  }
};
