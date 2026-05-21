import { useState } from "react";

export default function PharmaBot() {

  const [mode, setMode] = useState("General AI Consultant");

  return (

    <div
      style={{
        padding: "40px",
        background: "#334155",
        borderRadius: "20px",
      }}
    >

      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
      AI COMPLIANCE ASSISTANT
      </h1>

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          background: "white",
          color: "black",
          marginBottom: "20px",
        }}
      >

        <option>General AI Consultant</option>

        <option>GMP Training</option>

        <option>QA/QC Training</option>

        <option>Interview Preparation</option>

      </select>

      <textarea
        placeholder="Ask your question..."
        style={{
          width: "100%",
          height: "150px",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "16px",
        }}
      />

    </div>
  );
}