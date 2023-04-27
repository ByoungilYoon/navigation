import { IconType } from "react-icons";
import { CiAlarmOn, CiApple, CiBaseball, CiBrightnessDown, CiCloudOn } from "react-icons/ci";

// 메뉴 항목 타입 정의
type MenuItem = {
  title: string;
};

// 메가메뉴 항목 타입 정의
type MegaMenuItem = {
  icon: IconType,
  title: string;
  menuItems: MenuItem[];
};

export const megaMenuData: MegaMenuItem[] = [
  {
    icon: CiAlarmOn,
    title: "메뉴1",
    menuItems: [
      {
        title: "서브메뉴1",
      },
      {
        title: "서브메뉴2",
      },
      {
        title: "서브메뉴3",
      },
      {
        title: "서브메뉴4",
      },
    ],
  },
  {
    icon: CiBaseball,
    title: "메뉴2",
    menuItems: [
      {
        title: "서브메뉴3",
      },
      {
        title: "서브메뉴4",
      },
    ],
  },
  {
    icon: CiApple,
    title: "메뉴3",
    menuItems: [
      {
        title: "서브메뉴5",
      },
      {
        title: "서브메뉴6",
      },
    ],
  },
  {
    icon: CiBrightnessDown,
    title: "메뉴4",
    menuItems: [
      {
        title: "서브메뉴7",
      },
      {
        title: "서브메뉴8",
      },
    ],
  },
  {
    icon: CiCloudOn,
    title: "메뉴5",
    menuItems: [
      {
        title: "서브메뉴9",
      },
      {
        title: "서브메뉴0",
      },
    ],
  },
];