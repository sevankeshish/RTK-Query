First you  need to install json-server ==> "npm i json-server".
Then , create a folder for example server and then " npm init --y " to create package.json.
Then ==>  "scripts": {
    "server": "json-server --p 3001 --watch db.json"
  },
  to creat a db.json
You need to open to terminal for localhost:3000 and localhost:3001.
for localhost:3001 you need to change your directory ==> cd server ==> npm run server
