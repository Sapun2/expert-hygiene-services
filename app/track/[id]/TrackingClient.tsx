"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, Phone, Mail, RefreshCw, Home, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

type Status = "new" | "read" | "replied" | "booked";

interface PublicSubmission {
  id: string;
  name: string;
  service: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

const STEPS: { key: Status; label: string; desc: string }[] = [
  { key: "new",     label: "Request Received",   desc: "We've received your booking request." },
  { key: "read",    label: "Under Review",        desc: "Your request is being reviewed by our team." },
  { key: "replied", label: "Quote Sent",          desc: "We've reached out with your personalised quote." },
  { key: "booked",  label: "Booking Confirmed ✓", desc: "Your service has been booked and confirmed." },
];

const STATUS_ORDER: Record<Status, number> = { new: 0, read: 1, replied: 2, booked: 3 };

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1)  return "just now";
  if (mins < 60) return `${mins} minute${mins > 1 ? "s" : ""} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)  return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
  return `${Math.floor(hrs / 24)} day${Math.floor(hrs / 24) > 1 ? "s" : ""} ago`;
}

export default function TrackingClient({ submission: initial }: { submission: PublicSubmission }) {
  const [sub, setSub] = useState(initial);
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string>("just now");

  const refresh = async () => {
    setRefreshing(true);
    try {
      const res = await fetch(`/api/track/${sub.id}`);
      if (res.ok) {
        const data = await res.json();
        setSub(data);
        setLastRefresh("just now");
      }
    } finally {
      setRefreshing(false);
    }
  };

  // Auto-refresh every 60s
  useEffect(() => {
    const interval = setInterval(() => {
      refresh();
      setLastRefresh(timeAgo(sub.updatedAt));
    }, 60000);
    return () => clearInterval(interval);
  }, [sub.id]);

  const currentStep = STATUS_ORDER[sub.status];
  const isComplete = sub.status === "booked";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-navy py-5 px-4 text-center">
        <Link href="/">
          <Image src="/images/logos/logo-horizontal.svg" alt="Expert Hygiene Services" width={160} height={42} className="h-10 w-auto mx-auto brightness-0 invert" />
        </Link>
      </header>

      <div className="max-w-xl mx-auto px-4 py-10">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">

          {/* Top banner */}
          <div className={`px-6 py-5 ${isComplete ? "bg-emerald-500" : "bg-navy"}`}>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Booking Tracker</p>
            <h1 className="font-display font-800 text-2xl text-white mb-0.5">Hi, {sub.name.split(" ")[0]}!</h1>
            <p className="text-white/70 text-sm">{sub.service}</p>
          </div>

          {/* Status timeline */}
          <div className="px-6 pt-6 pb-4">
            <div className="space-y-0">
              {STEPS.map((s, i) => {
                const done    = currentStep > i;
                const active  = currentStep === i;
                const pending = currentStep < i;
                return (
                  <div key={s.key} className="flex gap-4">
                    {/* Line + dot */}
                    <div className="flex flex-col items-center w-8 flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all duration-500 ${
                        done    ? "bg-teal-500 border-teal-500" :
                        active  ? "bg-navy border-navy" :
                                  "bg-white border-slate-200"
                      }`}>
                        {done
                          ? <CheckCircle2 size={16} className="text-white" />
                          : active
                          ? <div className="w-2.5 h-2.5 bg-gold-400 rounded-full animate-pulse" />
                          : <div className="w-2 h-2 bg-slate-300 rounded-full" />
                        }
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className={`w-0.5 flex-1 my-1 min-h-[24px] transition-all duration-500 ${done ? "bg-teal-500" : "bg-slate-100"}`} />
                      )}
                    </div>

                    {/* Label */}
                    <div className={`pb-5 ${i === STEPS.length - 1 ? "pb-2" : ""}`}>
                      <p className={`font-bold text-sm ${done ? "text-teal-600" : active ? "text-navy" : "text-slate-300"}`}>{s.label}</p>
                      {(done || active) && (
                        <p className={`text-xs mt-0.5 ${done ? "text-slate-400" : "text-slate-500"}`}>{s.desc}</p>
                      )}
                      {active && (
                        <div className="flex items-center gap-1.5 mt-2">
                          <Clock size={12} className="text-teal-500" />
                          <span className="text-xs text-teal-600 font-semibold">In progress</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Meta */}
          <div className="px-6 py-4 border-t border-slate-100 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Submitted {timeAgo(sub.createdAt)}</span>
              <button onClick={refresh} disabled={refreshing} className="flex items-center gap-1 text-teal-500 hover:text-teal-600 font-semibold">
                <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} /> Refresh
              </button>
            </div>
            <p className="text-xs text-slate-300">Ref: <span className="font-mono">{sub.id.slice(0, 8).toUpperCase()}</span></p>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 pt-2 space-y-3">
            <a href={SITE_CONFIG.phoneHref} className="flex items-center justify-center gap-2 bg-teal-500 text-white font-bold py-3.5 rounded-xl text-sm hover:bg-teal-600 transition-colors">
              <Phone size={16} /> Call Us: {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center justify-center gap-2 border border-slate-200 text-navy font-bold py-3.5 rounded-xl text-sm hover:bg-slate-50 transition-colors">
              <Mail size={16} /> {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-navy transition-colors">
            <Home size={14} /> Home
          </Link>
          <Link href="/contact" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-navy transition-colors">
            New Booking <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
