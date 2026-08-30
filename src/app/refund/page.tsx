import { redirect } from "next/navigation";

export default function RefundRedirect() {
  redirect("/terms-and-conditions#refund");
}
