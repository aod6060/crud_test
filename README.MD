# Derf's Simple Node Web Template


This is a simple template that will help me develop node web applications alot faster. If you want to use it go for it. 


To initialize this template and grab all of its depends just run.

Windows:

Just open the command line and run initialize.bat file.
```
initialize.bat
```

Linux:

Just open the terminal and run.
```
chmod u+x initialize.sh
./initialize.sh
```

These script files will automatically install npm dependencies and create the example.db for the template. If you want to do it manually just open either command line/power shell under windows or terminal under linux and run these commands

```
npm install
sqlite3 example.db ".save example.db"
```

Make sure both npm, sqlite3, and node are installed on your system if you decided to use this template for a web project.

After all of this initialize just simple run...
node backend.js

```
node backend.js
```

This should run the application on localhost using port 3000 or simple goto
http://localhost:3000 if running.