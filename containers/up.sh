#!/bin/bash

docker build \
  -f ./backend/Dockerfile \
  -t bnj-backend \
  ../backend/.

docker compose down

docker compose up -d

