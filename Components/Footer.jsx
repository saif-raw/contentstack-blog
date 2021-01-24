import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaQuora,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer(props) {
  let footer = props.footer[0][0];
  // console.log(props.footer);

  return (
    <div className={styles.bg}>
      <img
        className={styles.companyof}
        src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blte814c52ab7983cb7/5ed94783ff1cb239b9500ed0/logo@3x.svg"
      />{" "}
      Product
      <div className={styles.linkDiv}>
        {footer.footerlink.map((link) => {
          return (
            <Link href={link.href} key={link.title}>
              <p className={styles.footerLinks}>{link.title}</p>
            </Link>
          );
        })}
      </div>
      <div className={styles.socialDiv}>
        <FaFacebook className={styles.socialicon} />
        <FaInstagram className={styles.socialicon} />
        <FaGithub className={styles.socialicon} />
        <FaYoutube className={styles.socialicon} />
        <FaQuora className={styles.socialicon} />
      </div>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>{footer.copyright}</p>
      </div>
    </div>
  );
}
