import Cards from "@/components/Cards";
import Sidebar from "@/components/Sidebar";
import Breadcrum from "@/components/Breadcrum";
import Tabs from "@/components/Tab";

interface Product {
  id?: string,
  name: string,
  description: string,
  price: number,
  stock_quantity: number,
  image_url: string,
  category_id: string,
  created_at?: string,
  updated_at?: string,
  seller: string,
}

let products: Product[] = [];

try {
  const response = await fetch("http://localhost:8000/shop", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
      console.error("HTTP error:", response);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  products = await response.json(); // Parse the JSON response
} catch (error) {
  console.error("Failed to fetch products:", error);
}

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
              {products.map((product: Product) => (
                <Cards
                  key={product.id}
                  image={product.image_url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7B6UYAB-PIIrwvPBVkUTlu2diWnhLOVLOw&s'}
                  title={product.name}
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