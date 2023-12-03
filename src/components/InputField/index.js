"use client";

const InputField = ({placeholder}) => {
    return (
        <>
        <textarea className="w-full h-48 p-6 rounded-md resize-none border border-slate-300" placeholder={placeholder} />
        <button className="bg-blue-500 py-2 px-6 rounded-md text-white font-semibold hover:bg-blue-600 transition ease-in-out">Translate</button>
        </>
    );
}

export default InputField;