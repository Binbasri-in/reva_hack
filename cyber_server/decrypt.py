from flask import Blueprint, request, jsonify
import requests
from PIL import Image
import re

decrypt = Blueprint("decrypt", __name__)

@decrypt.route("/decrypt/image", methods=['POST'])
def decrypt_img():
    url = request.json['url']

    def decode_image(url):
        response = requests.get(url, stream=True)
        response.raise_for_status()

        image = Image.open(response.raw)
        pixels = list(image.getdata())

        binary_text = ''
        for pixel in pixels:
            red = pixel[0]
            green = pixel[1]
            blue = pixel[2]

            # Extract the least significant bit from each color channel
            binary_text += str(red & 1)
            binary_text += str(green & 1)
            binary_text += str(blue & 1)

        text = ''
        for i in range(0, len(binary_text), 8):
            byte = binary_text[i:i+8]
            text += chr(int(byte, 2))

        return text

    # Decode the message from the encoded image
    decoded_text = decode_image(url)
    letters = re.findall('[a-zA-Z]', decoded_text)
    extracted_text = ''.join(letters)
    return jsonify({'decoded_text': extracted_text})
