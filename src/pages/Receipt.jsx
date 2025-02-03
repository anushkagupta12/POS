import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Receipt() {
  const { customer } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Receipt</h1>
      <p>Thank you, {customer.name}!</p>
      <p>Your transaction is complete.</p>
      <Link to="/" className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Return to Home
      </Link>
    </div>
  );
}

export default Receipt;
