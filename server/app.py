from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
    return {
        "oh": "dang"
    }

@app.route('/hello', methods=['GET'])
def index():
    return {
        "Hello": "World!"
    }

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')