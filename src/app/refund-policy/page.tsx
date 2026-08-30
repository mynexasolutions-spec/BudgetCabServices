import { redirect } from "next/navigation";

export default function RefundPolicyRedirect() {
  redirect("/terms-and-conditions#refund");
}
