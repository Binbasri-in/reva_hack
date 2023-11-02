from flask import Flask, request
from flask_cors import CORS
from vulnerability import vulnurabilities
from news import new
from encript import encript
from decrypt import decrypt

# from malicious import malicious_url
app=Flask(__name__)
CORS(app, supports_credentials=True)
app.register_blueprint(vulnurabilities)
app.register_blueprint(new)
app.register_blueprint(encript)
app.register_blueprint(decrypt)


if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(host='192.168.9.103',port=3000,debug=True)
