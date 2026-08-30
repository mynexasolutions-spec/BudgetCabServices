import { redirect } from "next/navigation";

export default function CancellationPolicyRedirect() {
  redirect("/terms-and-conditions#cancellation");
}
