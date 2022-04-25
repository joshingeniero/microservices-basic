import os, json
from flask import Flask, jsonify

app = Flask(__name__)


def load_database(key='root'):
    with open('database.json') as json_file:
        data = json.load(json_file)['data']
    return data[key]


@app.route('/root')
def hello_world():
    return jsonify({'info': load_database('root')})


@app.route('/info')
def info():
    return jsonify({'info': load_database('info')})


@app.route('/cake')
def maker():
    return jsonify({'info': load_database('maker')})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5002', debug=True)
