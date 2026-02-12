"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function OrderForm() {
  const [form, setForm] = useState({ name:"", phone:"", date:"", bouquet:"", message:"" });

  const handleChange = (e:any) => setForm({...form,[e.target.name]: e.target.value });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const { data, error } = await supabase.from("orders").insert([{
      ...form, order_status:"En attente", payment_status:"Non payé"
    }]);
    if(error) alert("Erreur !");
    else {
      alert("Commande envoyée !");
      setForm({ name:"", phone:"", date:"", bouquet:"", message:"" });

      const whatsappMessage = `Nouvelle commande Lala-Fleur :\nNom: ${form.name}\nTéléphone: ${form.phone}\nDate: ${form.date}\nBouquet: ${form.bouquet}\nMessage: ${form.message}`;
      window.open(`https://wa.me/261XXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nom complet" className="w-full border p-3 rounded" required />
      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Téléphone" className="w-full border p-3 rounded" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-3 rounded" required />
      <input type="text" name="bouquet" value={form.bouquet} onChange={handleChange} placeholder="Nom bouquet" className="w-full border p-3 rounded" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message ou détails" className="w-full border p-3 rounded" />
      <button className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition">Envoyer la commande</button>
    </form>
  );
}