import { fireEvent, render, screen } from "@testing-library/react";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import Card from "./Card";

const cardData = {
  id: "181913649",
  name: "Drake Hotline Bling",
  url: "https://i.imgflip.com/30b1gx.jpg",
  width: 1200,
  height: 1200,
  box_count: 2,
};

const memeTexts = {
  topText: "Soy un titulo",
  bottomText: "Que desgraciaito",
};

describe("Render", () => {
  test("img", () => {
    render(
      <MemeTextsContext.Provider value={{ memeTexts }}>
        <Card data={cardData} />
      </MemeTextsContext.Provider>
    );
    const imgElement = screen.getByTestId("card--img-" + cardData.id);

    expect(imgElement).toHaveAttribute("src", cardData.url);
  });

  test("texts", () => {
    render(
      <MemeTextsContext.Provider value={{ memeTexts }}>
        <Card data={cardData} />
      </MemeTextsContext.Provider>
    );

    const topTextElement = screen.getByText(/Soy un titulo/i);
    const bottomTextElement = screen.getByText(/Que desgraciaito/i);

    expect(topTextElement).toBeInTheDocument();
    expect(bottomTextElement).toBeInTheDocument();
  });
});

// describe("Events", () => {
//   test("download", () => {
//     render(
//       <MemeTextsContext.Provider value={{ memeTexts }}>
//         <Card data={cardData} />
//       </MemeTextsContext.Provider>
//     );

//     const buttonElement = screen.getByTestId("card--button-" + cardData.id);

//     fireEvent.click(buttonElement);

//   });
// });
