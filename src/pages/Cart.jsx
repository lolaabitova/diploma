import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";

export default function Cart() {
  return (
    <div>
      <span><h1>Cart</h1></span>
      <CartList />
      <OrderForm />
    </div>
  );
}
