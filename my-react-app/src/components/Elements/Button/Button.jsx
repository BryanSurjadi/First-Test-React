import React from "react";
const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-black hover:bg-fuchsia-600`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
