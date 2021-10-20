import InputArea from "components/InputArea";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./style.module.css";

export type ConditionsType = {
  register: UseFormRegister<FieldValues>;
  firstPoint: string;
  firstPointValue: number;
  lastBorderPoint: string;
  lastBorderPointValue: number;
};

function TopBonus({
  firstPoint,
  firstPointValue,
  lastBorderPoint,
  lastBorderPointValue,
  register,
}: ConditionsType) {
  return (
    <div className={styles.wrapper}>
      <InputArea
        name={firstPoint}
        placeholder="持ち点"
        register={register}
        type="number"
      />
      点持ち{"　"}
      <InputArea
        name={lastBorderPoint}
        placeholder="基準点"
        register={register}
        type="number"
      />
      点返し{"　"} (オカ：{(lastBorderPointValue - firstPointValue) * 4}
      点)
    </div>
  );
}

export default TopBonus;
