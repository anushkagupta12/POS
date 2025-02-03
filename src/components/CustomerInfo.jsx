function CustomerInfo() {
    return (
      <div className="mt-4">
        <h3 className="font-semibold">Customer Information</h3>
        <input type="text" placeholder="Customer Name" className="w-full border p-2 mt-2 rounded-md" />
        <input type="email" placeholder="Email" className="w-full border p-2 mt-2 rounded-md" />
        <input type="tel" placeholder="Phone" className="w-full border p-2 mt-2 rounded-md" />
      </div>
    );
  }
  
  export default CustomerInfo;
  