import OrderForm from "@/components/OrderForm";

export default function Commander() {
  return (
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">
        <h2 className="text-3xl font-serif font-bold text-pink-600 mb-6 text-center">Passer une commande</h2>
        <OrderForm />
      </div>
    </section>
  );
}