"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );
    window.location.href = `mailto:info@ironcladconsultinggroup.net?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 block w-full border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          What can we help with?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 block w-full resize-none border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass"
          placeholder="Tell us a bit about your business and what you need."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brass px-6 py-3 text-sm font-semibold text-on-brass transition-colors duration-160 hover:bg-brass-soft cursor-pointer sm:w-auto"
      >
        Send message
      </button>

      {sent && (
        <p role="status" className="text-sm text-muted-foreground">
          Opening your email client to send this along, if it didn&apos;t
          open, email us directly at{" "}
          <a
            href="mailto:info@ironcladconsultinggroup.net"
            className="font-medium text-ink underline underline-offset-2"
          >
            info@ironcladconsultinggroup.net
          </a>
          .
        </p>
      )}
    </form>
  );
}
