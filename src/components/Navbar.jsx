// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// // import Cart from "./Cart";
// import Cart from "../pages/Cart";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-lg font-bold">POS System</Link>
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <div className={`absolute top-16 left-0 w-full bg-blue-600 text-center md:static md:flex md:space-x-4 md:w-auto ${isOpen ? "block" : "hidden"}`}>
//           <Link to="/services" className="block p-2 md:inline">Services</Link>
//           <Link to="/cart" className="relative hover:text-gray-200">
//             Cart 
//             {Cart.length > 0 && (
//               <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {Cart.length}
//               </span>
//             )}
//             </Link>
//           <Link to="/checkout" className="block p-2 md:inline">Checkout</Link>
//           <Link to = "/contact" className="block p-2 md:inline">Contact Us</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Cart from "../pages/Cart";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]); // Track cart items

//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-lg font-bold">POS System</Link>
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <div className={`absolute top-16 left-0 w-full bg-blue-600 text-center md:static md:flex md:space-x-4 md:w-auto ${isOpen ? "block" : "hidden"}`}>
//           <Link to="/services" className="block p-2 md:inline">Services</Link>
//           <Link to="/cart" className="relative hover:text-gray-200">
//             Cart 
//             {cartItems.length > 0 && (
//               <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//           <Link to="/checkout" className="block p-2 md:inline">Checkout</Link>
//           <Link to="/contact" className="block p-2 md:inline">Contact Us</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const { cart } = useCart(); // Get cart data

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <Link to="/" className="text-lg font-bold">POS System</Link>
//       <div>
//         <Link to="/cart" className="relative bg-blue-500 px-4 py-2 rounded">
//           Cart  
//           {cart.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const { cart } = useCart(); // Get cart state

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-end items-center w-full">
//       {/* Center: Navigation Links */}
//       <div className="flex space-x-6 ml-auto">
//         <Link to="/" className="hover:text-gray-300">Home</Link>
//         <Link to="/services" className="hover:text-gray-300">Services</Link>
//         <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
//       </div>

//       {/* Right: Cart Button */}
//       <div className="ml-6 relative">
//         <Link to="/cart" className="bg-blue-500 px-4 py-2 rounded flex items-center">
//           🛒 Cart
//           {cart.length > 0 && (
//             <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart(); // Get cart state

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      {/* Left: Logo / Brand */}
      <Link to="/" className="text-lg font-bold">
        POS System
      </Link>

      {/* Right: Navigation Links and Cart Button */}
      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {/* <Link to="/services" className="hover:text-gray-300">Services</Link> */}
        <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>

        {/* Cart Button */}
        <div className="relative">
          <Link to="/cart" className="bg-blue-500 px-4 py-2 rounded flex items-center">
             Cart
            {cart.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
