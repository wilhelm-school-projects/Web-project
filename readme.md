# functionality:
A website to handle the monitoring of embankment pumps at the field of the
farmer (this part is not done yet, is part of my bachelor thesis). Its main
purpose is to display if a given pump is active or not, show current water
level, and the history of this in the form of graphs. As this may be a rather
static webapp, e.g., a settings page will be added to be able to change
parameters. Also users have to sign in using oauth. This will be developed with
the assumption that the user browse this app on his/her phone most of the time.

1. (almost) real-time Graphs displaying data collected at the embankment pumps
   (mock data has to be made)
1. websockets to update the graphs 
1. settings (name, profile icon, age, etc.)
1. Sign in / log-out
1. add / delete monitoring of a pump

# tech stack:

Use https to communicate with server

## Front-end 
Svelte, Typescript, Oauth 2.0, Boostrap

## Back-end 
Expressjs (Typescript if possible), mysql

## Dev tools
nodemon(?), Vite(?)
