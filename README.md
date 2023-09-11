# Node js CRUD Person Database

**Version:** 1.0

This is the documentation for the Node.js CRUD API for managing a "person" database

## Endpoints

### Create a Person

- **Method:** POST
- **Path:** '/api'
- **Description:** Create a new person record
- **Request Parameters:** 
    - 'name' (String): name of the person
- **Response:** 
   - **Status:** 200 OK
   - **Message:** Record created successful
   - **Body:**
    - Content-Type: application/json
    - Example:
        ```json
        {
            "id": "1",
            "name": "Buck Brown"
        }
        ```

### Read a Person

- **Method:** GET all
- **Path:** '/api'
- **Description:** Get a person from record
- **Request Parameters:** 
    - 
- **Response:** 
   - **Status:** 200 OK
   - **Body:**
    - Content-Type: application/json
    - Example:
        ```json
        {
            "id": "1",
            "name": "Buck Brown"
        },
        {
            "id": "2",
            "name": "Daniel White"
        }
        ```

- **Method:** GET specific
- **Path:** '/api/id' or '/api/name'
- **Description:** Get a person from record
- **Request Parameters:** 
    - 
- **Response:** 
   - **Status:** 200 OK
   - **Body:**
    - Content-Type: application/json
    - Example:
        ```json
        {
            "id": "1",
            "name": "Buck Brown"
        }
        ```


### Update a Person

- **Method:** PUT / PATCH
- **Path:** '/api/id' or '/api/name'
- **Description:** Update a specific person from record
- **Request Parameters:** 
    - 'id' (string): The unique ID of the person
- **Request Body:**
    - Content-Type: application/json
    - Example:
        ```json
        {
            "name": "Wesley wine"
        }
       
- **Response:** 
   - **Status:** 200 OK
   - **Message:** Record updated successful

### Delete a Person

- **Method:** Delete
- **Path:** '/api/id'
- **Description:** Delete a person from record by Id
- **Request Parameters:** 
    - 'id' (string): The unique ID of the person to delete     
- **Response:** 
   - **Status:** 200 OK
   - **Message:** Record deleted successful


#### Setting Up locally or through a server

- Prerequisites :
    - Before you begin, ensure you have the following installed:
    **Node.js and npm**
    **MongoDB**

- Clone this Repo on your local machine
    ```bash
    git clone <repository name>
    cd your-project-directory
    ```

- Install Dependencies
    `npm install`

- Configure Environment Variables
    -create an environment configuration file (e.g., .env) to store sensitive information like database connection
    ```env
    PORT = 3000
    MONGODB_URL=mongodb://localhost:27017/your-database-name
    ```
    Replace your-database-name with your MongoDb database name

- Start the Development Server
    `npm start` or `nodemon app.js`

- Deploy locally
    - To deploy locally ensure you have MongoDB running

- Deploy on a Server
    - Choose hosting provider
    - Set up a server with Node.js and MongoDB installed
    - Configure server environment variables(similar to .env)
    - Start the production server
        `npm install`
        `node app.js`


##### Additional Information

- You can test the api using the test.rest file
- There is an error in the put operation don't know how to solve so i commented
- **Author:** Oluwatuyi Abiola


