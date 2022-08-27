import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import http from "../../services/httpService";
import { API } from "../../config";
import Layout from "./Layout";
import ProductCard from "./ProductCard";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);

  const soldProducts = async () => {
    try {
      const { data } = await http.get(
        `${API}/product/?sortBy=sold&order=asc&limit=3`
      );
      //   console.log(data);
      setProductsBySell({ productsBySell: data });
      //   console.log(productsBySell);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    soldProducts();
  }, []);

  const example = () => {
    if (productsBySell.length !== 0 && typeof productsBySell === "object") {
      productsBySell.map((p, i) => <ProductCard key={i} product={p} />);
    } else {
      return;
    }
  };

  return (
    <React.Fragment>
      <Menu />
      <Layout
        title="Book Shop"
        description="E-Commerce App for web development courses and books."
        className="container-fluid"
      >
        <h2>Products By Sell</h2>
        {/* {example()} */}

        {console.log(productsBySell)}
        {/* {productsBySell.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))} */}
      </Layout>
    </React.Fragment>
  );
};

export default Home;
