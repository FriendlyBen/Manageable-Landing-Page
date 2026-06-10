"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import type { Dictionary } from "@/lib/i18n";

type ContactFormCopy = Dictionary["contactSection"]["form"];

type ContactFormValues = {
  company: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  company: "",
  email: "",
  phone: "",
  message: ""
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({ copy, disclaimer }: { copy: ContactFormCopy; disclaimer: string }) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [website, setWebsite] = useState("");
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  function validateForm(nextValues: ContactFormValues) {
    const nextErrors: ContactFormErrors = {};

    if (!nextValues.company.trim()) {
      nextErrors.company = copy.requiredField;
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = copy.requiredField;
    } else if (!isValidEmail(nextValues.email.trim())) {
      nextErrors.email = copy.invalidEmail;
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = copy.requiredField;
    }

    return nextErrors;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }

    setValues((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => {
      if (!current[name as keyof ContactFormValues]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name as keyof ContactFormValues];
      return nextErrors;
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          website,
          startedAt: startedAtRef.current
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setValues(initialValues);
      setWebsite("");
      startedAtRef.current = Date.now();
      setStatus("success");
      successTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
        successTimeoutRef.current = null;
      }, 5000);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="bot-field" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>
        <label>
          <span>{copy.company}</span>
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder={copy.companyPlaceholder}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
          />
          {errors.company ? (
            <small id="contact-company-error" className="contact-form-error">
              {errors.company}
            </small>
          ) : null}
        </label>
        <label className="contact-form-span-2">
          <span>{copy.email}</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder={copy.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <small id="contact-email-error" className="contact-form-error">
              {errors.email}
            </small>
          ) : null}
        </label>
        <label className="contact-form-span-2">
          <span>{copy.phone}</span>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder={copy.phonePlaceholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? (
            <small id="contact-phone-error" className="contact-form-error">
              {errors.phone}
            </small>
          ) : null}
        </label>
        <label className="contact-form-span-2">
          <span>{copy.message}</span>
          <textarea
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder={copy.messagePlaceholder}
          />
        </label>
        <p className="contact-form-privacy">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.5 10V7.75A3.5 3.5 0 0 1 12 4.25a3.5 3.5 0 0 1 3.5 3.5V10" />
              <rect x="6.25" y="10" width="11.5" height="9.75" rx="1.5" />
            </svg>
          </span>
          {copy.privacy}
        </p>
        <button
          className={`btn primary contact-submit${status === "success" ? " contact-submit-success" : ""}`}
          type="submit"
          disabled={isSubmitting}
        >
          <span className="btn-icon" aria-hidden="true">
            {status === "success" ? "✓" : "↗"}
          </span>
          <span>{isSubmitting ? copy.sending : status === "success" ? copy.success : copy.button}</span>
        </button>
        {status === "error" ? (
          <p className="contact-form-status contact-form-status-error">{copy.error}</p>
        ) : null}
        <p className="contact-form-disclaimer">{disclaimer}</p>
      </div>
    </form>
  );
}
