from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)


def get_data(key='root'):
    url = f"http://backend-service:6002/{key}"
    response = requests.get(url)
    info = response.json()['info']
    return info


@app.route('/')
def intro():
    info = get_data('root')
    return render_template('index.html', data=info, title='Hello!')


@app.route('/info')
def info():
    info = get_data('info')
    return render_template('index.html', data=info, title='Info')


@app.route('/cake')
def cake():
    info = get_data('cake')
    return render_template('index.html', data=info, title='Basic Microservice')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001', debug=True)
