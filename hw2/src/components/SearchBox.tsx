import { useState } from "react";

interface SearchBoxProps {
  onSubmit: (name: string) => void;
}

export function SearchBox({ onSubmit }: SearchBoxProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="flex w-full max-w-md">
        <input
          className="flex-1 rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter student's name or ID"
        />
        <button
          className="rounded-r-md bg-black text-white px-4 py-2 hover:bg-blue-900 transition"
          onClick={handleSubmit}
        >
          Find
        </button>
      </div>
    </div>
  );
}
