"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Loader2, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) { setError("Incorrect password. Try again."); return; }
      router.push("/admin");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/images/logos/logo-horizontal.svg" alt="Expert Hygiene" width={160} height={42} className="h-10 w-auto mx-auto mb-6 brightness-0 invert" />
          <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="text-gold-400" />
          </div>
          <h1 className="font-display font-800 text-2xl text-white mb-1">Admin Panel</h1>
          <p className="text-slate-500 text-sm">Expert Hygiene Services</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                autoFocus
              />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <button type="submit" disabled={loading || !password} className="w-full flex items-center justify-center gap-2 bg-gold-500 text-navy font-bold py-3.5 rounded-xl text-sm hover:bg-gold-400 transition-colors disabled:opacity-50">
            {loading ? <><Loader2 size={16} className="animate-spin" /> Signing in...</> : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-6">
          Default password: <code className="text-slate-400">admin2024</code> — set <code className="text-slate-400">ADMIN_PASSWORD</code> in .env to change
        </p>
      </div>
    </div>
  );
}
