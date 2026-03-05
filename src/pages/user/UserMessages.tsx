

import { useState } from "react";
import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";
import { Send } from "lucide-react";

export default function UserMessages() {
  const conversations = [
    { id: 1, name: "Priya Verma", avatar: "/profile2.PNG" },
    { id: 2, name: "Sneha Pillai", avatar: "/profile3.PNG" },
    { id: 3, name: "Meera Iyer", avatar: "/profile4.PNG" },
  ];

  const [activeChat, setActiveChat] = useState(conversations[0]);

  const [messages, setMessages] = useState([
    { from: "Priya Verma", text: "Hello 👋" },
    { from: "Me", text: "Hi, nice to meet you!" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "Me", text: input }]);
    setInput("");
  };

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen pt-[90px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6]">

        <div className="max-w-7xl mx-auto flex h-[80vh] bg-white shadow-xl rounded-3xl overflow-hidden">

          {/* LEFT CHAT LIST */}
          <div className="w-72 border-r border-gray-100">

            <div className="p-4 font-semibold text-red-700 border-b">
              Conversations
            </div>

            {conversations.map((user) => (
              <div
                key={user.id}
                onClick={() => setActiveChat(user)}
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-red-50 ${
                  activeChat.id === user.id ? "bg-red-50" : ""
                }`}
              >
                <img
                  src={user.avatar}
                  className="w-10 h-10 rounded-full object-cover"
                  alt={user.name}
                />

                <span className="font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT CHAT WINDOW */}
          <div className="flex-1 flex flex-col">

            {/* CHAT HEADER */}
            <div className="flex items-center gap-3 p-4 border-b">
              <img
                src={activeChat.avatar}
                className="w-10 h-10 rounded-full"
                alt={activeChat.name}
              />
              <h2 className="font-semibold">{activeChat.name}</h2>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-6 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-xs px-4 py-2 rounded-xl ${
                    msg.from === "Me"
                      ? "bg-red-600 text-white ml-auto"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="flex gap-3 p-4 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2 outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-red-600 text-white p-2 rounded-xl"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}