import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { CategoriesFilter } from "@/components/categories_filter";
import { SidebarFilters } from "@/components/sidebar_filter";
import { Footer } from "@/components/footer";
import { iProduct, ProductList } from "@/components/product_list";

const skills = [
  {
    id: 1,
    name: "HTML",
    image: null,
  },
  {
    id: 2,
    name: "CSS",
    image: null,
  },
  {
    id: 3,
    name: "JavaScript",
    image: null,
  },
  {
    id: 4,
    name: "React",
    image: null,
  },
  {
    id: 5,
    name: "Next.js",
    image: null,
  },
];

const filters = [
  {
    label: "Language",
    values: ["All", "JavaScript", "Python", "Java", "C++", "C#", "Ruby", "PHP", "Go", "Rust", "Swift", "Kotlin", "C", "C#", "R", "Julia", "Rust", "Dart", "Erlang", "Elixir", "F#", "F#"],
  },
];

const products: iProduct[] = [
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
  {
    id: "1",
    title: "Product 1",
    summary: "Summary 1",
    image: "/images/build_image_1.png",
    isFavorite: false,
    isPopular: true,
    rating: 5.0,
    price: 100,
    metering: "hour",
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-cndl-light to-cndl-primary-50">
      <Navigation variant="logged-out" />
      <div className="container space-y-8">
        <Hero>
          <div className="md:flex md:items-center md:px-20 md:space-x-10 bg-cndl-neutral-100 h-full w-full rounded-3xl">
            <div className="md:w-1/2 space-y-5">
              <h1 className="text-4xl md:text-5xl font-pacifico text-cndl-primary-500">Assemble killer teams ready to create real life literal Unicorns.</h1>
              <p className="text-cndl-neutral-900 text-lg md:text-2xl">Why hire just one rockstar, when you could hire an entire hitsquad at once.</p>
              <div className="pt-4">
                <Button variant="ghost" className="btn-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Hero>
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-pacifico mb-6">Skills</h2>
            <CategoriesFilter categories={skills as any} />
          </div>
          <div className="flex min-h-screen relative items-start space-x-6">
            <div className="md:w-1/5 hidden md:block">
              <SidebarFilters filters={filters} />
            </div>
            <div className="flex-1">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
