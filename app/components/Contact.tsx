"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: wire up your form handler
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="rounded-[10px] overflow-hidden border border-[var(--border)] bg-[var(--background)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--background-panel)]">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
          Contact
        </span>
      </div>

      {/* Form rows */}
      <div>
        {/* Email */}
        <div className="grid grid-cols-[72px_1fr] border-b border-[var(--border)]">
          <label className="flex items-center px-3 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)] bg-[var(--background-panel)]">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-3 py-2.5 text-xs text-[var(--foreground)] bg-transparent placeholder:text-[var(--muted-foreground)] outline-none focus:bg-[var(--background-muted)] transition-colors"
          />
        </div>

        {/* Subject */}
        <div className="grid grid-cols-[72px_1fr] border-b border-[var(--border)]">
          <label className="flex items-center px-3 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)] bg-[var(--background-panel)]">
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
          <label className="flex items-start px-3 pt-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)] bg-[var(--background-panel)]">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="px-3 py-2.5 text-xs text-[var(--foreground)] bg-transparent placeholder:text-[var(--muted-foreground)] outline-none focus:bg-[var(--background-muted)] transition-colors resize-none"
          />
        </div>

        {/* Submit row */}
        <div className="flex justify-end px-4 py-3 bg-[var(--background-panel)]">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 text-xs font-semibold text-[var(--background)] bg-[var(--foreground)] hover:opacity-80 transition-opacity duration-150 rounded-md px-4 py-2 focus-visible:ring-2 focus-visible:ring-[var(--border-strong)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Send size={12} strokeWidth={2} />
            {sent ? "Sent!" : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
}