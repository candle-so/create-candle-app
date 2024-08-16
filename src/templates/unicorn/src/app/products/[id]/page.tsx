import { Navigation } from "@/components/navigation";
import { Product } from "@/components/product";
import Candle from "@candle-so/node";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });

  const { error, data: product } = await candle.products.retrieveProductById(params.id);

  if (error || !product) return <div className="text-red-500 text-center py-20 font-bold text-xl">Product not found</div>;
  return (
    <main className="bg-gradient-to-b from-cndl-light to-cndl-primary-50">
      <Navigation />
      <Product product={product} />
    </main>
  );
}
