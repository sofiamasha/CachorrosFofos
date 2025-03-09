from flask import Flask, jsonify
import requests

app = Flask(_name_)

@app.route('/api/dogs', methods=['GET'])
def get_dog_photos():
    response = requests.get('https://dog.ceo/api/breeds/image/random/6')
    data = response.json()
    return jsonify(data)

if _name_ == "_main_":
    app.run(debug=True)