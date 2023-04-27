"use client";

import React, { useState } from "react";
import { megaMenuData, topMenu } from "./ItemList";
import Container from "@/app/Container";

// 메가메뉴 컴포넌트
const MegaMenu = () => {
  // 현재 호버된 메뉴 인덱스 상태 관리
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <>
      <div className="w-full border-b-[1px] py-2">
        <Container>
          <div className="flex gap-8 justify-end text-xs font-semibold">
            {topMenu.map((menu, index) => (
              <span key={index} className="cursor-pointer hover:underline">{menu.title}</span>
            ))}
          </div>
        </Container>
      </div>
        
      <div className="w-full border-b-[1px]">
        <Container>
          <div 
            className="
              flex 
              justify-between
              w-full 
              mx-auto 
              relative
            ">
            <div className="flex items-center w-3/12">LOGO</div>
            {/* 메가메뉴 항목들을 순회하며 메뉴와 서브메뉴를 렌더링 */}
            {megaMenuData.map((megaMenuItem, index) => (
              <div key={index} className="text-center" onMouseEnter={() => setHoveredMenu(index)} onMouseLeave={() => setHoveredMenu(null)}>
                {/* 메뉴 타이틀 */}
                <div className="cursor-pointer font-semibold hover:text-blue-500 py-5">{megaMenuItem.title}</div>
                {/* 서브메뉴 */}
                {hoveredMenu === index && (
                  <div className="absolute left-0 flex flex-row h-[100px] gap-10 bg-white w-full p-5 shadow-md">
                    <div className="border-r-2 w-3/12 flex justify-center items-center text-2xl">
                      {megaMenuItem.title}
                    </div>
                    {/* 서브메뉴 항목들을 순회하며 렌더링 */}
                    {megaMenuItem.menuItems.map((menuItem, subIndex) => (
                      <div key={subIndex} className="flex flex-row items-center">
                        {/* 서브메뉴 타이틀 */}
                        <div className="cursor-pointer hover:underline">{menuItem.title}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default MegaMenu;
