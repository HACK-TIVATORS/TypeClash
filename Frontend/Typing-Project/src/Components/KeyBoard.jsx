import React from "react";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["SPACE"],
];

const Keyboard = ({ pressedKey }) => {
  const getKeyStyle = (key) => {
    const isPressed =
      (key === "SPACE" && (pressedKey === " " || pressedKey === "Space")) ||
      (pressedKey && pressedKey.toUpperCase() === key);

    return isPressed
      ? "bg-purple-600 text-white"
      : "bg-gray-700 text-gray-300 hover:bg-gray-600";
  };

  return (
    <div className="mt-6 flex flex-col items-center space-y-2">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-2">
          {row.map((key) => (
            <button
              key={key}
              className={`${
                key === "SPACE"
                  ? "px-8 py-2 text-xs"
                  : "w-10 h-10 md:w-12 md:h-12 text-sm"
              } rounded font-medium transition-colors duration-100 ${getKeyStyle(
                key
              )}`}
            >
              {key === "SPACE" ? "SPACE" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
