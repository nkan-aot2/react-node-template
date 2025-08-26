#!/bin/bash

# Bring down any previously running containers
docker-compose down

# Build images
echo 'Building images...'
docker-compose build --no-cache

# pause

echo 'Complete'


# Bring up new containers (silently)
docker-compose up -d postgres_db

sleep 10

docker-compose up -d api