# Tic Tac Toe

Click [here](https://tic-tac-toe-001-app.herokuapp.com/) to try it now.

> _If the site does not load on first attempt then either refresh the page or try again to access the link. It is because the site with low traffic on Heroku is pulled down to save server usage_

To try it locally enter the following commands in the command line -

> Make sure your system has Node.js installed

```sh
cd <any_directory>
git clone https://github.com/qUB3r-001/Tic-Tac-Toe-Game.git
cd Tic-Tac-Toe-
npm install
npm run
```

## About

The classic game of Tic-Tac-Toe made with React using hooks.

- Made using React.js Hooks implementation.
- Used MUI: React Components library and Bootstrap v5.0 for all components and styling.
- All animations are done using SCSS only.

![ss-1](./screenshots/SS1.jpg)

#### Player vs Player

• Player starting is randomly assigned either X or O.

#### Player vs Bot

• Bot always moves first because else the game would always result in a draw.
• Bot uses Minimax to calculate the best possible move by running through all possible games and maximizing its winning %.

GLHF ;)
