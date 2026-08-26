"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const sending = status === "sending";

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
          disabled={sending}
          className="mt-2 block w-full border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass disabled:opacity-60"
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
          disabled={sending}
          className="mt-2 block w-full border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass disabled:opacity-60"
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
          disabled={sending}
          className="mt-2 block w-full resize-none border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-brass disabled:opacity-60"
          placeholder="Tell us a bit about your business and what you need."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-brass px-6 py-3 text-sm font-semibold text-on-brass transition-colors duration-160 hover:bg-brass-soft cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p role="status" className="text-sm text-muted-foreground">
          Thanks — your message is on its way. We&apos;ll get back to you
          soon.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-muted-foreground">
          {errorMessage} If it keeps happening, email us directly at{" "}
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
