import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { CategoriesFilter } from "@/components/categories_filter";
import { SidebarFilters } from "@/components/sidebar_filter";
import { Footer } from "@/components/footer";
import { ProductList } from "@/components/product_list";
import { IProduct, IUser } from "schema-interface";

export interface IProductWithUser extends IProduct {
  user: IUser | null;
}

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

const products: IProductWithUser[] = [
  {
    id: "prod_a1b2c3d4e5f6",
    platform_id: "platform_001",
    user_id: "user_01",
    parent_product_id: null,
    name: "Full-Stack Web Development",
    description: "Building responsive and robust web applications.",
    image: "https://example.com/images/fullstack.png",
    quantity: 10,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Development",
    subcategory: "Web Development",
    tags: ["JavaScript", "React", "Node.js", "API"],
    price: 3000.0,
    mode: "live",
    activeSubscriptions: 2,
    subscriptionLimit: 5,
    buyerLimit: 10,
    activeBuyers: 8,
    expires: null,
    updated: "2024-08-12T12:00:00Z",
    created: "2024-08-10T10:00:00Z",
    user: {
      id: "user_01",
      email: "dev@example.com",
      username: "fullstack_dev",
      bio: "Experienced web developer with a passion for building scalable web apps.",
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      image: "https://example.com/images/john_doe.png",
      stripeConnectId: "acct_1ExampleABC",
      plan: "premium",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "America/New_York",
      stripeCustomerId: "cus_123Example",
      authenticated: "2024-08-10T09:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-10T10:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_b7c8d9e0f1g2",
    platform_id: "platform_002",
    user_id: "user_02",
    parent_product_id: null,
    name: "UI/UX Design Consultation",
    description: "Creating intuitive and user-friendly designs for web and mobile apps.",
    image: "https://example.com/images/uiux.png",
    quantity: 15,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: true,
    category: "Design",
    subcategory: "UI/UX Design",
    tags: ["Figma", "Sketch", "Prototyping", "User Research"],
    price: 1500.0,
    mode: "live",
    activeSubscriptions: 3,
    subscriptionLimit: 10,
    buyerLimit: 15,
    activeBuyers: 12,
    expires: null,
    updated: "2024-08-11T14:30:00Z",
    created: "2024-08-05T09:00:00Z",
    user: {
      id: "user_02",
      email: "designer@example.com",
      username: "uiux_guru",
      bio: "Expert in creating seamless user experiences and modern UI designs.",
      name: "Jane Smith",
      firstName: "Jane",
      lastName: "Smith",
      image: "https://example.com/images/jane_smith.png",
      stripeConnectId: "acct_2ExampleXYZ",
      plan: "standard",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "Europe/London",
      stripeCustomerId: "cus_456Example",
      authenticated: "2024-08-06T11:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-05T09:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_c3d4e5f6g7h8",
    platform_id: "platform_003",
    user_id: "user_03",
    parent_product_id: null,
    name: "Mobile App Development",
    description: "Building native and cross-platform mobile applications.",
    image: "https://example.com/images/mobile_dev.png",
    quantity: 8,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Development",
    subcategory: "Mobile Development",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    price: 4000.0,
    mode: "live",
    activeSubscriptions: 1,
    subscriptionLimit: 3,
    buyerLimit: 5,
    activeBuyers: 3,
    expires: null,
    updated: "2024-08-10T08:00:00Z",
    created: "2024-08-07T07:00:00Z",
    user: {
      id: "user_03",
      email: "mobile_dev@example.com",
      username: "app_master",
      bio: "Specializing in mobile apps with seamless performance and great UX.",
      name: "Alex Johnson",
      firstName: "Alex",
      lastName: "Johnson",
      image: "https://example.com/images/alex_johnson.png",
      stripeConnectId: "acct_3Example123",
      plan: "enterprise",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "America/Los_Angeles",
      stripeCustomerId: "cus_789Example",
      authenticated: "2024-08-07T10:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-07T07:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_e9f0g1h2i3j4",
    platform_id: "platform_004",
    user_id: "user_04",
    parent_product_id: null,
    name: "Graphic Design for Marketing",
    description: "Designing eye-catching graphics for marketing campaigns and social media.",
    image: "https://example.com/images/graphic_design.png",
    quantity: 20,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Design",
    subcategory: "Graphic Design",
    tags: ["Photoshop", "Illustrator", "Branding", "Marketing"],
    price: 1000.0,
    mode: "live",
    activeSubscriptions: 5,
    subscriptionLimit: 10,
    buyerLimit: 20,
    activeBuyers: 15,
    expires: null,
    updated: "2024-08-12T10:00:00Z",
    created: "2024-08-09T08:00:00Z",
    user: {
      id: "user_04",
      email: "designer@example.com",
      username: "graphic_guru",
      bio: "Passionate about creating visually stunning graphics for brands.",
      name: "Emily Davis",
      firstName: "Emily",
      lastName: "Davis",
      image: "https://example.com/images/emily_davis.png",
      stripeConnectId: "acct_4Example456",
      plan: "premium",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "Europe/Berlin",
      stripeCustomerId: "cus_987Example",
      authenticated: "2024-08-09T10:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-09T08:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_g5h6i7j8k9l0",
    platform_id: "platform_005",
    user_id: "user_05",
    parent_product_id: null,
    name: "SEO Optimization",
    description: "Improving website visibility and search engine rankings.",
    image: "https://example.com/images/seo.png",
    quantity: 5,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: true,
    category: "Marketing",
    subcategory: "SEO",
    tags: ["SEO", "Google Analytics", "Keyword Research", "Content Marketing"],
    price: 2000.0,
    mode: "live",
    activeSubscriptions: 2,
    subscriptionLimit: 5,
    buyerLimit: 5,
    activeBuyers: 5,
    expires: null,
    updated: "2024-08-11T12:00:00Z",
    created: "2024-08-08T09:00:00Z",
    user: {
      id: "user_05",
      email: "seo_expert@example.com",
      username: "seo_master",
      bio: "Expert in boosting website traffic and enhancing online presence.",
      name: "Michael Brown",
      firstName: "Michael",
      lastName: "Brown",
      image: "https://example.com/images/michael_brown.png",
      stripeConnectId: "acct_5Example789",
      plan: "standard",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "Asia/Singapore",
      stripeCustomerId: "cus_654Example",
      authenticated: "2024-08-08T11:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-08T09:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_i1j2k3l4m5n6",
    platform_id: "platform_006",
    user_id: "user_06",
    parent_product_id: null,
    name: "Content Writing and Editing",
    description: "Creating high-quality written content for blogs, articles, and websites.",
    image: "https://example.com/images/content_writing.png",
    quantity: 12,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Writing",
    subcategory: "Content Writing",
    tags: ["Copywriting", "Editing", "SEO Writing", "Blogging"],
    price: 1200.0,
    mode: "live",
    activeSubscriptions: 4,
    subscriptionLimit: 10,
    buyerLimit: 15,
    activeBuyers: 10,
    expires: null,
    updated: "2024-08-10T13:00:00Z",
    created: "2024-08-07T10:00:00Z",
    user: {
      id: "user_06",
      email: "writer@example.com",
      username: "wordsmith",
      bio: "Passionate writer with a knack for crafting compelling stories.",
      name: "Sarah Lee",
      firstName: "Sarah",
      lastName: "Lee",
      image: "https://example.com/images/sarah_lee.png",
      stripeConnectId: "acct_6ExampleABC",
      plan: "premium",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "Australia/Sydney",
      stripeCustomerId: "cus_321Example",
      authenticated: "2024-08-07T12:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-07T10:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_o7p8q9r0s1t2",
    platform_id: "platform_007",
    user_id: "user_07",
    parent_product_id: null,
    name: "Digital Marketing Strategy",
    description: "Developing comprehensive digital marketing plans to drive online growth.",
    image: "https://example.com/images/digital_marketing.png",
    quantity: 6,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: true,
    category: "Marketing",
    subcategory: "Digital Marketing",
    tags: ["Social Media", "Email Marketing", "PPC", "SEO"],
    price: 2500.0,
    mode: "live",
    activeSubscriptions: 3,
    subscriptionLimit: 8,
    buyerLimit: 10,
    activeBuyers: 7,
    expires: null,
    updated: "2024-08-12T09:00:00Z",
    created: "2024-08-08T12:00:00Z",
    user: {
      id: "user_07",
      email: "marketer@example.com",
      username: "digital_guru",
      bio: "Helping businesses thrive online through strategic digital marketing.",
      name: "David Wilson",
      firstName: "David",
      lastName: "Wilson",
      image: "https://example.com/images/david_wilson.png",
      stripeConnectId: "acct_7ExampleXYZ",
      plan: "enterprise",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "America/Chicago",
      stripeCustomerId: "cus_987654Example",
      authenticated: "2024-08-08T10:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-08T12:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_u1v2w3x4y5z6",
    platform_id: "platform_008",
    user_id: "user_08",
    parent_product_id: null,
    name: "Data Analysis and Reporting",
    description: "Providing in-depth data analysis and generating actionable reports.",
    image: "https://example.com/images/data_analysis.png",
    quantity: 10,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Data",
    subcategory: "Data Analysis",
    tags: ["Data Analysis", "Reporting", "Excel", "PowerBI"],
    price: 1800.0,
    mode: "live",
    activeSubscriptions: 2,
    subscriptionLimit: 5,
    buyerLimit: 10,
    activeBuyers: 8,
    expires: null,
    updated: "2024-08-12T10:00:00Z",
    created: "2024-08-09T08:00:00Z",
    user: {
      id: "user_08",
      email: "data_analyst@example.com",
      username: "data_wizard",
      bio: "Turning raw data into insights that drive business decisions.",
      name: "Linda Carter",
      firstName: "Linda",
      lastName: "Carter",
      image: "https://example.com/images/linda_carter.png",
      stripeConnectId: "acct_8Example456",
      plan: "premium",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "America/New_York",
      stripeCustomerId: "cus_123987Example",
      authenticated: "2024-08-09T10:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-09T08:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
  {
    id: "prod_a1b2c3d4e5f6g7",
    platform_id: "platform_009",
    user_id: "user_09",
    parent_product_id: null,
    name: "Cybersecurity Assessment",
    description: "Conducting comprehensive security assessments to protect digital assets.",
    image: "https://example.com/images/cybersecurity.png",
    quantity: 5,
    isAvailableInStock: true,
    isEnabled: true,
    useSeasonalPrices: false,
    category: "Security",
    subcategory: "Cybersecurity",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Incident Response", "Security Audits"],
    price: 3000.0,
    mode: "live",
    activeSubscriptions: 1,
    subscriptionLimit: 3,
    buyerLimit: 5,
    activeBuyers: 2,
    expires: null,
    updated: "2024-08-12T11:00:00Z",
    created: "2024-08-10T09:00:00Z",
    user: {
      id: "user_09",
      email: "cybersecurity_pro@example.com",
      username: "security_guru",
      bio: "Safeguarding businesses from digital threats with top-notch security solutions.",
      name: "Karen Phillips",
      firstName: "Karen",
      lastName: "Phillips",
      image: "https://example.com/images/karen_phillips.png",
      stripeConnectId: "acct_9ExampleDEF",
      plan: "enterprise",
      chargesEnabled: true,
      detailsSubmitted: true,
      timezone: "Europe/London",
      stripeCustomerId: "cus_654321Example",
      authenticated: "2024-08-10T11:00:00Z",
      mode: "live",
      scheduledDeletion: null,
      onboarded: "2024-08-01T12:00:00Z",
      updated: "2024-08-10T09:00:00Z",
      created: "2024-08-01T10:00:00Z",
    },
  },
];
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-cndl-light to-cndl-primary-50">
      <Navigation />
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
