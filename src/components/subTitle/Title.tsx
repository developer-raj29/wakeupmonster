import React from "react";

interface type {
  text: string;
}

const Title = ({ text }: type) => {
  return <span className="highlight">{text}</span>;
};

export default Title;
