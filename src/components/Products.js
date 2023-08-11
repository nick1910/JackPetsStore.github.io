import React from "react";
import Product1 from "../assets/1.jpg";
import Product2 from "../assets/2.png";
import Product3 from "../assets/5.jpg";
import Product4 from "../assets/8.png";
import ProductData from "./ProductData";

const Products = () => {
  return (
    <>
      <div className="products">
        <h1>Our Products</h1>
        <p>Our store gives you the choice to pick anything you need for your pet.</p>
        <ProductData
          className="first-des"
          heading="Food Selection"
          text="JackPets store offers a wide range of tailored food products for all pets. From premium dog kibble and nutritious cat treats to vibrant bird seed mixes and specialized fish foods, they cater to diverse needs. Small animals enjoy fresh hays and fortified pellets, while reptiles and exotic pets find purpose-formulated diets. JackPets is a go-to destination, ensuring every pet receives the right nutrition in one convenient place."
          img1={Product1}
          img2={Product2}
        />

        <ProductData
          className="first-des-reverse"
          heading="Toys Selection"
          text="JackPets store offers a diverse range of pet toys to cater to various needs. Dogs can enjoy durable chew toys and interactive puzzles, while cats are entertained with feather wands and interactive lasers. Birds find swing sets and puzzles, small pets have tunnels and chew toys, and even reptiles have climbing structures. JackPets ensures that all pets, common or exotic, have access to toys that contribute to their happiness and enrichment."
          img1={Product3}
          img2={Product4}
        />
      </div>
    </>
  );
};

export default Products;
