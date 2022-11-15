import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../components/Form/Form";
import Gallery from "../../components/Gallery/Gallery";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";

export default function HomePage() {
  const [memes, setMemes] = useState([]);
  const [memeTexts, setMemeTexts] = useState({ topText: "", bottomText: "" });

  useEffect(() => {
    const getMemes = async () => {
      const resData = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(resData.data.data.memes);
    };

    getMemes();
  }, []);

  return (
    <div>
      <MemeTextsContext.Provider value={{ memeTexts, setMemeTexts }}>
        <div>
          <div style={{ width: "200px" }}>
            <Form />
          </div>
          <div className="px-2" style={{ boxSizing: "border-box",marginLeft: "200px",width: "calc(100% - 200px)" }}>
            <Gallery list={memes} />
          </div>
        </div>
      </MemeTextsContext.Provider>
    </div>
  );
}
