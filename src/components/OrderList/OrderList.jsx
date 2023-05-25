import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  // Получить заказы и продукты из контекста
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }

  // Выводим все заказы.
  const output = orders.map(order => {
    // Вывести содержимое корзины для этого заказа
    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);

      if (!product) {
        return <strong className="red">Product not found</strong>;
      }

      return (
        <div className="order-cart">
          <div><img src={product.picture} alt={product.name} /></div>
          <div>{product.name}:<strong className="red"> {order.cart[productId]} X {product.price} $ = {order.cart[productId] * product.price} $</strong></div>
        </div>
      );
    })

    return (
      <div className="Order">
        <div><strong>Name</strong>: {order.name}</div>
        <div><strong>Phone</strong>: {order.phone}</div>
        <div><strong>Address</strong>: {order.address}</div>
        <div className="order-cart"><div><strong>Cart:</strong></div><div>{cartOutput}</div></div>
        
      </div>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}