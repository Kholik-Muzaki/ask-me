import React, { useState } from "react";
import { getGrogChatCompletion } from "../auth/groq";

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
        <div className="container-fluid   bg-dark text-white vh-100 d-flex flex-column">
            <header className="py-3 border-bottom border-secondary">
                <h1 className="text-center text-primary">Chat With AI</h1>
            </header>
            <div className="flex-grow-1 d-flex flex-column justify-content-between p-4">
                <div
                    className="bg-secondary p-3 rounded mb-3 text-white overflow-auto"
                    style={{ height: "300px", maxHeight: "300px", whiteSpace: "pre-wrap" }}
                >
                    {response || (
                        <p className="text-muted">
                            <em>No response yet. Ask me something!</em>
                        </p>
                    )}
                </div>

                <div>
                    <textarea
                        className="form-control bg-dark text-white border-secondary mb-3"
                        placeholder="Enter your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows={3}
                    ></textarea>
                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className="btn btn-primary w-100"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
