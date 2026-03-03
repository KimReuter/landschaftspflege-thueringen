"use client";

import { useState } from "react";
import { H3, P, Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import { LEISTUNGEN } from "@/content/contact/kontakt";

type FormState = "idle" | "sending" | "success";

export default function ContactForm() {
  const { ref, visible } = useReveal(0.08);

  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    telefon: "",
    email: "",
    leistung: "",
    nachricht: "",
  });

  const inputClass =
    "w-full bg-surface border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-brand-accent";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  return (
    <div
      ref={ref}
      className="bg-surface p-10 md:p-12 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      {state === "success" ? (
        <div className="text-center py-16">
          <div className="text-brand-accent text-4xl mb-6">✓</div>
          <H3>Nachricht erhalten.</H3>
          <P>Ich melde mich persönlich bei Ihnen.</P>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            required
            placeholder="Name"
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            name="telefon"
            required
            placeholder="Telefon"
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, telefon: e.target.value })
            }
          />

          <select
            name="leistung"
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, leistung: e.target.value })
            }
          >
            {LEISTUNGEN.map((l) => (
              <option
                key={l}
                value={l === "Bitte wählen..." ? "" : l}
              >
                {l}
              </option>
            ))}
          </select>

          <textarea
            name="nachricht"
            rows={4}
            placeholder="Nachricht"
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, nachricht: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={state === "sending"}
            className="bg-brand-accent text-white px-8 py-3.5 uppercase tracking-wider font-semibold"
          >
            {state === "sending"
              ? "Wird gesendet..."
              : "Anfrage senden →"}
          </button>
        </form>
      )}
    </div>
  );
}