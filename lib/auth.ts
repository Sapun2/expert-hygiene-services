import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin2024";
const SESSION_COOKIE = "ehs_admin_session";
const SESSION_VALUE = "authenticated";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export { SESSION_COOKIE, SESSION_VALUE };
