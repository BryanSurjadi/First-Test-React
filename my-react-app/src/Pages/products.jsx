import { Fragment } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/counter";

const products = [
  {
    id: 1,
    title: "Poles Mobil Suvarna Sutera",
    price: "Rp. 399.000",
    image: "/images/baru.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
    quas, unde aut nulla reiciendis alias consequatur dolores est laborum
    quia, repudiandae magni, eum repellat animi totam. Tempora, animi
    ullam!`,
  },

  {
    id: 2,
    title: "Poles Mobil Alam Nur",
    price: "Rp. 599.000",
    image: "/images/baru.png",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
    accusamus provident deserunt`,
  },
  {
    id: 3,
    title: "Poles Mobil Mak Loh",
    price: "Rp. 199.000",
    image: "/images/baru.png",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus Maklo nigga cok 
    accusamus provident deserunt`,
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductPage = () => {
  return (
    <Fragment>
      <div className="flex justify-end h-14 bg-blue-600 text-white items-center px-10">
        Hello {email}
        <Button classname="ml-5 bg-black text-white" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header img={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center w-100">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductPage;
