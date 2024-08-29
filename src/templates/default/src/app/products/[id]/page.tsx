import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Product } from "@/components/product";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const candle = Candle.init(candleConfig);

  const { error, data: product } = await candle.products.retrieveProductById(params.id);

  if (error || !product) return <div className="text-red-500 text-center py-20 font-bold text-xl">Product not found</div>;
  return (
    <main className="bg-gradient-to-b from-cndl-light to-cndl-primary-50">
      <Navigation />
      <Product product={product} />
      <Footer />
    </main>
  );
}
