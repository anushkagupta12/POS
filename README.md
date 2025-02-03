# 🚀 POS Interface for Selling Services

## 📌 Setup & Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/anushkagupta12/POS.git
    cd pos-services
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set up Tailwind CSS**

    - Install Tailwind CSS and its required dependencies:

        ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init
        ```

    - Create a `postcss.config.js` file in the root of your project:

        ```js
        module.exports = {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        }
        ```

    - In the `tailwind.config.js` file, configure the content property to include your source files:

        ```js
        module.exports = {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```

    - In your `src/index.css`, add the following lines to include Tailwind’s default styles:

        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

4. **Run the Project**

    ```bash
    npm run dev
    ```

    The application will be accessible at [http://localhost:5173/](http://localhost:5173/) (or another port specified by Vite).

## 📖 Usage Guide

### 🏠 Browse Services

View available services on the homepage.

### 🛒 Add to Cart

Click on a service to add it to the cart.

### 🛍 View Cart

Click on the "Cart" icon in the navbar to see selected services.

### 💳 Proceed to Checkout

Complete the transaction and receive confirmation.

## 📌 Assumptions & Limitations

### ✅ Assumptions

- Users can only purchase services, not physical products.
- Basic checkout without actual payment gateway integration.

### ⚠️ Limitations

- No authentication (any user can access the cart).
- Services are static (no backend integration yet).

## 🛠 Technologies Used

- **Frontend**: React (Vite), React Router, Tailwind CSS
- **State Management**: `useState`, Context API (if needed)
