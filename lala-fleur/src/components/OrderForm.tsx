"use client";

import { useState } from "react";

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    bouquet: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Commande envoyée ! (Pour l'instant, pas encore enregistrée)");
    setForm({ name: "", phone: "", date: "", bouquet: "", message: "" });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nom complet"
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Téléphone"
        className="w-full border p-3 rounded"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <select
        name="bouquet"
        value={form.bouquet}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      >
        <option value="">Sélectionner un bouquet</option>
        <option value="Bouquet romantique">Bouquet romantique</option>
        <option value="Bouquet anniversaire">Bouquet anniversaire</option>
        <option value="Bouquet mariage">Bouquet mariage</option>
      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message ou détails du bouquet"
        className="w-full border p-3 rounded"
      />

      <button className="w-full bg-pink-600 text-white py-3 rounded">
        Envoyer la commande
      </button>
    </form>
  );
}