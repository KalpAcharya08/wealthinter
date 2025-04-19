import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotResponse = async (userMessage) => {
    try {
      const res = await fetch("http://localhost:8080/api/ai-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      return data.reply || "Sorry, I couldn't understand.";
    } catch (error) {
      return `❌ Error: ${error.message}`;
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const botReplyText = await getBotResponse(input);
    const botResponse = { text: botReplyText, sender: "bot" };
    setMessages((prev) => [...prev, botResponse]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>AI Stock Chatbot</div>
      <div style={styles.messagesContainer}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#ececec",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for stock like AAPL, IBM..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    height: "600px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    padding: "15px",
    background: "#007bff",
    color: "#fff",
    textAlign: "center",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  messagesContainer: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
    background: "#f9f9f9",
  },
  message: {
    maxWidth: "70%",
    padding: "10px 15px",
    margin: "5px 0",
    borderRadius: "15px",
    fontSize: "14px",
    wordWrap: "break-word",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderTop: "1px solid #ccc",
    background: "#fff",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px 15px",
    fontSize: "14px",
    color: "#fff",
    background: "#007bff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default Chatbot;
