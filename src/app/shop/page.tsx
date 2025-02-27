import Cards from "@/components/Cards";

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
    <div className="grid grid-cols-3 gap-4 p-4 space-y-2">
      {products.map((product) => (
        <Cards
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Catalogue;