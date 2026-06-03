import { join } from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

export interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  notes?: string;
  status: "new" | "read" | "replied" | "booked";
  createdAt: string;
  updatedAt: string;
  ipAddress?: string;
}

export interface MailSettings {
  provider: "resend" | "smtp";
  apiKey: string;
  fromEmail: string;
  fromName: string;
  notifyEmail: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPass?: string;
  enabled: boolean;
}

export interface DBData {
  submissions: Submission[];
  mailSettings: MailSettings;
}

const DATA_DIR = join(process.cwd(), "data");
const DB_FILE = join(DATA_DIR, "db.json");

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function defaultData(): DBData {
  return {
    submissions: [],
    mailSettings: {
      provider: "resend",
      apiKey: process.env.RESEND_API_KEY || "",
      fromEmail: "noreply@experthygiene.com.au",
      fromName: "Expert Hygiene Services",
      notifyEmail: "accounts@experthygieneservices.com",
      enabled: true,
    },
  };
}

export function readDB(): DBData {
  ensureDataDir();
  if (!existsSync(DB_FILE)) {
    const data = defaultData();
    writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return data;
  }
  try {
    return JSON.parse(readFileSync(DB_FILE, "utf8")) as DBData;
  } catch {
    return defaultData();
  }
}

export function writeDB(data: DBData): void {
  ensureDataDir();
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

export function addSubmission(sub: Omit<Submission, "id" | "createdAt" | "updatedAt" | "status">): Submission {
  const db = readDB();
  const newSub: Submission = {
    ...sub,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.submissions.unshift(newSub);
  writeDB(db);
  return newSub;
}

export function getSubmissions(): Submission[] {
  return readDB().submissions;
}

export function getSubmission(id: string): Submission | undefined {
  return readDB().submissions.find((s) => s.id === id);
}

export function updateSubmission(id: string, patch: Partial<Submission>): Submission | null {
  const db = readDB();
  const idx = db.submissions.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  db.submissions[idx] = { ...db.submissions[idx], ...patch, updatedAt: new Date().toISOString() };
  writeDB(db);
  return db.submissions[idx];
}

export function deleteSubmission(id: string): boolean {
  const db = readDB();
  const before = db.submissions.length;
  db.submissions = db.submissions.filter((s) => s.id !== id);
  if (db.submissions.length === before) return false;
  writeDB(db);
  return true;
}

export function getMailSettings(): MailSettings {
  return readDB().mailSettings;
}

export function updateMailSettings(settings: Partial<MailSettings>): MailSettings {
  const db = readDB();
  db.mailSettings = { ...db.mailSettings, ...settings };
  writeDB(db);
  return db.mailSettings;
}
