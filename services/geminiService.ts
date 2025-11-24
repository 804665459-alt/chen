import { GoogleGenAI } from "@google/genai";

// Ensure API Key exists (In a real app, this is handled via env vars securely)
const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const getToyRecommendation = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "ขออภัย ระบบ AI ยังไม่พร้อมใช้งานในขณะนี้ (Missing API Key)";
  }

  try {
    const systemInstruction = `
      You are a helpful assistant for "GVGlent", a toy rental shop in Thailand. 
      Your goal is to recommend toys, collectibles, or cosplay props based on user mood or query.
      The available categories are: Paper Models, Game Merch, Movie Merch, Art Toys, Doll Clothes, Trading Cards.
      
      Reply in Thai language. Keep the tone fun, friendly, and enthusiastic (Thai: สนุกสนาน, เป็นกันเอง).
      Keep the response short (under 300 characters if possible).
      If the user asks about something we don't have, politely suggest a similar category.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 300,
      }
    });

    return response.text || "ขออภัย ฉันไม่สามารถตอบคำถามนี้ได้ในขณะนี้";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI";
  }
};