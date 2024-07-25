import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>&copy;2021 Лаборатория интернет</span>
    </footer>
  );
};

export default Footer;
