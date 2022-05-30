# How to run this app in dev


---
## 1. Start the dev backend
First, install json-server globally:

    npm install -g json-server

Run the following command from the root directory of the
_project_ to start the database server:

    json-server --watch db.json

Your dev backend server should be running.


---
## 2. Start the Angular dev server
Then, in another terminal, from the root project directory run the following:

    npm install

 then run the following:

    ng serve

 Finally, visit the following address in a browser:

    localhost:4200



-------------------


## Coding Challenge
In this challenge, you will create an application that allows you to create, retrieve, update, and delete products.

Requirements

The application must be implemented using a RESTful service for the backend, written in Node.js version 10 or higher. You may use TypeScript.
The front-end must be implemented using Angular version 4 or higher.
Each product shall have the following attributes

    - Name (must be a string between 3 and 100 characters and must be unique in the system)
   
    - Description (must be a string between 5 and 1000 characters)

    - Price (must be a number between 1 and 20,000 with 2 decimal place precision)

   1. The application shall allow the user to create new products

   2. The application shall allow the user to list all of the products in the system

   3. The application shall allow the user to retrieve the details of any product by its name

   4. The application shall allow the user to update a product’s description or price

   5. The application shall allow the user to delete a product



The intent of this project is not to assess your UX skills, but rather to see that you can implement a rudimentary front-end in Angular with a RESTful backend. You do not have to use a database unless you have time or want to, and make sure you have both frontend and backend validation.

When you are finished, upload your project to Github and share the repository or submit a zip file containing your source code and all resources necessary to run the project. You can assume we will have access to public services such as Docker Hub or the NPM public registry if you would like us to build your project from the command line.

Include a README.md file with instructions on how to build/run the project.