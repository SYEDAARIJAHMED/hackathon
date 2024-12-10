import Image from "next/image";

const basketItems = [
  {
    id: "1",
    name: "Grey Stone Vase",
    price: 120,
    quantity: 2,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlAZfIzBx81U-SLYY5is6OggsxS042f0VNlRrpUihV9qHlhoGG",
  },
  {
    id: "2",
    name: "Simple White Vase",
    price: 250,
    quantity: 1,
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZRzYSKIEXOsUZBYFt8raiHCLaLGTy_5rUMujYxqKI6jQmmL3Y",
  },
];

export default function BasketPage() {
  const totalCost = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="basket-page">
      <h1 className="basket-title">Your Shopping Basket</h1>
      <section className="basket-items">
        {basketItems.map((item) => (
          <div key={item.id} className="basket-item">
            <div className="basket-item-image-container">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={150}
                height={150}
                className="basket-item-image"
              />
            </div>
            <div className="basket-item-info">
              <h2>{item.name}</h2>
              <p>Price: £{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: £{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="basket-summary">
        <h2>Total Cost: £{totalCost}</h2>
        <button className="checkout-button">Proceed to Checkout</button>
      </section>
    </div>
  );
}
