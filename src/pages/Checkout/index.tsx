import CheckoutItem from "./components/CheckoutItem";
import Form from "./components/Form";

export default function Checkout() {
  return (
    <div className="flex justify-between gap-4 mt-36">
      <Form />
      <CheckoutItem />
    </div>
  );
}
