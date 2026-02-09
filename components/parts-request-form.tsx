"use client";

import React from "react"

import { useState } from "react";
import { Send } from "lucide-react";

export default function PartsRequestForm() {
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
        <h3 className="text-xl font-bold text-foreground">
          Solicitud enviada
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Nos comunicaremos contigo lo antes posible con la informacion de tu
          repuesto.
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
            htmlFor="marca"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Marca
          </label>
          <select
            id="marca"
            name="marca"
            required
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
          >
            <option value="">Selecciona una marca</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            <option value="mercedes">Mercedes Benz</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="mini">Mini Cooper</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="modelo"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Modelo
          </label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            required
            placeholder="Ej: Serie 3, A4, Clase C..."
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="anio"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Ano
          </label>
          <input
            type="text"
            id="anio"
            name="anio"
            required
            placeholder="Ej: 2020"
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="tipo"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Tipo de repuesto
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            required
            placeholder="Ej: Pastillas de freno, filtro..."
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Mensaje adicional
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Describe con mas detalle el repuesto que necesitas..."
            className="w-full resize-none rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="contacto"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Telefono de contacto
          </label>
          <input
            type="tel"
            id="contacto"
            name="contacto"
            required
            placeholder="Tu numero de telefono"
            className="w-full rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto"
      >
        <Send className="h-4 w-4" />
        Solicitar repuesto
      </button>
    </form>
  );
}
