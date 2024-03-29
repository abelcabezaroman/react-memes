import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MemeTextsContext } from "../../contexts/MemeTextsContext";
import "./Form.scss";
export default function Form() {
  const { register, watch } = useForm();
  const { setMemeTexts } = useContext(MemeTextsContext);

  const onChange = (e) => {
    setMemeTexts({ ...watch(), [e.target.name]: e.target.value });
  };

  return (
    <form className="c-form d-flex justify-content-center flex-column">
      <div className="d-flex flex-column align-items-start">
        <label>
          Top text
          <textarea type="text" {...register("topText")} onInput={onChange} />
        </label>

        <label>
          Top X
          <input type="number" {...register("topTextX")} onInput={onChange} />
        </label>
        <label>
          Top Y
          <input type="number" {...register("topTextY")} onInput={onChange} />
        </label>
      </div>
      <div className="mt-4 d-flex flex-column align-items-start">
        <label>
          Bottom text
          <textarea
            type="text"
            {...register("bottomText")}
            onInput={onChange}
          />
        </label>
        <label>
          Bottom X
          <input type="number" {...register("bottomTextX")} onInput={onChange} />
        </label>
        <label>
          Bottom Y
          <input type="number" {...register("bottomTextY")} onInput={onChange} />
        </label>
      </div>
    </form>
  );
}
