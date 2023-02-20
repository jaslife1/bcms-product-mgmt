# BCMS Product Management

This contains the product management front-end.

# System application versions
Node version: 18.14.1 (Hydrogen)
React-Router version: 6.8.1

# Running the front end

    yarn start

# Running the relay-compiler

When processing the GraphQL query so that they will be compiled, we run the relay compiler as below.

    yarn run relay

Note though that __relay__ is part of the scripts that is added in our __package.json__

# Updating the Node version
## Check Node version
    node --version

## Check the NVM version
    nvm ls-remote

This will list all the available version and what is installed and currently used by the system
## Install version
    nvm install <version>
## Change version
    nvm use <version>

# UI Framework
Uses Material UI from https://mui.com/


# Reference

Currently used reference for relay: https://www.howtographql.com/react-relay/0-introduction/
