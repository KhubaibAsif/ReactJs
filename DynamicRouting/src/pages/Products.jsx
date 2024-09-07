import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("Fetching products...");
    const url =
      chosenCategory === "All"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${chosenCategory}`;

    axios
      .get(url)
      .then((res) => {
        console.log("Products fetched:", res.data);
        setProducts(res.data); // API returns an array of products
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [chosenCategory]);

  useEffect(() => {
    console.log("Fetching categories...");
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        console.log("Categories fetched:", res.data);
        setCategories(res.data); // API returns an array of categories
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-3xl">Loading....</h1>
      ) : (
        <div>
          <div className="flex gap-3 flex-wrap">
            <CategoryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{ slug: "All", name: "All" }}
            />
            {categories.map((category) => (
              <CategoryChip
                onClick={() => setChosenCategory(category)}
                isChosen={category === chosenCategory}
                category={category}
                key={category}
              />
            ))}
          </div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;