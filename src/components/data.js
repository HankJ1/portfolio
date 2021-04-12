
const allProjects = [
    {
        title: "Memory Game (React)",
        category: "React, Games, Notable",
        description: "Interactive Pop-Culture Memory Game",
        points: ["React-powered app that implements props, state, and hooks", "Goal is to click each image only once per level",
         "Implements higher-order-components and lifecycle methods",
        "Hosted by GitHub Pages"],
        img_url: "images/memory-game.png",
        remote_url: "https://hankj1.github.io/memory-game/",
        repository_url: "https://github.com/HankJ1/memory-game"
    },
    {
        title: "Inventory Application (Node)",
        category: "Node, Notable",
        description: "Inventory application with backend and medieval theme.",
        points: ["Powered by Express, MongoDB, and Mongoose (Backend)", "Authenticated users may alter database by using password (sugar)",
            "Implements CRUD method and MVC architecture", "Implements EJS for view templates", "Hosted by Heroku"],
        img_url: "images/node-inventory.png",
        remote_url: "https://still-bastion-47897.herokuapp.com/",
        repository_url: "https://github.com/HankJ1/node-db-inventory"
    },
    {
        title: "Shopping Cart (React)",
        category: "Node, Notable",
        description: "Shopping Catalogue",
        points: ["React powered app implementing routes and hooks", "Allows users to add items to, and view, cart",
         "Simulates a true online shopping experience",
            "Hosted by GitHub pages"],
        img_url: "images/shopping-cart.png",
        remote_url: "https://hankj1.github.io/shopping-cart/",
        repository_url: "https://github.com/HankJ1/node-db-inventory"
    },
    {
        title: "To-do List (JS)",
        category: "Notable",
        description: "Robust To-do List",
        points: ["Janilla JS app that implements a modular coding architecture", "Complex one-page application w/ commmunication between several different modules", 
        "Maintains data across sessions with local storage", "Hosted by GitHub Pages"],
        img_url: "images/todo-list.png",
        remote_url: "https://hankj1.github.io/todo-list/",
        repository_url: "https://github.com/HankJ1/todo-list"
    },
    {
        title: "Weather App (JS)",
        category: "Notable",
        description: "Welcome to the Weather",
        points: ["Implements asynchronous JavaScript with AJAX to display data from Open Weather API",
            "Presents background images appropriate for the current weather of your search",
            "Weather information for over 200,000 cities", "Hosted by GH Pages"],
        img_url: "images/weather.png",
        remote_url: "https://hankj1.github.io/hanks-weather/",
        repository_url: "https://github.com/HankJ1/hanks-weather"
    },
    {
        title: "CV Builder (React)",
        category: "React, Notable",
        description: "Resume Creator",
        points: ["Utilizes React class components", "Allows users to craft a professional-looking resume", 
            "Hosted by GH Pages"],
        img_url: "images/cv-builder.png",
        remote_url: "https://hankj1.github.io/cv-builder/",
        repository_url: "https://github.com/HankJ1/cv-builder"
    },
    {
        title: "Tic Tac Toe (JS)",
        category: "Games",
        description: "Tic-Tac-Toe",
        points: ["Play classic Tic-tac-toe against an unbeatable AI", "Also allows users to play against a friend",
        "Utilizes modulare JS architecture", "Minimal global code", "Hosted by GH Pages"],
        img_url: "images/tic-tac-toe.png",
        remote_url: "https://hankj1.github.io/tic-tac-toe/",
        repository_url: "https://github.com/HankJ1/tic-tac-toe"
    },
    {
        title: "Restaurant Page (JS)",
        category: "Notable",
        description: "Local Restaurant", 
        points: ["Single page website simulating a multi-page exerience with pure DOM manipulation",
        "Inspiration taken from a past employer", "Hosted by GH Pages"],
        img_url: "images/restaurant.png",
        remote_url: "https://hankj1.github.io/restaurant/",
        repository_url: "https://github.com/HankJ1/restaurant"
    },
    {
        title: "Etch-a-Sketch (JS)",
        category: "Games, Notable",
        description: "da Vinci Etch-a-Sketch",
        points: ["Reacreation of the classic game, wherever your mouse goes, ink goes", "Vanilla JS with DOM manipulation techniques",
        "Remember, da Vinci is watching to make something remarkable", "Hosted with GH Pages"],
        img_url: "images/davinci.png",
        remote_url: "https://hankj1.github.io/etch-a-sketch/",
        repository_url: "https://github.com/HankJ1/etch-a-sketch"
    },
    {
        title: "Calculator (JS)",
        category: "Notable",
        description: "Basic Calculator",
        points: ["Fully functional, albeit elementary calculator", "Utilizes modular JavaScript", "Hosted by GH Pages"],
        img_url: "images/calculator.png",
        remote_url: "https://hankj1.github.io/calculator",
        repository_url: "https://github.com/HankJ1/calculator"
    },
    {
        title: "Message Board (Node)",
        category: "Node",
        description: "Message Board",
        points: ["Miniature app that allows users to post messages to a public board", 
        "Implements basic HTTP requests", "Hosted by Heroku"],
        img_url: "images/message-board.png",
        remote_url: "https://enigmatic-everglades-76318.herokuapp.com/",
        repository_url: "https://github.com/HankJ1/node-message-board"
    }, 
]

const skills = {
    Front_End: [
        {title: "html5", url: "images/icons/frontend/html5.png"},
        {title: "css3", url: "images/icons/frontend/css3.png"},
        {title: "javascript", url: "images/icons/frontend/javascript.png"},
        {title: "bootstrap", url: "images/icons/frontend/bootstrap.png"},
        {title: "sass", url: "images/icons/frontend/sass.png"},
        {title: "pug", url: "images/icons/frontend/pug.png"},
        {title: "ejs", url: "images/icons/frontend/ejs.png"},
        {title: "react", url: "images/icons/frontend/react.png"},
        {title: "redux", url: "images/icons/frontend/redux.png"},
        {title: "next", url: "images/icons/frontend/next.png"}
    ],
    Back_End: [
        {title: "ndode.js", url: "images/icons/backend/nodejs.png"},
        {title: "express", url: "images/icons/backend/express.png"},
        {title: "mongoose", url: "images/icons/backend/mongoose.png"},
        {title: "mongodb", url: "images/icons/backend/mongodb.png"},
        {title: "passport", url: "images/icons/backend/passportjs.png"},
        {title: "firebase", url: "images/icons/backend/firebase.png"},
        {title: "cloudinary", url: "images/icons/backend/cloudinary.png"},
    ],
    Languages: [
        {title: "python", url: "images/icons/languages/python.png"},
        {title: "java", url: "images/icons/languages/java.png"},
        {title: "javaScript", url: "images/icons/languages/javascript.png"}
    ],
    misc: [
        {title: "git", url: "images/icons/misc/git.png"},
        {title: "github", url: "images/icons/misc/github.png"},
        {title: "npm", url: "images/icons/misc/npm.png"},
        {title: "webpack", url: "images/icons/misc/webpack.png"},
        {title: "heroku", url: "images/icons/misc/heroku.png"},
        {title: "jest", url: "images/icons/misc/jest.png"},
        {title: "jasmine", url: "images/icons/misc/jasmine.png"},
    ]
}


 export { allProjects, skills};
