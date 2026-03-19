import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DTB DATABYTES SOFTWARE SERVICES and Manageable website enquiries, demo bookings, and communications."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <div className="policy-shell">
        <PrivacyPolicyContent showBackLink />
      </div>
    </main>
  );
}
