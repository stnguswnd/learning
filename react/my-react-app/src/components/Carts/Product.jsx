export default function Product({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>제목{product.title}</h2>
      <p>가격:{product.price}</p>
      <p>재고 : {product.quantity}</p>
      <p>총 가격 : {product.total}</p>
      <img src={product.thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
