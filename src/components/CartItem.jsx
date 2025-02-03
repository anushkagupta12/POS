function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
      <div className="flex justify-between items-center mt-4 p-2 border-b">
        <span>{item.name}</span>
        <input
          type="number"
          min="1"
          value={item.quantity}
          className="w-12 text-center border rounded-md"
          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
        />
        <span>${(item.price * item.quantity).toFixed(2)}</span>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500">❌</button>
      </div>
    );
  }
  
  export default CartItem;
  