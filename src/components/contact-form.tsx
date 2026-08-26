"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCircleExclamation } from "react-icons/fa6";

import type { ContactDictionary } from "@/i18n/types";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
  copy: ContactDictionary["form"];
}

/**
 * Client-side EmailJS form - direct port of the legacy inline script
 * (old-code/assets/js/main.js) including its spam heuristics, plus a
 * hidden honeypot field and accessible status live-region feedback.
 */
export function ContactForm({ copy }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function isPotentialSpam(data: Record<string, string>): boolean {
    if (data.company_website && data.company_website.length > 0) return true;
    return (
      !EMAIL_RE.test(data.email) ||
      data.first_name.includes("http://") ||
      data.first_name.includes("https://") ||
      data.email.includes("http://") ||
      data.first_name.trim().length <= 2 ||
      data.message.trim().length < 10
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    ) as Record<string, string>;

    if (isPotentialSpam(formData)) {
      setStatus("error");
      setMessage(copy.spamDetected);
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formData,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "" },
      );
      setStatus("success");
      setMessage(copy.success);
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setMessage(copy.failure);
    }
  }

  const statusColor =
    status === "error"
      ? "text-red-600"
      : status === "success"
        ? "text-brand-700"
        : "text-ink-600";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5">
      {/* Honeypot - hidden from humans, irresistible to bots */}
      <input
        type="text"
        name="company_website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="first_name" label={copy.firstName.label} placeholder={copy.firstName.placeholder} required minLength={3} maxLength={80} />
        <Field name="last_name" label={copy.lastName.label} placeholder={copy.lastName.placeholder} required maxLength={80} />
        <Field type="email" name="email" label={copy.email.label} placeholder={copy.email.placeholder} required inputMode="email" />
        <Field type="tel" dir="ltr" name="phone_number" label={copy.phone.label} placeholder={copy.phone.placeholder} inputMode="tel" />
      </div>

      <Field name="address" label={copy.address.label} placeholder={copy.address.placeholder} maxLength={160} />

      <label className="grid gap-2">
        <span className="font-semibold text-ink-700">{copy.message.label}</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          className="rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-brand-500 px-8 py-3 font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "..." : copy.submit}
        </button>
        <p role="status" aria-live="polite" className={`min-h-6 font-medium ${statusColor}`}>
          {status !== "idle" && message ? (
            <>
              <FaCircleExclamation aria-hidden className="me-1 inline-block h-4 w-4 align-text-bottom" />
              {message}
            </>
          ) : null}
        </p>
      </div>
    </form>
  );
}

function Field(props: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  dir?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  inputMode?: "text" | "tel" | "email";
}) {
  const { label, ...rest } = props;
  return (
    <label className="grid gap-2">
      <span className="font-semibold text-ink-700">{label}</span>
      <input
        {...rest}
        placeholder={props.placeholder}
        className="rounded-xl border border-ink-200 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 rtl:text-end ltr:text-start"
      />
    </label>
  );
}