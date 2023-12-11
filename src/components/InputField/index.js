"use client";

import { useState } from "react";

const InputField = ({ placeholder, handleTranslate }) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = async () => {
    setLoading(true);
    handleTranslate("loading");
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
      handleTranslate("Translation failed");
    } finally {
      setLoading(false);
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
        className={`rounded-md px-6 py-2 font-semibold text-white transition ${
          loading ? 'bg-blue-400 text-slate-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={loading}
      >
        {loading ? 'Translating...' : 'Translate'}
      </button>
    </>
  );
};

export default InputField;
