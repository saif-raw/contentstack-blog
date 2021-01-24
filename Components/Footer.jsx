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
    <div>
      {/* {footer.link.map ((link) => {
                    return (
                        <Link href={link.href}>
                        <a>{link.link}</a>
                        </Link>
                    )
                })} */}

      <p>{footer.company}</p>

      <div>
        {footer.footerlink.map((link) => {
          return (
            <Link href={link.href} key={link.title}>
              <a>{link.title}</a>
            </Link>
          );
        })}
      </div>
      <div>
        <FaFacebook className={styles.socialicon} />
        <FaInstagram className={styles.socialicon} />
        <FaGithub className={styles.socialicon} />
        <FaYoutube className={styles.socialicon} />
        <FaQuora className={styles.socialicon} />
      </div>

      <div>
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
}
