import { redirect } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";

export default function PrivacyPolicyRedirectPage() {
  redirect(`/${defaultLocale}/privacy-policy`);
}
