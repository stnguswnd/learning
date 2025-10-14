export default function ProductCard(product) {
  const { name, price, description, inStock, rating, tags, image } = product;
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>{name}</h2>
      <p>{price}</p>
      <p>재고 상태</p>
      <p>평점</p>
      <div>태그들</div>
    </div>
  );
}
