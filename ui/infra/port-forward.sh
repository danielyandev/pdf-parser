#!/bin/sh

kubectl port-forward deployment/pdf-parser-ui 3000:80 &