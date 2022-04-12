import { render, screen } from "@testing-library/react";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import Gallery from "./Gallery";

const galleryData = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
  },
  {
    id: "181913650",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
  },
];

const memeTexts = {
  topText: "Soy un titulo",
  bottomText: "Que desgraciaito",
};
describe("Render", () => {
  test("img", () => {
    render(
      <MemeTextsContext.Provider value={{ memeTexts }}>
        <Gallery list={galleryData} />
      </MemeTextsContext.Provider>
    );

    const imgElement = screen.getByTestId("card--img-" + galleryData[0].id);

    expect(imgElement).toHaveAttribute("src", galleryData[0].url);
  });
});
