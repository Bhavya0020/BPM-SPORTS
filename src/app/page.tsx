import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import FeaturedCards from "@/components/FeaturedCards";
import CategoryBar from "@/components/CategoryBar";

export default function Home() {
  const featuredCards = [
    {
      image: "https://contents.mediadecathlon.com/p1616997/k$ab912ba2b630f7a1401c9b51b75e84c3/rockrider-st-540-mountain-bike-27-5-rockrider-8549411.jpg?f=1024x0&format=auto",
      title: "$650.00",
      description: "Rockrider ST 540 Mountain Bike 27.5",
      tags: ["Cycle", "Mountain Bike"],
      isNew: true,
    },
    {
      image: "https://contents.mediadecathlon.com/p2808230/k$a149d9d7f5c9e12a2f073ea82b19d7bf/outdoor-matters-3-person-tent-outdoor-matters-8961658.jpg?f=1024x0&format=auto",
      title: "$30.00",
      description: "Outdoor Matters 3 Person Tent",
      tags: ["Camping", "Tent"],
    },
    {
      image: "https://contents.mediadecathlon.com/p2606789/k$128eff5651eed541dfcf3a2f920acd8d/kids-roller-skates-quad-100-holographic-white-oxelo-8520182.jpg?f=1024x0&format=auto",
      title: "$75.00",
      description: "Kids' Roller Skates Quad 100 - Holographic White",
      tags: ["Skating", "Roller Skates"],
    },
  ];

  return (
    <div>
      <Carousel />
      <Container>
      <h2 className="text-3xl text-primary font-bold text-left ">Shop Trending Collections</h2>
      <CategoryBar />
        <h2 className="text-3xl text-primary font-bold text-left">Trending Products</h2>
        <FeaturedCards cards={featuredCards} /> {/* Pass the array of cards */}
      </Container>
    </div>
  );
}