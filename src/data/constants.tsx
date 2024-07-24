import { howItWorksItem } from "types/howItWorksTypes";
import Icon from "UI/Icon";

export const navBarList = [
  { text: "Как это работает" },
  { text: "3-й блок" },
  { text: "Вопросы и ответы" },
  { text: "Форма" },
];

export const HowItWorksList: howItWorksItem[] = [
  {
    icon: <Icon.Waiting />,
    title: "Прочитай задание внимательно",
    description: "Думаю у тебя это не займет больше двух-трех минут",
  },
  {
    icon: <Icon.DeliveryTruck />,
    title: "Изучи весь макет заранее",
    description:
      "Подумай как это будет работать на разных разрешениях  и при скролле",
  },
  {
    icon: <Icon.Secure />,
    title: "Сделай хорошо",
    description: "Чтобы мы могли тебе доверить подобные задачи в будущем",
  },
  {
    icon: <Icon.MoneyBags />,
    title: "Получи предложение",
    description:
      "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
  },
];
