import products from "@/components/lib/data/product";

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">£{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
