# Techblog

**Description**

The Tech Blog is a website where developers can publish their own blog posts and comment on others' posts. The application follows the MVC paradigm and uses Handlebars.js for templating, Sequelize as the ORM, and the express-session npm package for authentication.

**Installation**

Clone the repo

Use npm install to install dependecies.
npm install

Log into MySQL.
psql -U postgres 
Enter password.

Source the schema.
source db/schema.sql

Quit postgres and seed the database.
\i node seeds

Start the server.
npm start

**Usage**

Once the server is started, visit localhost:3001. Users can sign up and log in. After logging in, they will see two new options in the navigation bar. The dashboard allows them to create new posts, view their previous posts (which they can edit or delete), or select logout. Users can also view other users' posts by clicking on the title or comments. On these pages, they can see all comments for the post and leave their own. To return to the homepage, users can click on 'Tech POST'.

Homepage:

<img width="932" alt="image" src="https://github.com/arunmishra11/Techblog/assets/156019606/b9b5b43f-515c-4afd-a55f-963cf9e011e0">

Login after sign up:
<img width="353" alt="image" src="https://github.com/arunmishra11/Techblog/assets/156019606/ab655a6b-7274-494a-98a1-54822f03f344">

Once login:

<img width="389" alt="image" src="https://github.com/arunmishra11/Techblog/assets/156019606/42716038-ff70-4fba-ad2c-b046fc5c0e25">

<img width="501" alt="image" src="https://github.com/arunmishra11/Techblog/assets/156019606/de3b11c9-327d-4cbf-bdcf-8af03ea6f79d">







