import OrderForm from "@/components/OrderForm";

export default function Commander() {
  return (
    <section className="py-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-pink-600 mb-6">
        Passer une commande
      </h2>
      <OrderForm />
    </section>
  );
}