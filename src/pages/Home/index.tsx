import Banner from "./components/Banner";
import CardCoffee from "./components/CardCoffee";
import { CoffeeItems } from "./itensData";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 mt-28">
      <Banner />
      <div>
        <strong className="text-3xl">Nossos cafés</strong>
        <div className="grid grid-cols-4 gap-8 my-16">
          {CoffeeItems.map((item) => {
            return <CardCoffee key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
