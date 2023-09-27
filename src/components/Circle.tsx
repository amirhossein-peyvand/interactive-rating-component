import { useState } from "react";
import "../sass/Circle.scss";
import useStore from "../store";

interface Props {
  input: number | string;
}

const Circle = ({ input }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const increment = useStore((s) => s.increment);

  const result =
    typeof input === "number" ? (
      <button
        className="btn"
        onClick={() => {
          if (!disabled) increment();
          setDisabled(true);
        }}
      >
        {input}
      </button>
    ) : (
      <div className="starContainer">
        <img src={input} alt="star" />
      </div>
    );

  return result;
};

export default Circle;
