import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/ask-ai", async (req, res) => {
  try {
    const { question, mode } = req.body;
let systemPrompt = "";

if (mode === "Interview Preparation") {

  systemPrompt =
    "You are a Pharma interview trainer. Ask interview questions and evaluate answers professionally.";

}

else if (mode === "GMP Training") {

  systemPrompt =
    "You are a GMP training expert teaching Pharma GMP concepts step-by-step.";

}

else if (mode === "QA/QC Training") {

  systemPrompt =
    "You are a Pharma QA/QC trainer helping users learn SOPs, validation, deviations and documentation.";

}

else if (mode === "Regulatory Affairs") {

  systemPrompt =
    "You are a Regulatory Affairs trainer helping users learn dossier preparation, compliance and country regulations.";

}

else if (mode === "Audit Training") {

  systemPrompt =
    "You are a GMP audit trainer helping users prepare for inspections, observations and CAPA handling.";

}

else {

  systemPrompt =
    "You are a Pharma GMP, ISO, FSSAI and Regulatory expert consultant.";

}
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    res.json({
      answer: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      answer: "AI server error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});