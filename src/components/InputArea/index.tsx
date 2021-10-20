import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./style.module.css";

export type InputAreaProps = {
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  type: string;
};

function InputArea({ name, placeholder, register, type }: InputAreaProps) {
  return (
    <form className={styles.wrapper}>
      <input {...register(name)} placeholder={placeholder} type={type} />
    </form>
  );
}

export default InputArea;
