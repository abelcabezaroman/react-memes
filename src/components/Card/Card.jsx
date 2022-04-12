import { useContext, useRef } from "react";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import "./Card.scss";
import domtoimage from "dom-to-image";

export default function Card({ data }) {
  const { memeTexts } = useContext(MemeTextsContext);
  const memeRef = useRef();

  const downloadMeme = () => {
    domtoimage
      .toJpeg(memeRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <>
      <div ref={memeRef} className="c-card">
        <h2 style={{left: memeTexts.topTextX + "%", top: memeTexts.topTextY + "%"}} className="c-card__top-text">
          {memeTexts.topText.replace(/ /g, "\u00a0")}
        </h2>
        <img
          data-testid={"card--img-" + data.id}
          src={data.url}
          alt={memeTexts.name}
        />
        <h2 style={{left: memeTexts.bottomTextX + "%", bottom: memeTexts.bottomTextY + "%"}} className="c-card__bottom-text">
          {memeTexts.bottomText.replace(/ /g, "\u00a0")}
        </h2>
      </div>
      <button
        data-testid={"card--button-" + data.id}
        className="mb-3"
        onClick={downloadMeme}
      >
        Download
      </button>
    </>
  );
}
