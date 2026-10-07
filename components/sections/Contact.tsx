"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { shop } from "@/data/shop";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { Pattern } from "@/components/ui/Pattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Motifs";
import { whatsappUrl } from "@/lib/links";
import { cn } from "@/lib/utils";

type Fields = { name: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", message: "" };

function localPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

function validate(values: Fields): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const phone = localPhone(values.phone);
  const message = values.message.trim();

  if (!/^[A-Za-z\u0900-\u097F][A-Za-z\u0900-\u097F .'-]{1,59}$/.test(name)) {
    errors.name = "Please enter your name.";
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a 10-digit mobile number.";
  }
  if (message.length < 10) {
    errors.message = "Please write at least a short note (10 characters).";
  } else if (message.length > 600) {
    errors.message = "Please keep the note under 600 characters.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sentName, setSentName] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSentName(values.name.trim());
  };

  const setField = (key: keyof Fields, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-maroon-800 py-20 text-ivory md:py-28">
      <Pattern />
      <Container className="relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="contact-heading"
            align="left"
            tone="dark"
            eyebrow="Contact"
            title="Ask about a bridal set"
            description="Call, write, or send a WhatsApp message. The form on this preview stays in the browser — it does not reach the shop on its own."
          />
          <ul className="mt-8 space-y-5">
            <li>
              <a href={shop.phoneHref} className="group flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-gold-300">Phone</span>
                  <span className="mt-1 block text-lg text-ivory group-hover:text-gold-300">{shop.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={shop.emailHref} className="group flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-gold-300">Email</span>
                  <span className="mt-1 block break-all text-lg text-ivory group-hover:text-gold-300">{shop.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-gold-300" aria-hidden="true" />
              <span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-gold-300">Shop</span>
                <span className="mt-1 block text-ivory/90">{shop.address.full}</span>
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <GoldButton href={whatsappUrl()}>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp the shop
            </GoldButton>
          </div>
        </div>

        <div className="border border-gold-400/60 bg-ivory p-6 text-maroon-900 md:p-8">
          {sentName ? (
            <div role="status" className="py-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-maroon-800">Received on this page</p>
              <h3 className="mt-3 font-serif text-4xl">Thank you, {sentName}.</h3>
              <p className="mt-4 leading-relaxed text-maroon-800">
                This preview does not send the note to the shop. Please call or WhatsApp so your message actually reaches us.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GoldButton href={shop.phoneHref} tone="onLight">
                  Call {shop.phoneDisplay}
                </GoldButton>
                <GoldButton href={whatsappUrl()} variant="outline" tone="onLight">
                  WhatsApp
                </GoldButton>
              </div>
              <button
                type="button"
                className="mt-6 text-[12px] uppercase tracking-[0.18em] text-maroon-800 underline-offset-4 hover:underline"
                onClick={() => {
                  setSentName(null);
                  setValues(empty);
                }}
              >
                Write another note
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              <Field
                id="name"
                label="Name"
                value={values.name}
                error={errors.name}
                autoComplete="name"
                onChange={(value) => setField("name", value)}
              />
              <Field
                id="phone"
                label="Phone"
                value={values.phone}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
                onChange={(value) => setField("phone", value)}
              />
              <div>
                <label htmlFor="message" className="text-[11px] uppercase tracking-[0.22em] text-maroon-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => setField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    "mt-2 w-full border bg-ivory px-4 py-3 text-maroon-900 outline-none",
                    errors.message ? "border-maroon-700" : "border-gold-600/40 focus:border-gold-600",
                  )}
                />
                {errors.message ? (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-maroon-700">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <GoldButton type="submit" tone="onLight" className="w-full sm:w-auto">
                Send message
              </GoldButton>
              <p className="text-sm leading-relaxed text-maroon-800/75">
                The button checks the form in your browser only. To reach the shop, use the phone or WhatsApp.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  inputMode?: "tel" | "text";
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.22em] text-maroon-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 w-full border bg-ivory px-4 py-3 text-maroon-900 outline-none",
          error ? "border-maroon-700" : "border-gold-600/40 focus:border-gold-600",
        )}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-maroon-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
