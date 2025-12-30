
import { GoogleGenAI } from "@google/genai";

// Service to generate a project summary using the Gemini 3 Flash model
export async function getProjectSummary(context: string) {
  try {
    // Instantiate GoogleGenAI inside the function to always use the latest API key from the environment
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `다음 프로젝트 완료 보고 내용을 바탕으로 3줄 요약을 작성해줘: ${context}`,
      config: {
        systemInstruction: "당신은 전문적인 비즈니스 분석가입니다. 한국어로 정중하고 명확하게 답변하세요.",
      }
    });
    // Access the .text property directly as per the latest SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "요약을 불러오는 데 실패했습니다.";
  }
}
