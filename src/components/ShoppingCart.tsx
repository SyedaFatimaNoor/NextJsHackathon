const ShoppingCart = () => {  
  const cartItems = [  
    {  
      id: 1,  
      image: "/images/graystone-vase.png",  
      title: "Graystone vase",  
      description: "A timeless ceramic vase with a tri-color grey glaze.",  
      price: 85,  
      quantity: 1,  
    },  
    {  
      id: 2,  
      image: "/images/basic-white-vase.png",  
      title: "Basic white vase",  
      description: "Beautiful and simple, this is one for the classics.",  
      price: 125,  
      quantity: 1,  
    },  
  ];  

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);  

  return (  
    <section className="p-8 bg-white max-w-4xl mx-auto rounded-lg shadow-md">  
      <h1 style={{fontFamily: "ClashDisplay"}} className="text-3xl font-normal text-[#2A254B] mb-8">Your shopping cart</h1>  
      <div className="w-full border-b border-gray-300 mb-4">  
        <div style={{fontFamily: "ClashDisplay"}} className="grid grid-cols-4 text-sm font-medium text-[#505977]">  
          <span>Product</span>  
          <span>Quantity</span>  
          <span>Total</span>  
        </div>  
      </div>  
      {cartItems.map((item) => (  
        <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b border-gray-200">  
          <div className="flex items-start">  
            <img  
              src={item.image}  
              alt={item.title}  
              className="w-16 h-16 object-cover"  
            />  
            <div className="ml-4">  
              <h2 style={{fontFamily: "ClashDisplay"}} className="text-lg  font-normal text-[#2A254B]">{item.title}</h2>  
              <p className="text-sm text-[#505977]">{item.description}</p>  
              <span className="text-sm font-medium text-[#2A254B]">£{item.price}</span>  
            </div>  
          </div>  
          <div className="text-center text-lg">{item.quantity}</div>  
          <div className="text-right text-lg text-[#2A254B] font-medium">£{item.price * item.quantity}</div>  
        </div>  
      ))}  
      <div className="mt-6 flex justify-between items-center">  
        <div className="text-sm text-[#505977]">  
          Taxes and shipping are calculated at checkout  
        </div>  
        <div className="text-right">  
          <p className="text-sm text-[#505977]">Subtotal</p>  
          <p className="text-2xl font-semibold text-[#2A254B]">£{subtotal}</p>  
        </div>  
      </div>  
      <div className="mt-8">  
        <button className="w-full px-6 py-3 bg-[#2A254B] text-white text-sm font-medium rounded hover:bg-[#3a3475]">  
          Go to checkout  
        </button>  
      </div>  
    </section>  
  );  
};  

export default ShoppingCart;