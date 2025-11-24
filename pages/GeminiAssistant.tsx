import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { getToyRecommendation } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'สวัสดีครับ! ผมคือผู้ช่วย AI ของ GVGlent วันนี้คุณอยากเช่าของเล่นแนวไหน? บอกอารมณ์ของคุณหรือสิ่งที่สนใจได้เลยครับ'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    // Add User Message
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Call Gemini Service
    const aiResponseText = await getToyRecommendation(userText);
    
    const aiMsg: ChatMessage = { 
      id: (Date.now() + 1).toString(), 
      role: 'model', 
      text: aiResponseText 
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center gap-2 sticky top-0 z-10">
        <div className="p-2 bg-gradient-to-tr from-primary to-secondary rounded-lg text-white">
          <Sparkles size={20} />
        </div>
        <div>
          <h1 className="font-bold text-gray-800">AI ผู้ช่วยเลือกของเล่น</h1>
          <p className="text-[10px] text-green-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            ออนไลน์ (Gemini Powered)
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
            }`}>
              {msg.role === 'model' && (
                <div className="flex items-center gap-1 mb-1 text-xs text-primary font-bold">
                  <Bot size={12} />
                  GVGlent AI
                </div>
              )}
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ถามได้เลย เช่น อยากได้ของสะสมแนวฮีโร่..."
            className="flex-1 bg-transparent border-none text-sm focus:ring-0 focus:outline-none py-1"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-2 rounded-full ${input.trim() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;