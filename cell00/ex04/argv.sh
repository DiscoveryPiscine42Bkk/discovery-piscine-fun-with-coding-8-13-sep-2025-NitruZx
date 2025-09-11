#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

for i in 1 2 3; do
    if [ $i -le $# ]; then
        echo "${!i}"
    fi
done
