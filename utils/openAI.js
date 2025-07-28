import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const token = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";




export async function openAIRequest(prompt, options = {}) {
    const client = ModelClient(
        endpoint,
        new AzureKeyCredential(token),
    );
    const overWritePrompt = `You are a helpful AI assistant. User asked for movie suggestions. He said - "${prompt}". 
        If the user asked other things without movies, respond exactly like this: 
        "Error: I am not allowed to answer such questions. I only help with movie suggestions." 
        If the user asked for movie suggestions, please suggest 10 movies in order from most recommended to low recommended like this: 
        "Movie 1, Movie 2, Movie 3, Movie 4, Movie 5...".`;
    const body = {
        model,
        messages: [{ role: "user", content: overWritePrompt }],
        ...options,
    };

    const response = await client.path("/chat/completions").post({ body });


    return response.body;
}