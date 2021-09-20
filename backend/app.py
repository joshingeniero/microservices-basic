import os
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify({'info': 'Hello from Kubernetes!'})


@app.route('/info')
def info():
    return jsonify({'info': 'Kubernetes is great!'})


@app.route('/maker')
def maker():
    return jsonify({'info': 'The cake is NOT a lie!'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5002', debug=True)
