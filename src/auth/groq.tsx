import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

export interface ChatCompletionChoice {
    message: {
        content: string | null;
    };
}

export interface ChatCompletion {
    choices: ChatCompletionChoice[];
}

export async function getGrogChatCompletion(userInput: string): Promise<string> {
    try {
        const response: ChatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: userInput,
                },
            ],
            model: "llama3-70b-8192",
        });

        const content = response.choices[0]?.message?.content;
        return content ?? "No response received.";
    } catch (error) {
        console.error("Error fetching chat completion:", error);
        throw new Error("Failed to fetch response from Groq AI.");
    }
}
