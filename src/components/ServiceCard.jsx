import { useCart } from "../context/CartContext";

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{service.name}</h2>
      <p className="text-gray-600">{service.description}</p>
      <p className="font-semibold text-green-600 mt-2">${service.price}</p>
      <button 
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800"
        onClick={() => addToCart(service)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ServiceCard;
