import "../sass/Circle.scss";

interface Props {
  input: number | string;
}

const Circle = ({ input }: Props) => {
  const result =
    typeof input === "number" ? (
      <button className="btn">{input}</button>
    ) : (
      <div className="starContainer">
        <img src={input} alt="star" />
      </div>
    );

  return result;
};

export default Circle;
