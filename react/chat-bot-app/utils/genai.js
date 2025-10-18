import React from "react";

import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

const responseSchema = {
  type: "object",
  properties: {
    isMemo: {
      type: "boolean",
      description: " 할 일, 메모, 업무, 계획 등 관련 여부",
    },
    content: {
      type: "string",
      description: "할 일 내용(본문)",
    },
    dueData: {
      type: "string",
      description: "할 일 마감 기한(YYYY-MM-DD)",
    },
  },
  required: ["isMemo", "content", "dueDate"],
  additionalProperties: false,
};

/*
const config = {
  temperature: 1, // 창의성 수준(0~1)
  maxOutputTokens: 1000, //응답 최대 토큰 수(최대 8192)
  stopSquences: "\\n\\n",
  // 시스템 지침 속성
  systemInstruction: [
    "당신은 전문 IT 개발자입니다",
    "오로지 JavaScript 개발 개념에 대한 질문에만 답변해야합니다",
    "JavaScript 개발 개념 질문이 아니면 답변할수 없습니다 라고 해",
  ],
};
*/

const systemInstruction = [
  `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
  "당신은 할 일 관리 AI입니다. 오직 할 일이나 업무 관련 내용만 처리합니다.",
  "JSON 형식으로 응답합니다.",
  "할 일이 아닌 일반적인 대화, 인사, 질문은 무시하고, isMemo를 false로 설정합니다.",
  "사용자의 질문을 이해할 수 없는 경우에는 isMemo를 false로 설정합니다.",
  "응답할 때는 할 일 내용, 마감 날짜, 우선 순위, 할 일 종류를 포함한 객체를 생성합니다.",
];

const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
};

export { ai, chat, config, responseSchema };
