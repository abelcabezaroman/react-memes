import { useContext } from "react";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import "./Card.scss";

export default function Card({ data }) {
  const { memeTexts } = useContext(MemeTextsContext);

  return (
    <div className="c-card">
      <h2 className="c-card__top-text">{memeTexts.topText}</h2>
      <img src={data.url} alt="" />
      <h2 className="c-card__bottom-text">{memeTexts.bottomText}</h2>
    </div>
  );
}
