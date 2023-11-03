from flask import Blueprint, request, jsonify, Flask
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

vulnerabilities = vulnerabilities_by_id = {
    1: "Directory Traversal Vulnerability",
    2: "SQL Injection Vulnerability",
    3: "Cross-Site Scripting (XSS) Vulnerability",
    4: "Command Injection Vulnerability",
    5: "Remote File Inclusion Vulnerability",
    6: "Server-Side Request Forgery (SSRF) Vulnerability",
    7: "Unvalidated Redirect Vulnerability",
    8: "Cross-Site Request Forgery (CSRF) Vulnerability",
    9: "Remote Code Execution (RCE) Vulnerability",
    10: "Cross-Site Script Inclusion (XSSI) Vulnerability",
    11: "File Upload Vulnerability",
    12: "Insecure Direct Object Reference (IDOR) Vulnerability",
    13: "XML External Entity (XXE) Vulnerability",
    14: "Server-Side Template Injection (SSTI) Vulnerability",
    15: "Remote Code Inclusion (RCI) Vulnerability",
    16: "Server-Side Template Injection (SSTI) Vulnerability (for specific templating engines)",
    17: "Insecure Deserialization Vulnerability",
    18: "Server-Side Request Forgery (SSRF) via DNS rebinding Vulnerability",
    19: "Clickjacking Vulnerability",
    20: "Security Misconfiguration Vulnerability",
    21: "Cross-Site Scripting (XSS) via DOM-based Vulnerability",
    22: "Open Redirect Vulnerability",
    23: "Cross-Origin Resource Sharing (CORS) Misconfiguration",
    24: "HTTP Header Injection Vulnerability",
    25: "Cross-Site Script Inclusion (XSSI) via JSON Vulnerability",
    26: "Content Security Policy (CSP) Bypass Vulnerability",
    27: "Insecure Cross-Origin Resource Sharing (CORS) Configuration",
    28: "HTTP Parameter Pollution Vulnerability",
    29: "Server-Side Request Forgery (SSRF) via File Upload Vulnerability",
    30: "Insufficient Transport Layer Protection Vulnerability"
}





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

@chatbot.route("/chatbot/<int:vul_id> ", method=["POST"])
def template_prompt(vul_id):
    template_prompt = [
        {
            "role": "system",
            "content": "you are a cyber security expert who understands bits and bytes of cyber security"
        },
        {
            "role": "user",
            "content": "generate a step-by-step guide to fix the following vulnerability after explaining it first: {0}"
        }
    ]
    messages = template_prompt[1]["content"].format(vulnerabilities[vul_id])

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k-0613",
        messages=messages,
        temperature=1,
        max_tokens=1000,
        top_p=1,
        frequency_penalty=0.3,
        presence_penalty=0
    )

    print(response.choices[0].message['content'])
    return jsonify({"response": response.choices[0].message['content']})
