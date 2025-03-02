import Cards from "@/components/Cards";
import Sidebar from "@/components/Sidebar";
import Breadcrum from "@/components/Breadcrum";
import Tabs from "@/components/Tab";
// Sample data array
const products = [
  {
    id: 1,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Running Shoes",
    description: "Lightweight and comfortable for long runs.",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61pE5ebU4bL._AC_UF1000,1000_QL80_.jpg",
    title: "Basketball",
    description: "Official size and weight for professional play.",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71b5fW+s18L.jpg",
    title: "Yoga Mat",
    description: "Eco-friendly and non-slip surface.",
  },
  {
    id: 4,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Dumbbells",
    description: "Adjustable weights for home workouts.",
  },
  {
    id: 5,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Cycling Helmet",
    description: "Lightweight and aerodynamic design.",
  },
  {
    id: 6,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Tennis Racket",
    description: "Perfect for beginners and pros alike.",
  },
  {
    id: 7,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Gym Bag",
    description: "Spacious and durable for all your gear.",
  },
  {
    id: 8,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Jump Rope",
    description: "Adjustable length for all heights.",
  },
  {
    id: 9,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Soccer Cleats",
    description: "Designed for optimal grip on the field.",
  },
  {
    id: 10,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Water Bottle",
    description: "Insulated to keep drinks cold for hours.",
  },
  {
    id: 11,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Fitness Tracker",
    description: "Track your steps, heart rate, and more.",
  },
  {
    id: 12,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Boxing Gloves",
    description: "Protective and comfortable for training.",
  },
  {
    id: 13,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Resistance Bands",
    description: "Perfect for strength training on the go.",
  },
  {
    id: 14,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Swim Goggles",
    description: "Anti-fog and UV protection.",
  },
  {
    id: 15,
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Baseball Glove",
    description: "Premium leather for a perfect fit.",
  },
  {
    id: 16,
    image: "https://img.daisyui.com/images/stock/photo-1632353283671-01f0e4c1d92e.webp",
    title: "Hiking Boots",
    description: "Waterproof and durable for all terrains.",
  },
];

const Catalogue = () => {
  return (
    <>
      <Sidebar>
      {/* <Container> */}
      <div className="p-3">
        <Breadcrum />
        <p className="py-3">
          The all new Samsung Galaxy Buds Pro earphones will be launching on Jan 28th. Grab the best deal with Flipkart offers.
        </p>
        <p className="py-3">
          Also check: Skullcandy Wireless, Skullcandy Smokin Buds 2, JBL Headset, Jabra Headphones, Samsung Level U, Sony Extra Base Headphones
        </p>
          <p className="text-xl font-bold">
            Headset
            <span className="text-base text-gray-400 font-normal pl-2">(Showing 1 – 40 products of 13,261 products)</span>
          </p>
          <Tabs />
            <div className="grid grid-cols-3 gap-2 py-6 space-y-2">
              {products.map((product) => (
                <Cards
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))}
          </div>
        </div>
      {/* </Container> */}
      </Sidebar>
    </>
  );
};

export default Catalogue;