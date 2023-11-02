from flask import Blueprint, request, jsonify
from PIL import Image
import requests
from io import BytesIO
import cloudinary
import cloudinary.uploader

encript = Blueprint("encipt", __name__)

cloudinary.config(
    cloud_name="kreventapp",
    api_key="444496543866224",
    api_secret="tcSh1UfPuTvb0ll4JB3XRwdJdXI"
)

@encript.route("/post/image/text/data", methods=['POST'])
def encipt_image():
    img_uri = request.json['url']
    hiddenText = request.json['hiddenText']

    def text_to_binary(text):
        binary = ''.join(format(ord(char), '08b') for char in text)
        return binary
    def encode_image(image, binary_text):
        image = image.convert("RGB")  # Convert image to RGB mode
        pixels = list(image.getdata())
        width, height = image.size

        if len(binary_text) > len(pixels) * 3:
            raise ValueError("Text is too long to be encoded in the image.")

        # Calculate the required padding length
        padding_length = (len(pixels) * 3) - len(binary_text)
        # Add padding to binary_text
        binary_text += "0" * padding_length

        encoded_pixels = []
        index = 0
        for pixel in pixels:
            if index < len(binary_text):
                red, green, blue = pixel

                # Encode 1 bit of the text in the least significant bit of each color channel
                red = (red & 0xFE) | int(binary_text[index])
                green = (green & 0xFE) | int(binary_text[index + 1])
                blue = (blue & 0xFE) | int(binary_text[index + 2])

                encoded_pixels.append((red, green, blue))
                index += 3
            else:
                encoded_pixels.append(pixel)

        encoded_image = Image.new(image.mode, image.size)
        encoded_image.putdata(encoded_pixels)

        return encoded_image
    # Prompt for image URL and text to hide
    image_url = img_uri
    text = hiddenText

    # Download the image from the URL
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))

    # Convert the text to binary
    binary_text = text_to_binary(text)

    # Encode the text in the image
    encoded_image = encode_image(image, binary_text)

    # Save the encoded image
    encoded_image.save("encoded_image.png")
    
    cloudinary_response = cloudinary.uploader.upload("encoded_image.png")

    # Get the uploaded image URI
    image_uri = cloudinary_response['secure_url']

    return jsonify(image_uri=image_uri), 200
