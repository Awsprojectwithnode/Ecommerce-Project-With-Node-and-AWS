"use client";

import React, { useState, useEffect } from "react";

type MenuItem = {
  id: number;
  name: string;
  content: string;
};

export default function Page() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null | any>(
    null
  );

  const [isMobile, setIsMobile] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 1, name: "Menu 1", content: "Content for Menu 1" },
    { id: 2, name: "Menu 2", content: "Content for Menu 2" },
    { id: 3, name: "Menu 3", content: "Content for Menu 3" },
  ];

  const handleMenuItemClick = (item: MenuItem) => {
    setSelectedMenuItem(item);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex flex-col h-screen `}>
      <div className="flex flex-1">
        {/* Side Menu */}
        {isMobile && selectedMenuItem === null && (
          <div
            className={`flex flex-col w-full bg-orange-300 dark:bg-lemon-600 text-gray-900 dark:text-white`}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`p-4 cursor-pointer ${
                  selectedMenuItem?.id === item.id
                    ? "bg-gray-300 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => handleMenuItemClick(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        {selectedMenuItem !== null && isMobile && (
          <div
            className={`flex flex-col flex-grow p-8 ml-0 bg-orange-100 dark:bg-lemon-100 text-gray-900 dark:text-white`}
          >
            <button
              className="mb-4 px-4 py-2 text-sm bg-gray-300 dark:bg-gray-700"
              onClick={() => setSelectedMenuItem(null)}
            >
              Back
            </button>
            <h2 className="text-xl">{selectedMenuItem.content}</h2>
          </div>
        )}

        {/* Side Menu and Main Content */}
        {!isMobile && (
          <>
            <div
              className={`flex flex-col w-1/4 bg-orange-300 dark:bg-lemon-600 text-gray-900 dark:text-white`}
            >
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 cursor-pointer ${
                    selectedMenuItem?.id === item.id
                      ? "bg-gray-300 dark:bg-gray-700"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col flex-grow p-8 ml-4 bg-orange-100 dark:bg-lemon-100 text-gray-900 dark:text-white `}
            >
              {selectedMenuItem ? (
                <>
                  <h2 className="text-xl">{selectedMenuItem.content}</h2>
                </>
              ) : (
                <h2 className="text-xl">Select a menu item</h2>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
