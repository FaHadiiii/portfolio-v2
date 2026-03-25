"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setForm({ email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } else {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="relative border-b border-[var(--border)]">
      <SectionHeader index={7} title="Contact" />

      {/* Form rows */}
      <div>
        {/* Email */}
        <div className="grid grid-cols-[72px_1fr] border-b border-[var(--border)]">
          <label className="flex items-center px-3 text-[9px] font-medium uppercase tracking-[0.08em] border-r border-[var(--border)]">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-3 py-2.5 text-xs text-[var(--foreground)] bg-transparent placeholder:  outline-none focus:bg-[var(--background-muted)] transition-colors"
          />
        </div>

        {/* Subject */}
        <div className="grid grid-cols-[72px_1fr] border-b border-[var(--border)]">
          <label className="flex items-center px-3 text-[9px] font-medium uppercase tracking-[0.08em] border-r border-[var(--border)]">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="px-3 py-2.5 text-xs text-[var(--foreground)] bg-transparent placeholder:text-[var(--muted-foreground)] outline-none focus:bg-[var(--background-muted)] transition-colors"
          />
        </div>

        {/* Message */}
        <div className="grid grid-cols-[72px_1fr] border-b border-[var(--border)]">
          <label className="flex items-start px-3 pt-2.5 text-[9px] font-medium uppercase tracking-[0.08em] border-r border-[var(--border)]">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="px-3 py-2.5 text-xs text-[var(--foreground)] bg-transparent placeholder:  outline-none focus:bg-[var(--background-muted)] transition-colors resize-none"
          />
        </div>

        {/* Submit row */}
        <div className="flex flex-col items-end px-4 py-3 gap-1">
          <button
            onClick={handleSubmit}
            disabled={loading || sent}
            className="flex items-center gap-2 text-xs font-medium text-[var(--background)] bg-[var(--foreground)] hover:opacity-80 transition-opacity duration-150 rounded-md px-4 py-2 focus-visible:ring-2 focus-visible:ring-[var(--border-strong)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50"
          >
            <Send size={12} strokeWidth={2} />
            {sent ? "Sent!" : loading ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}
