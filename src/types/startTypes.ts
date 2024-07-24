export type NavBarItem = {
  [key in navBarItems]: string;
};

export enum navBarItems {
  "HOW_IT_WORKS" = "Как это работает",
  "THIRD_BLOCK" = "3-й блок",
  "QA" = "Вопросы и ответы",
  "FORM" = "Форма",
}
