import { useEffect, useState } from "react";
import classNames from "classnames";

import logo from "assets/images/logoHeader.svg";
import logoMenu from "assets/images/logoMenu.svg";
import burgerMenu from "assets/images/burgerMenu.svg";
import crossBtn from "assets/images/crossBtn.svg";
import arrowRightMenu from "assets/images/arrowRightMenu.svg";

import { NavBarLinks } from "data/constants";
import { scrollToComponent } from "utils/scrollToComponent";

import styles from "./Header.module.css";

const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= 10) {
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const headerStyle = classNames({
    [styles.header]: !headerScrolled,
    [styles.headerScrolled]: headerScrolled,
  });

  return (
    <header className={headerStyle}>
      <img src={logo} alt="Логотип проекта" className={styles.logo} />
      <nav className={styles.desktopNavigation}>
        <ul className={styles.navigationList}>
          {NavBarLinks.map((item, index) => (
            <li
              key={index}
              className={styles.navigationItem}
              onClick={() => scrollToComponent(item.id, setIsMenuOpen)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.laptopNavigation}>
        <button
          type="button"
          className={styles.burgerButton}
          onClick={handleMenuClick}
        >
          <img src={burgerMenu} alt="Бургер-меню" />
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.menu}>
          <div className={styles.menuHead}>
            <img
              src={logoMenu}
              alt="Логотип проекта"
              className={styles.logoMenu}
            />
            <button
              type="button"
              className={styles.crossBtn}
              onClick={handleMenuClick}
            >
              <img src={crossBtn} alt="Закрыть меню" />
            </button>
          </div>
          <ul className={styles.menuList}>
            {NavBarLinks.map((item, index) => (
              <li
                key={index}
                className={styles.menuItem}
                onClick={() => scrollToComponent(item.id, setIsMenuOpen)}
              >
                <span className={styles.menuItemText}>{item.text}</span>
                <img src={arrowRightMenu} alt="Переход к разделу" />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
