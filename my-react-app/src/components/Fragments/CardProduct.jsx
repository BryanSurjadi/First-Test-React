import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="border-gray-700 w-full max-w-sm bg-gray-800 rounded-lg shadow mx-2  flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { img } = props;
  return (
    <a href="#">
      <img src={img} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-l font-semibold tracking-light text-white">
          {title}
        </h5>
        <p className="text-m text-white ">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600 ">Order Now</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
