import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { cart, customer, setCustomer, clearCart } = useCart();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleCheckout = () => {
    setProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate("/receipt");
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <input type="text" placeholder="Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} className="border p-2 w-full mb-2" />
        <input type="email" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} className="border p-2 w-full mb-2" />
        <input type="tel" placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} className="border p-2 w-full" />
      </div>
      <button onClick={handleCheckout} disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded">
        {processing ? "Processing..." : "Complete Payment"}
      </button>
    </div>
  );
}

export default Checkout;
