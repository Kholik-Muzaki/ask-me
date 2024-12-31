import React, { useState } from "react";
import { getGrogChatCompletion } from "../auth/groq";
import "../styles/Chat.css";

const Chat: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSend = async () => {
        if (!input.trim()) {
            setResponse("Input cannot be empty.");
            return;
        }

        setLoading(true);
        try {
            const result = await getGrogChatCompletion(input);
            setResponse(result);
        } catch (error) {
            console.error("Error while fetching chat response:", error);
            setResponse("An error occurred while fetching the response.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1 className="chat-title">Chat With AI</h1>
            </header>

            <main className="chat-main">
                {/* Chat Response Area */}
                <div className="chat-response-box">
                    {response || (
                        <p className="chat-placeholder">
                            <em>No response yet. Ask me something!</em>
                        </p>
                    )}
                </div>

                {/* Chat Input Area */}
                <div className="chat-input-area">
                    <textarea
                        className="chat-textarea"
                        placeholder="Enter your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows={3}
                    ></textarea>
                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className="chat-send-button"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Chat;
