"use client";

import React from "react"

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Mensaje enviado</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-background p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            placeholder="Tu nombre completo"
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="asunto"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Asunto
          </label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            required
            placeholder="Asunto de tu mensaje"
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="mensaje-contacto"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje-contacto"
            name="mensaje"
            rows={5}
            required
            placeholder="Escribe tu mensaje aqui..."
            className="w-full resize-none rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto"
      >
        <Send className="h-4 w-4" />
        Enviar mensaje
      </button>
    </form>
  );
}
