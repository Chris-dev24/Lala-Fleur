"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

type Order = {
  id: number;
  name: string;
  phone: string;
  date: string;
  bouquet: string;
  message: string;
  order_status: string;
  payment_status: string;
};

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10, color: "pink" },
  text: { fontSize: 12 },
});

const InvoicePDF = ({ order }: { order: Order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Facture Lala-Fleur 🌸</Text>
      <Text style={styles.text}>Nom client: {order.name}</Text>
      <Text style={styles.text}>Téléphone: {order.phone}</Text>
      <Text style={styles.text}>Date livraison: {order.date}</Text>
      <Text style={styles.text}>Bouquet: {order.bouquet}</Text>
      <Text style={styles.text}>Message: {order.message}</Text>
      <Text style={styles.text}>Statut commande: {order.order_status}</Text>
      <Text style={styles.text}>Statut paiement: {order.payment_status}</Text>
    </Page>
  </Document>
);

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.log(error);
    else setOrders(data as Order[]);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: number, field: "order_status" | "payment_status", value: string) => {
    const { error } = await supabase
      .from("orders")
      .update({ [field]: value })
      .eq("id", id);
    if (error) console.log(error);
    else fetchOrders();
  };

  return (
    <section className="py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Dashboard Admin</h1>
      {orders.length === 0 && <p>Aucune commande pour le moment.</p>}

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded shadow space-y-2">
            <p><strong>Client :</strong> {order.name}</p>
            <p><strong>Téléphone :</strong> {order.phone}</p>
            <p><strong>Date :</strong> {order.date}</p>
            <p><strong>Bouquet :</strong> {order.bouquet}</p>
            <p><strong>Message :</strong> {order.message}</p>

            <div className="flex gap-2">
              <label>
                Statut commande: 
                <select
                  value={order.order_status}
                  onChange={(e) => updateStatus(order.id, "order_status", e.target.value)}
                  className="border p-1 rounded"
                >
                  <option>En attente</option>
                  <option>En cours</option>
                  <option>Terminé</option>
                </select>
              </label>

              <label>
                Statut paiement: 
                <select
                  value={order.payment_status}
                  onChange={(e) => updateStatus(order.id, "payment_status", e.target.value)}
                  className="border p-1 rounded"
                >
                  <option>Non payé</option>
                  <option>Payé</option>
                </select>
              </label>

              <PDFDownloadLink document={<InvoicePDF order={order} />} fileName={`facture_${order.id}.pdf`}>
                {({ loading }) => (
                  <button className="bg-pink-600 text-white px-3 py-1 rounded">
                    {loading ? "Chargement..." : "Imprimer facture"}
                  </button>
                )}
              </PDFDownloadLink>

              <a
                href={`https://wa.me/261332917978?text=${encodeURIComponent(
                  `Commande Lala-Fleur :
Nom: ${order.name}
Téléphone: ${order.phone}
Date: ${order.date}
Bouquet: ${order.bouquet}
Message: ${order.message}`
                )}`}
                target="_blank"
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}