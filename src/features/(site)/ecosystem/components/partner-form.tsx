"use client";

import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { PARTNER_FORM_DEFAULTS, partnerFormSchema } from "../schema";

type FieldErrors = Partial<Record<keyof typeof PARTNER_FORM_DEFAULTS, string>>;

const fields = [
  {
    name: "name",
    label: "Your Name / Alias",
    placeholder: "Rider",
    autoComplete: "name",
  },
  {
    name: "contact",
    label: "Your Contact Details",
    placeholder: "Telegram, X, or email",
    autoComplete: "email",
  },
  {
    name: "project",
    label: "Project / Organisation",
    placeholder: "Project name",
    autoComplete: "organization",
  },
  {
    name: "role",
    label: "Your Role",
    placeholder: "Founder, BD, community…",
    autoComplete: "organization-title",
  },
  {
    name: "link",
    label: "Link to Project",
    placeholder: "https://",
    autoComplete: "url",
    type: "url",
  },
] as const;

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function PartnerForm() {
  const [values, setValues] = useState(PARTNER_FORM_DEFAULTS);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [challenge, setChallenge] = useState(() => [
    randomInt(9) + 1,
    randomInt(9) + 1,
  ]);

  const captchaLabel = useMemo(
    () => `${challenge[0]} + ${challenge[1]} =`,
    [challenge],
  );

  function resetCaptcha() {
    setChallenge([randomInt(9) + 1, randomInt(9) + 1]);
    setCaptchaAnswer("");
    setCaptchaError("");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setCaptchaError("");

    const parsed = partnerFormSchema.safeParse(values);
    if (!parsed.success) {
      const { fieldErrors } = z.flattenError(parsed.error);
      const next: FieldErrors = {};
      for (const key of Object.keys(PARTNER_FORM_DEFAULTS) as Array<
        keyof typeof PARTNER_FORM_DEFAULTS
      >) {
        const message = fieldErrors[key]?.[0];
        if (message) next[key] = message;
      }
      setErrors(next);
      return;
    }

    const expected = challenge[0] + challenge[1];
    if (Number(captchaAnswer) !== expected) {
      setCaptchaError("Check the sum and try again");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        toast.error("Could not send. Try again.");
        return;
      }

      toast.success("Thanks — we'll be in touch.");
      setValues(PARTNER_FORM_DEFAULTS);
      resetCaptcha();
    } catch {
      toast.error("Could not send. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-1.5 text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {field.label}
            </span>
            <input
              name={field.name}
              type={"type" in field ? field.type : "text"}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.name]}
              aria-invalid={Boolean(errors[field.name])}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [field.name]: event.target.value,
                }))
              }
              className={cn(
                "rounded-xl border bg-background/80 px-4 py-3 text-sm text-white placeholder:text-slate-600",
                "focus:border-ice focus:outline-none",
                errors[field.name] ? "border-red-400/60" : "border-ice/20",
              )}
            />
            {errors[field.name] && (
              <span className="text-xs text-red-400">{errors[field.name]}</span>
            )}
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Your Message
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="What should we know?"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className={cn(
            "resize-y rounded-xl border bg-background/80 px-4 py-3 text-sm text-white placeholder:text-slate-600",
            "focus:border-ice focus:outline-none",
            errors.message ? "border-red-400/60" : "border-ice/20",
          )}
        />
        {errors.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <label className="flex max-w-48 flex-col gap-1.5 text-left">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {captchaLabel}
          </span>
          <input
            inputMode="numeric"
            autoComplete="off"
            value={captchaAnswer}
            aria-invalid={Boolean(captchaError)}
            onChange={(event) => setCaptchaAnswer(event.target.value)}
            className={cn(
              "rounded-xl border bg-background/80 px-4 py-3 text-sm text-white",
              "focus:border-ice focus:outline-none",
              captchaError ? "border-red-400/60" : "border-ice/20",
            )}
          />
          {captchaError && (
            <span className="text-xs text-red-400">{captchaError}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "inline-flex h-12 items-center justify-center rounded-full bg-ice-bright px-8 text-sm font-semibold text-background transition",
            "hover:bg-ice-glow disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {submitting ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
