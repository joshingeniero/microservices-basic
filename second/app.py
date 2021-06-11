from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)


@app.route('/')
def intro():
    url = "http://backend-service:6002/"
    response = requests.get(url)
    info = response.json()["info"]
    return render_template('index.html', data=info, title='Hello!')


@app.route('/info')
def info():
    url = "http://backend-service:6002/info"
    response = requests.get(url)
    return response.json()["info"]


@app.route('/cake')
def cake():
    url = "http://backend-service:6002/maker"
    response = requests.get(url)
    info = response.json()["info"]
    return render_template('index.html', data=info, title='Basic Microservice')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001', debug=True)
