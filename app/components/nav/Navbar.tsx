"use client";

import React, { useState } from "react";
import { megaMenuData, topMenu } from "./ItemList";
import Container from "@/app/Container";
import TopMenu from "./topmenu/TopMenu";

// 메가메뉴 컴포넌트
const MegaMenu = () => {
  // 현재 호버된 메뉴 인덱스 상태 관리
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  return (
    <>
      <TopMenu />
        
      <div className="w-full border-b-[1px]">
        <Container>
          <div 
            className="
              flex 
              justify-between
              items-center
              w-full 
              mx-auto 
              relative
              transition
            ">
            <div className="flex items-center">LOGO</div>
            {/* 메가메뉴 항목들을 순회하며 메뉴와 서브메뉴를 렌더링 */}
            {megaMenuData.map((megaMenuItem, index) => (
              <div 
                key={index} 
                className="text-center" 
                onMouseEnter={() => setHoveredMenu(index)} 
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* 메뉴 타이틀 */}
                <div className="
                  cursor-pointer 
                  font-semibold 
                  hover:border-b-blue-600 
                  hover:border-b-[2px] 
                  py-5 
                  transition
                ">
                  {megaMenuItem.title}
                </div>
                {/* 서브메뉴 */}
                {hoveredMenu === index && (
                  <div 
                    className="
                      absolute 
                      left-0 
                      flex 
                      flex-row 
                      h-[100px] 
                      gap-10 
                      bg-white 
                      w-full 
                      p-5 
                      shadow-md
                      z-10
                  ">
                    <div 
                      className="
                        border-r-2 
                        w-3/12 
                        flex 
                        justify-center 
                        items-center 
                        text-2xl
                    ">
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
            <div className="flex py-3 px-5 text-sm bg-neutral-200 rounded-full gap-3">
              <span>로그인</span>
              <span>|</span>
              <span>회원가입</span>
            </div>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default MegaMenu;
