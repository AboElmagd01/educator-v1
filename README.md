# educAtoR
>  An enhanced application enable students to learn more proactively with 3d designs in the science fields, AR-based application that allow the user to interact with the models and do lab’s experiments.  [Landing  Page](https://educator-ar.netlify.app/)
>  [Static Deploy](https://a-elrawy.github.io/educator/)


## Features
- It provides additional learning materials to improve their learning experience through an interactive way. 
- AR-based application that uses the marker-based technique to scan the marker and display the 3D model
- Exploring 3D models for elements and reactions in chemistry, geology and biology.
- Generate All Perodic Elements 3d model with only its Atomic number.
- Provide learning materials and information about some elements.
- Provide the ability to zoom in and out through the 3D models and move them.
- Allow evaluation for students through getting quizzes to test their knowledge.


## Tech
- JavaScript
- [AR.js](https://github.com/AR-js-org/AR.js/)



## Installation
1. Download the repository (project) from the download section or clone it using the following command:
   ```shell
   git clone https://github.com/a-elrawy/educator
   ```
2. run the app by deploying to a web server or on localhost:
    ```shell
    /index.html
    ```
3. For Express server and Adding a new Custom 3d Model Install [node](https://nodejs.org/en/) and install dependencies in package.json
    ```js
   npm install
   node index.js             # Listening on port 3000 by default
   ```