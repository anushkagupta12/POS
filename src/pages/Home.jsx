import { useCart } from "../context/CartContext";
import services from "../data/services";


function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Services</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">${service.price}</p>
            <button onClick={() => addToCart(service)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
