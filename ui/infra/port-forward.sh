#!/bin/sh

kubectl port-forward deployment/pdf-parser-ui "$1:80" &