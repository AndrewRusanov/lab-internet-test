import { useState } from "react";
import classNames from "classnames";

import logo from "../../../../../assets/images/logoHeader.svg";
import { navBarList } from "../../../../../data/constants";

import styles from "./Header.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleTabClick = () => {
    setIsActive((prev) => !prev);
  };

  const activeTabStyle = classNames({
    [styles.menuItem]: !isActive,
    [styles.menuItemActive]: isActive,
  });
  return (
    <header className={styles.header}>
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
