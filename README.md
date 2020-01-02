# Ready Set Jet

## Run it

Please review base readme for instructions for the docker set up

## 

## About File Structure

The app is structured as such:

App.js acts as a switch between pages depending on route

Each page under /src/routes renders the three 'section' components with page specific props, found in /src/sections and /src/components respectively.

/src/adapters contains functions for interacting with the backend.