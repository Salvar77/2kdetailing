import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";
import Logo2KAutodetailing from "../../assets/images/2k-logo-black-biale-tlo.svg";

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <Image
        src={Logo2KAutodetailing}
        alt="Logo 2K Auto Detailing Opole"
        width={100}
        height={70}
      />
    </Link>
  </div>
);

export default Logo;
