"use client";

import { useState } from "react";

const InputField = ({ placeholder, handleTranslate }) => {
  const [inputText, setInputText] = useState("");

  const handleInput = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/translate?text=${inputText}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // Handle error scenarios
        console.error("Translation failed:", response.statusText);
        return;
      }

      const data = await response.json();
      handleTranslate(data.translation); // Pass translated text to handleTranslate
      console.log(data.translation);
    } catch (err) {
      console.error("Translation failed:", err);
    }
  };

  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="h-48 w-full resize-none rounded-md border border-slate-300 p-6"
        placeholder={placeholder}
      />
      <button
        onClick={handleInput}
        className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white transition ease-in-out hover:bg-blue-600"
      >
        Translate
      </button>
    </>
  );
};

export default InputField;
