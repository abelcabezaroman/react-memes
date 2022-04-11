import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../components/Form/Form";
import Gallery from "../../components/Gallery/Galley";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";

export default function HomePage() {
  const [memes, setMemes] = useState([]);
  const [memeTexts, setMemeTexts] = useState({})

  useEffect(() => {
    const getMemes = async () => {
      const resData = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(resData.data.data.memes);
    };

    getMemes();
  }, []);

  return (
    <div>
      <MemeTextsContext.Provider value={{memeTexts, setMemeTexts}}>
        <Form />
        <Gallery list={memes} />
      </MemeTextsContext.Provider>
    </div>
  );
}

