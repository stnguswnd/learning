import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

import { ai } from "../utils/genai";

// chat 객체 불러오기
import { chat } from "../utils/genai";

// 응답 제어 파라미터 불러오기
import { config } from "../utils/genai";

export default function StreamChat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState(() => {
    // localStorage에서 채팅 기록 불러오기
    const stored = localStorage.getItem("streamChatMessages");
    return stored ? JSON.parse(stored) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  // 채팅 기록을 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("streamChatMessages", JSON.stringify(messages));
  }, [messages]);

  // 메모 저장 함수
  function saveMemoToLocalStorage(memoData) {
    try {
      // 기존 메모들 불러오기
      const existingMemos = JSON.parse(localStorage.getItem("memos") || "[]");
      
      // 새 메모 객체 생성
      const newMemo = {
        id: Date.now().toString(), // 고유 ID
        title: memoData.content,
        content: memoData.content,
        dueDate: memoData.dueDate || null,
        isCompleted: false,
        createdAt: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식
      };
      
      // 새 메모 추가
      const updatedMemos = [...existingMemos, newMemo];
      
      // localStorage에 저장
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
      
      console.log("메모가 저장되었습니다:", newMemo);
      return true;
    } catch (error) {
      console.error("메모 저장 중 오류:", error);
      return false;
    }
  }

  async function generateAiContent(currentPrompt) {
    try {
      // AI 응답 생성
      const stream = await chat.sendMessageStream({
        message: currentPrompt,
      });

      // 스트림 응답을 위한 빈 AI 메시지 먼저 추가
      setMessages((prev) => [...prev, { role: "ai", content: "" }]);

      // 청크 누적용 문자열 변수
      let accumulatedResponse = "";

      for await (const chunk of stream) {
        // 스트림 청크 누적
        accumulatedResponse += chunk.text || "";

        // 메시지 상태 변경(함수형 업데이트)
        // prev 매개변수 : 이전 상태 데이터
        setMessages((prev) => {
          // newMessages : 새로운 배열 생성(복사)
          const newMessages = [...prev];

          // lastMessage : 마지막 메시지 메모리 주소 참조
          const lastMessage = newMessages[newMessages.length - 1];

          // AI 메시지인 경우 누적된 청크로 마지막 메세지 변경
          if (lastMessage["role"] === "ai") {
            lastMessage.content = accumulatedResponse;
          }

          // 마지막 메세지만 변경된 새로운 배열 반환
          return newMessages;
        });
      }

      // 스트림 완료 후 JSON 파싱 및 메모 저장
      try {
        const aiResponse = JSON.parse(accumulatedResponse);
        
        // isMemo가 true이고 content가 있는 경우에만 메모 저장
        if (aiResponse.isMemo && aiResponse.content) {
          const saved = saveMemoToLocalStorage(aiResponse);
          if (saved) {
            // 메모 저장 성공 메시지 추가
            setMessages((prev) => [
              ...prev,
              { 
                role: "system", 
                content: "✅ 메모가 저장되었습니다! 메모 목록에서 확인할 수 있습니다." 
              }
            ]);
          }
        }
      } catch (parseError) {
        console.log("AI 응답이 JSON 형식이 아니거나 메모가 아닙니다:", parseError);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading === true || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    // currentPrompt 변수
    const currentPrompt = prompt;
    // 상태 prompt 초기화
    setPrompt("");
    setIsLoading(true);
    await generateAiContent(currentPrompt);
    setIsLoading(false);
  }

  return (
    <>
      <MessageList messages={messages} />

      <ChatForm
        prompt={prompt}
        setPrompt={setPrompt}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </>
  );
}
