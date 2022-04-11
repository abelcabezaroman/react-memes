import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";

export default function Form() {
  const { register, watch } = useForm();
  const {setMemeTexts} = useContext(MemeTextsContext);

  const onChange = (e) => {
    setMemeTexts({...watch(), [e.target.name]: e.target.value});
  };


  return (
    <form>
      <label>
        Top text
        <input type="text" {...register("topText")} onInput={onChange} />
      </label>
      <label>
        Bottom text
        <input type="text" {...register("bottomText")} onInput={onChange} />
      </label>
    </form>
  );
}
