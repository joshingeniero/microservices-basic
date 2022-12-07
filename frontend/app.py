#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Copyright (c) 2022 Cisco and/or its affiliates.
This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at
               https://developer.cisco.com/docs/licenses
All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by pytthe License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.
"""


__author__ = "Josh Ingeniero <jingenie@cisco.com>"
__copyright__ = "Copyright (c) 2022 Cisco and/or its affiliates."
__license__ = "Cisco Sample Code License, Version 1.1"


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
