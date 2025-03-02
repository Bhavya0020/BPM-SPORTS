import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import FeaturedCards from "@/components/FeaturedCards";

export default function Home() {
  const featuredCards = [
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card 1",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts.",
      tags: ["Fashion", "Products"],
      isNew: true,
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card 2",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts.",
      tags: ["Electronics", "Gadgets"],
    },
    {
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Card 3",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts.",
      tags: ["Home", "Decor"],
    },
  ];

  return (
    <div>
      <Carousel />
      <Container>
        <h1 className="text-3xl text-primary font-bold text-center p-3">Featured Products</h1>
        <FeaturedCards cards={featuredCards} /> {/* Pass the array of cards */}
      </Container>
    </div>
  );
}