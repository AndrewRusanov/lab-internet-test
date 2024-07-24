import { useEffect, useState } from "react";
import classNames from "classnames";

import logo from "assets/images/logoHeader.svg";

import { navBarList } from "data/constants";

import styles from "./Header.module.css";

const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= 960) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const handleTabClick = () => {
    setIsActive((prev) => !prev);
  };

  const activeTabStyle = classNames({
    [styles.menuItem]: !isActive,
    [styles.menuItemActive]: isActive,
  });

  const headerStyle = classNames({
    [styles.header]: !headerScrolled,
    [styles.headerScrolled]: headerScrolled,
  });

  return (
    <header className={headerStyle}>
      <img src={logo} alt="Логотип проекта" className={styles.logo} />
      <nav>
        <ul className={styles.menu}>
          {navBarList.map((item, index) => (
            <li key={index} className={activeTabStyle} onClick={handleTabClick}>
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
