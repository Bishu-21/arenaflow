import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { scenario } = await req.json();

    const prompt = `You are a sophisticated AI for ArenaFlow, predicting real-time stadium crowd movements and perimeter shifting.
Current Scenario: ${scenario}

Provide a concise 2-sentence tactical recommendation for crowd rerouting, focusing on spatial telemetry and fluid routing.`;

    const response = await ai.models.generateContent({
      model: "gemma-4-31b-it", // As requested
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    return NextResponse.json({ prediction: response.text });
  } catch (error) {
    console.error("AI Prediction Error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI predictive model." },
      { status: 500 }
    );
  }
}
