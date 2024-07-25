import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import successCircle from "assets/images/successCircle.svg";
import errorCircle from "assets/images/errorCircle.svg";

import "./Form.css";

type TForm = {
  name: string;
  phone: string;
};

const Form: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TForm>({
    mode: "onChange",
  });

  const submit: SubmitHandler<TForm> = (data) => {
    //TODO: Сделать отправку на почту
    console.log("Данные с формы", data);
    reset;
  };

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  //  TODO: Провести рефакторинг стилей и подхода к вёрстке. Проверить адаптив
  return (
    <section className="container">
      <h2 className="title">Отправь форму</h2>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <div
          className={`inputContainer ${errors.name ? "invalid" : ""} ${
            userName.length >= 2 && "valid"
          }`}
        >
          <input
            id="name"
            className="inputForm input"
            type="text"
            placeholder=" "
            {...register("name", {
              required: true,
              minLength: 2,
              onChange: (event) => {
                setUserName(event.target.value);
              },
            })}
          />
          <span className="invalidText">Ooops, Error 0_o!</span>
          <img
            src={successCircle}
            alt="Валидация пройдена"
            className="iconStatus iconValid"
          />
          <img
            src={errorCircle}
            alt="Ошибка в валидации"
            className="iconStatus invalidIcon"
          />
          <label className="placeholder">Имя</label>
        </div>

        <div
          className={`inputContainer ${errors.phone ? "invalid" : ""} ${
            userPhone.length >= 11 && "valid"
          }`}
        >
          <input
            id="phone"
            className="inputForm input"
            type="tel"
            placeholder=" "
            {...register("phone", {
              required: true,
              maxLength: 11,
              minLength: 11,
              onChange: (event) => {
                setUserPhone(event.target.value);
              },
            })}
          />
          <span className="invalidText">Ooops, Error 0_o!</span>
          <img
            src={successCircle}
            alt="Валидация пройдена"
            className="iconStatus iconValid"
          />
          <img
            src={errorCircle}
            alt="Ошибка в валидации"
            className="iconStatus invalidIcon"
          />
          <label className="placeholder">Телефон</label>
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxClick}
            className="checkboxInput"
          />
          <span className="checkmark"></span>
          <span className="checkboxLabel">Я соглашаюсь</span>
        </label>

        <button
          type="submit"
          disabled={
            !isChecked || userName.length < 2 || userPhone.length !== 11
          }
          className="button"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default Form;
