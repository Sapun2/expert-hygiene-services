import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getSubmissions, getMailSettings } from "@/lib/db";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const submissions = getSubmissions();
  const mailSettings = getMailSettings();
  return <AdminDashboard initialSubmissions={submissions} mailSettings={mailSettings} />;
}
