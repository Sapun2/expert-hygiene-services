"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Phone, Mail, MapPin, Trash2, CheckCircle2, RefreshCw, LogOut, Settings, Inbox, Star, Clock, BarChart3, ChevronRight, X, Save, Eye, EyeOff, Send, Loader2, MessageSquare } from "lucide-react";
import type { Submission, MailSettings } from "@/lib/db";

const STATUS_CONFIG = {
  new: { label: "New", color: "bg-red-100 text-red-700 border-red-200" },
  read: { label: "Read", color: "bg-blue-100 text-blue-700 border-blue-200" },
  replied: { label: "Replied", color: "bg-purple-100 text-purple-700 border-purple-200" },
  booked: { label: "Booked ✓", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
};

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function AdminDashboard({ initialSubmissions, mailSettings: initialMailSettings }: {
  initialSubmissions: Submission[];
  mailSettings: MailSettings;
}) {
  const [subs, setSubs] = useState<Submission[]>(initialSubmissions);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [tab, setTab] = useState<"inbox" | "settings">("inbox");
  const [mailSettings, setMailSettings] = useState<MailSettings>(initialMailSettings);
  const [settingsSaved, setSettingsSaved] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const stats = {
    total: subs.length,
    new: subs.filter((s) => s.status === "new").length,
    booked: subs.filter((s) => s.status === "booked").length,
  };

  const refresh = async () => {
    setRefreshing(true);
    const res = await fetch("/api/admin/submissions");
    if (res.ok) setSubs(await res.json());
    setRefreshing(false);
  };

  const updateStatus = async (id: string, status: Submission["status"]) => {
    const res = await fetch(`/api/admin/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const updated: Submission = await res.json();
      setSubs((s) => s.map((x) => (x.id === id ? updated : x)));
      if (selected?.id === id) setSelected(updated);
    }
  };

  const deleteSub = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const res = await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" });
    if (res.ok) {
      setSubs((s) => s.filter((x) => x.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  };

  const saveSettings = async () => {
    setSavingSettings(true);
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailSettings),
    });
    if (res.ok) { setSettingsSaved(true); setTimeout(() => setSettingsSaved(false), 3000); }
    setSavingSettings(false);
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  const openSub = (sub: Submission) => {
    setSelected(sub);
    if (sub.status === "new") updateStatus(sub.id, "read");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Top bar */}
      <header className="bg-slate-900 border-b border-white/10 px-4 lg:px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <Image src="/images/logos/logo-horizontal.svg" alt="Expert Hygiene" width={130} height={34} className="h-8 w-auto brightness-0 invert" />
          <span className="hidden sm:block text-slate-500 text-xs border-l border-slate-700 pl-3">Admin Panel</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={refresh} disabled={refreshing} className="p-2 text-slate-400 hover:text-white transition-colors" title="Refresh">
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
          </button>
          <a href="/" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors" title="View Site">
            <Eye size={16} />
          </a>
          <button onClick={logout} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-16 lg:w-56 bg-slate-900 border-r border-white/10 flex flex-col flex-shrink-0">
          <nav className="flex-1 p-2 lg:p-3 space-y-1 mt-2">
            {[
              { id: "inbox" as const, label: "Inbox", icon: Inbox, badge: stats.new },
              { id: "settings" as const, label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm font-semibold ${
                  tab === item.id ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                <item.icon size={18} className="flex-shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
                {item.badge ? <span className="hidden lg:flex ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full items-center justify-center">{item.badge}</span> : null}
              </button>
            ))}
          </nav>

          {/* Stats */}
          <div className="hidden lg:block p-3 border-t border-white/10 space-y-2">
            {[
              { icon: BarChart3, label: "Total", value: stats.total, color: "text-slate-400" },
              { icon: MessageSquare, label: "New", value: stats.new, color: "text-red-400" },
              { icon: Star, label: "Booked", value: stats.booked, color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500"><s.icon size={13} />{s.label}</div>
                <span className={`font-bold ${s.color}`}>{s.value}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex overflow-hidden">
          {/* Inbox tab */}
          {tab === "inbox" && (
            <>
              {/* List */}
              <div className={`w-full lg:w-80 xl:w-96 border-r border-white/10 flex flex-col ${selected ? "hidden lg:flex" : "flex"}`}>
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <h2 className="font-bold text-white text-sm">Submissions <span className="text-slate-500 font-normal">({subs.length})</span></h2>
                  {stats.new > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{stats.new} new</span>}
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                  {subs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-48 text-slate-600">
                      <Inbox size={32} className="mb-3" />
                      <p className="text-sm">No submissions yet</p>
                    </div>
                  ) : (
                    subs.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => openSub(sub)}
                        className={`w-full text-left px-4 py-4 hover:bg-white/5 transition-colors ${selected?.id === sub.id ? "bg-white/8" : ""} ${sub.status === "new" ? "border-l-2 border-red-500" : "border-l-2 border-transparent"}`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className={`font-bold text-sm ${sub.status === "new" ? "text-white" : "text-slate-300"}`}>{sub.name}</span>
                          <span className="text-slate-500 text-xs flex-shrink-0 flex items-center gap-1"><Clock size={11} />{timeAgo(sub.createdAt)}</span>
                        </div>
                        <p className="text-teal-400 text-xs font-semibold mb-1">{sub.service}</p>
                        <p className="text-slate-500 text-xs truncate">{sub.phone} · {sub.address}</p>
                        <div className="mt-2">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${STATUS_CONFIG[sub.status].color}`}>
                            {STATUS_CONFIG[sub.status].label}
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Detail panel */}
              {selected ? (
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Detail header */}
                  <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setSelected(null)} className="lg:hidden p-1 text-slate-400 hover:text-white"><X size={18} /></button>
                      <div>
                        <h3 className="font-bold text-white">{selected.name}</h3>
                        <p className="text-teal-400 text-xs">{selected.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={selected.status}
                        onChange={(e) => updateStatus(selected.id, e.target.value as Submission["status"])}
                        className="text-xs bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                          <option key={k} value={k} className="bg-slate-800">{v.label}</option>
                        ))}
                      </select>
                      <button onClick={() => deleteSub(selected.id)} className="p-2 text-slate-500 hover:text-red-400 transition-colors" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Detail body */}
                  <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {/* Contact cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <a href={`tel:${selected.phone}`} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors group">
                        <Phone size={18} className="text-teal-400" />
                        <div>
                          <p className="text-xs text-slate-500">Phone</p>
                          <p className="text-white text-sm font-semibold group-hover:text-teal-400 transition-colors">{selected.phone}</p>
                        </div>
                      </a>
                      <a href={`mailto:${selected.email}`} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors group">
                        <Mail size={18} className="text-blue-400" />
                        <div>
                          <p className="text-xs text-slate-500">Email</p>
                          <p className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors truncate">{selected.email}</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                        <MapPin size={18} className="text-gold-400" />
                        <div>
                          <p className="text-xs text-slate-500">Address</p>
                          <p className="text-white text-sm font-semibold">{selected.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Service Requested</p>
                        <p className="text-white font-semibold">{selected.service}</p>
                      </div>
                      {selected.notes && (
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Notes</p>
                          <p className="text-slate-300 text-sm leading-relaxed">{selected.notes}</p>
                        </div>
                      )}
                      <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="text-slate-500">Submitted</p>
                          <p className="text-slate-300">{new Date(selected.createdAt).toLocaleString("en-AU")}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Last Updated</p>
                          <p className="text-slate-300">{new Date(selected.updatedAt).toLocaleString("en-AU")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Mark as Replied", status: "replied" as const, icon: Send, color: "border-purple-500/30 text-purple-400 hover:bg-purple-500/10" },
                        { label: "Mark as Booked", status: "booked" as const, icon: CheckCircle2, color: "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" },
                      ].map((action) => (
                        <button
                          key={action.status}
                          onClick={() => updateStatus(selected.id, action.status)}
                          className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${action.color}`}
                        >
                          <action.icon size={16} /> {action.label}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a href={`tel:${selected.phone}`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500 text-white text-sm font-bold hover:bg-teal-600 transition-colors">
                        <Phone size={16} /> Call Now
                      </a>
                      <a href={`mailto:${selected.email}?subject=Your ${selected.service} Quote — Expert Hygiene Services`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-navy/80 transition-colors">
                        <Mail size={16} /> Send Email
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 hidden lg:flex flex-col items-center justify-center text-slate-700">
                  <Inbox size={48} className="mb-4" />
                  <p className="font-semibold">Select a submission to view</p>
                </div>
              )}
            </>
          )}

          {/* Settings tab */}
          {tab === "settings" && (
            <div className="flex-1 overflow-y-auto p-5">
              <h2 className="font-display font-800 text-xl text-white mb-6">Mail Integration</h2>

              <div className="max-w-xl space-y-5">
                {/* Provider toggle */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-white mb-4 text-sm">Email Provider</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(["resend", "smtp"] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => setMailSettings((s) => ({ ...s, provider: p }))}
                        className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                          mailSettings.provider === p
                            ? "bg-teal-500/20 border-teal-500 text-teal-400"
                            : "border-white/10 text-slate-500 hover:border-white/20"
                        }`}
                      >
                        {p === "resend" ? "Resend (Recommended)" : "SMTP"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                  <h3 className="font-bold text-white mb-1 text-sm">Configuration</h3>

                  {[
                    { key: "notifyEmail", label: "Notify Email (receives leads)", placeholder: "accounts@experthygieneservices.com", type: "email" },
                    { key: "fromEmail", label: "From Email", placeholder: "noreply@experthygiene.com.au", type: "email" },
                    { key: "fromName", label: "From Name", placeholder: "Expert Hygiene Services", type: "text" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        value={mailSettings[f.key as keyof MailSettings] as string}
                        onChange={(e) => setMailSettings((s) => ({ ...s, [f.key]: e.target.value }))}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  ))}

                  {mailSettings.provider === "resend" && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Resend API Key</label>
                      <div className="relative">
                        <input
                          type={showKey ? "text" : "password"}
                          value={mailSettings.apiKey}
                          onChange={(e) => setMailSettings((s) => ({ ...s, apiKey: e.target.value }))}
                          placeholder="re_xxxxxxxxxxxxxxxx"
                          className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button type="button" onClick={() => setShowKey(!showKey)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                          {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">Get your key at <a href="https://resend.com" target="_blank" className="text-teal-500 hover:underline">resend.com</a></p>
                    </div>
                  )}

                  {mailSettings.provider === "smtp" && (
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "smtpHost", label: "SMTP Host", placeholder: "smtp.gmail.com" },
                        { key: "smtpPort", label: "SMTP Port", placeholder: "587" },
                        { key: "smtpUser", label: "SMTP User", placeholder: "you@gmail.com" },
                        { key: "smtpPass", label: "SMTP Password", placeholder: "••••••••" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">{f.label}</label>
                          <input
                            type={f.key === "smtpPass" ? "password" : "text"}
                            value={(mailSettings[f.key as keyof MailSettings] || "") as string}
                            onChange={(e) => setMailSettings((s) => ({ ...s, [f.key]: e.target.value }))}
                            placeholder={f.placeholder}
                            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Enable toggle */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div>
                      <p className="text-white font-semibold text-sm">Email Notifications</p>
                      <p className="text-slate-500 text-xs">Send emails on new submissions</p>
                    </div>
                    <button
                      onClick={() => setMailSettings((s) => ({ ...s, enabled: !s.enabled }))}
                      className={`w-12 h-6 rounded-full transition-colors flex items-center ${mailSettings.enabled ? "bg-teal-500 justify-end" : "bg-slate-700 justify-start"}`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full mx-0.5 shadow" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={saveSettings}
                  disabled={savingSettings}
                  className="w-full flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold py-3.5 rounded-xl text-sm hover:bg-gold-400 transition-colors disabled:opacity-60"
                >
                  {savingSettings ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : settingsSaved ? <><CheckCircle2 size={16} /> Saved!</> : <><Save size={16} /> Save Settings</>}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
