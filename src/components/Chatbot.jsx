import { useState, useEffect, useRef } from "react";
import { OpenAI } from "openai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to Ritzy! How can we help you find the perfect pair of shoes today?",
      sender: "bot",
      timestamp: "8:34 AM",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatEnded, setChatEnded] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    const botResponse = {
      id: messages.length + 2,
      text: await chat(),
      sender: "bot",
      timestamp: getCurrentTime(),
    };
    console.log(botResponse);
    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
  };

  const startNewConversation = () => {
    setMessages([
      {
        id: 1,
        text: "Welcome to Ritzy! How can we help you find the perfect pair of shoes today?",
        sender: "bot",
        timestamp: getCurrentTime(),
      },
    ]);
    setChatEnded(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const openai = new OpenAI({
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });
  let embeddings = [];

  async function loadEmbeddings() {
    const res = await fetch("embeddings.json");
    embeddings = await res.json();
  }
  function cosineSimilarity(a, b) {
    let dot = 0,
      magA = 0,
      magB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      magA += a[i] ** 2;
      magB += b[i] ** 2;
    }
    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
  }

  const chat = async () => {
    const question = inputMessage.trim();
    if (!question) return;

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    });
    const questionEmbedding = embeddingRes.data[0].embedding;
    const scored = embeddings.map((e) => ({
      text: e.text,
      score: cosineSimilarity(e.embedding, questionEmbedding),
    }));

    const topChunks = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((e) => e.text)
      .join("\n\n");

    const chatRes = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You're a helpful chatbot answering based on website content.",
        },
        {
          role: "user",
          content: `Context:\n${topChunks}\n\nQuestion: ${question}`,
        },
      ],
    });

    console.log(chatRes.choices[0].message.content);

    return chatRes.choices[0].message.content;
  };

  useEffect(() => {
    loadEmbeddings();
  }, []);

  return (
    <>
      {/* Chat trigger button */}
      <div
        className="fixed bottom-6 right-6 z-[99999999999999999999999] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12H16M8 8H16M8 16H13M21 12C21 16.9706 16.9706 21 12 21C10.1666 21 8.49336 20.4518 7.13336 19.5334L3 21L4.46664 16.8666C3.54818 15.5066 3 13.8334 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Chatbot modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-[9999999999999999999999999]">
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900">
                  Ritzy Virtual Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.sender === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-black text-white rounded-br-md"
                          : "bg-white text-gray-900 rounded-bl-md border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-900 rounded-2xl rounded-bl-md border border-gray-200 px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {chatEnded && (
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm mb-4">
                    Chat ended due to inactivity
                  </p>
                  <button
                    onClick={startNewConversation}
                    className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
                  >
                    Start new conversation
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!chatEnded && (
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
