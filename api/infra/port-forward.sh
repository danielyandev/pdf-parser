#!/bin/sh

kubectl port-forward deployment/pdf-parser-api 8000:8080 &