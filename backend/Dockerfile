#    Copyright (c) 2022 Cisco and/or its affiliates.
#    This software is licensed to you under the terms of the Cisco Sample
#    Code License, Version 1.1 (the "License"). You may obtain a copy of the
#    License at
#                   https://developer.cisco.com/docs/licenses
#    All use of the material herein must be in accordance with the terms of
#    the License. All rights not expressly granted by pytthe License are
#    reserved. Unless required by applicable law or agreed to separately in
#    writing, software distributed under the License is distributed on an "AS
#    IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
#    or implied.


FROM python:3.11.0a7-slim-bullseye

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r /app/requirements.txt
COPY . /app/

EXPOSE 5000
CMD ["python", "/app/app.py"]