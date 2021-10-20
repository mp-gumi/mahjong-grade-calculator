import TopBonus from "components/TopBonus";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";

function Top(): JSX.Element {
  const { register, watch } = useForm();
  const { firstPoint, lastBorderPoint } = watch();

  return (
    <div className={styles.wrapper}>
      <TopBonus
        register={register}
        firstPoint="firstPoint"
        firstPointValue={firstPoint}
        lastBorderPoint="lastBorderPoint"
        lastBorderPointValue={lastBorderPoint}
      />
    </div>
  );
}

export default Top;
