import { useState } from "react";

export default function IosToggle() {
  const [on, setOn] = useState(false);

  return (
    <div
      onClick={() => setOn(!on)}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
        on ? "bg-yellow-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          on ? "translate-x-4" : ""
        }`}
      ></div>
    </div>
  );
}
