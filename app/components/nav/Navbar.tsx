"use client";

import React, { useState } from "react";
import IconBox from "./IconBox";
import { megaMenuData } from "./ItemList";

// 메가메뉴 컴포넌트
const MegaMenu = () => {
  // 현재 호버된 메뉴 인덱스 상태 관리
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  // 현재 호버된 서브메뉴 인덱스 상태 관리
  const [hoveredSubMenu, setHoveredSubMenu] = useState<number | null>(null);

  return (
    <div className="flex flex-row justify-between p-3 w-[960px] mx-auto relative">
      {/* 메가메뉴 항목들을 순회하며 메뉴와 서브메뉴를 렌더링 */}
      {megaMenuData.map((megaMenuItem, index) => (
        <div key={index} className="w-full py-3 text-center" onMouseEnter={() => setHoveredMenu(index)} onMouseLeave={() => setHoveredMenu(null)}>
          {/* 메뉴 타이틀 */}
          <div className="cursor-pointer hover:font-semibold hover:text-blue-500">{megaMenuItem.title}</div>
          {/* 서브메뉴 */}
          {hoveredMenu === index && (
            <div className="absolute left-0 flex flex-row h-[200px] gap-10 bg-white w-full p-5 shadow-sm">
              <div className="border-r-2 w-3/12 flex justify-center items-center">
                <IconBox 
                  icon={megaMenuItem.icon}
                  label={megaMenuItem.title}
                />
              </div>
              {/* 서브메뉴 항목들을 순회하며 렌더링 */}
              {megaMenuItem.menuItems.map((menuItem, subIndex) => (
                <div key={subIndex} className="mega-menu__sub-menu-item" onMouseEnter={() => setHoveredSubMenu(subIndex)} onMouseLeave={() => setHoveredSubMenu(null)}>
                  {/* 서브메뉴 타이틀 */}
                  <div className="cursor-pointer">{menuItem.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
