import CartItem from "./CartItem";
import CustomerInfo from "./CustomerInfo";
import Summary from "./Summary";
import CheckoutButton from "./CheckoutButton";

function Cart({ cart, setCart }) {
  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Current Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      ))}
      <CustomerInfo />
      <Summary subtotal={subtotal} tax={tax} total={total} />
      <CheckoutButton />
    </div>
  );
}

export default Cart;
