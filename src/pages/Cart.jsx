import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="p-4 border-b">
              <h2 className="text-lg">{item.name}</h2>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          
          <Link to="/checkout" className="block mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
