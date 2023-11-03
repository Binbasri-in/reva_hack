from flask import Blueprint, request, jsonify, Flask
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

vulnerabilities = {
    "key": "value"
}

template_prompt = [
    {
        "role": "system",
        "content": "you are a cyber security expert who answers questions from students, don't be boring"
    },
    {
        "role": "user",
        "content": "generate a step-by-step guide to fix the following vulnerability: {0}"
    }
]


chatbot = Blueprint("chatbot", __name__)

@chatbot.route("/chatbot/ask/", method=["POST"])
def ask_openai():
    data = request.get_json()
    question = data["question"]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k-0613",
        messages=[
            {
                "role": "system",
                "content": "you are a cyber security expert who answers questions from students, don't be boring"
            },
            {
                "role": "user",
                "content": question
            }
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0.3,
        presence_penalty=0
    )

    print(response.choices[0].message)
    return jsonify({"response": response.choices[0].message})
