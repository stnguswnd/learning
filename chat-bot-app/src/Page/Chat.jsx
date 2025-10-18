import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

import { ai } from "../utils/genai";
import { chat } from "../utils/genai";
import { config } from "../utils/genai";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 1️⃣ 페이지 로드 시 로컬 스토리지에서 메시지 불러오기
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // 2️⃣ 메시지가 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  async function generateAiContent(currentPrompt) {
    try {
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });
      console.log(response.data);

      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading === true || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
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
