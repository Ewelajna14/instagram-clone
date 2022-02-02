# Phase 3 Project - Instagram Clone 
This project was created based on popular Instagram application. 
It is a very simple app where you can see really nice photos, comment other's posts, change and delete your comments. 
## Setup
1. Clone the repo: https://github.com/Ewelajna14/phase-3-project
2. Navigate to **phase-3-react folder** (a React frontend)
3. Install NPM packages: `npm install`
4. Run app: `npm start`
5. Navigate to **phase-3-sinatra-project** (a Sinatra backend)
7. Follow the instruction in terminal
- run `bundle install` to install the gems
- run `bundle exec rake db:migrate db:seed`
8. Run server `bundle exec rake server`
This will run your server on port (http://localhost:9292)
## Routes
-You can see information about posts by accessing route 
(http://localhost:9292/posts)

-To see information about comments for particular post
(http://localhost:9292/posts/1/comments)

to see different post, just replace number with post's id
