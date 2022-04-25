#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Copyright (c) 202 Cisco and/or its affiliates.
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
