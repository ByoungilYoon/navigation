import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { CiAlarmOn, CiApple, CiBaseball, CiBrightnessDown, CiCloudOn } from "react-icons/ci";

// 메뉴 항목 타입 정의
type MenuItem = {
  title: string;
  link: string;
};

// 메가메뉴 항목 타입 정의
type MegaMenuItem = {
  icon: IconType,
  title: string;
  menuItems: MenuItem[];
};

export const topMenu = [
  {title: "TopMenu1"},
  {title: "TopMenu2"},
]

export const megaMenuData: MegaMenuItem[] = [
  {
    icon: CiAlarmOn,
    title: "메뉴1",
    menuItems: [
      {
        title: "서브메뉴1",
        link: "../page/welcom",
      },
      {
        title: "서브메뉴2",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴3",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴4",
        link: "../page/01.tsx",
      },
    ],
  },
  {
    icon: CiBaseball,
    title: "메뉴2",
    menuItems: [
      {
        title: "서브메뉴3",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴4",
        link: "../page/01.tsx",
      },
    ],
  },
  {
    icon: CiApple,
    title: "메뉴3",
    menuItems: [
      {
        title: "서브메뉴5",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴6",
        link: "../page/01.tsx",
      },
    ],
  },
  {
    icon: CiBrightnessDown,
    title: "메뉴4",
    menuItems: [
      {
        title: "서브메뉴7",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴8",
        link: "../page/01.tsx",
      },
    ],
  },
  {
    icon: CiCloudOn,
    title: "메뉴5",
    menuItems: [
      {
        title: "서브메뉴9",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴0",
        link: "../page/01.tsx",
      },
    ],
  },
  {
    icon: CiCloudOn,
    title: "메뉴6",
    menuItems: [
      {
        title: "서브메뉴9",
        link: "../page/01.tsx",
      },
      {
        title: "서브메뉴0",
        link: "../page/01.tsx",
      },
    ],
  },
];