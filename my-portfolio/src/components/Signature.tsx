import { FC } from "react";
import styles from "@/components/css/Signature.module.css";

const Signature: FC = () => {
  return (
    <div className={styles.signature}>
      <p className={styles.signatureText}>Ashwin Temkar</p>
    </div>
  );
};

export default Signature;
