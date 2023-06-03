# BACKEND-FRONTEND-INTEGRATION

This is an example of backend-frontend integration.Backend is build with
`SpringBoot` and Frontend is built with `React+Typescript`.

## Backend-Frontend Integration API Documentation

This documentation provides an overview of the endpoints available in the
Backend-Frontend Integration API. The API allows users to interact with the
backend services for user registration, authentication, and retrieving user
information.

### Prerequisites

Before using the API, make sure you have the following:

-    [Thunder Client](https://www.thunderclient.io/) or any other API testing
     tool to send requests to the API endpoints.

-    [Thunder Client Collection](./thunder-collection_backend-frontend-integration.json)
     are in json format for extract and use.

### API Endpoints

The following API endpoints are available in the Backend-Frontend Integration
API:

#### 1. GET /hello

This endpoint returns a simple "Hello" message.

-    **Method:** GET
-    **URL:** `http://localhost:8080/hello`

#### 2. POST /register

This endpoint registers a new user by providing the user's information in the
request body.

-    **Method:** POST
-    **URL:** `http://localhost:8080/register`
-    **Request Body:**
     ```json
     {
     	"username": "Abhisek",
     	"password": "pass",
     	"about": "my about"
     }
     ```

#### 3. POST /token

This endpoint generates a JWT (JSON Web Token) for user authentication.

-    **Method:** POST
-    **URL:** `http://localhost:8080/token`
-    **Request Body:**
     ```json
     {
     	"username": "Abhisek",
     	"password": "pass",
     	"about": "my about"
     }
     ```

#### 4. GET /about/{username}

This endpoint retrieves the user's "about" information.

-    **Method:** GET
-    **URL:** `http://localhost:8080/about/{username}`
-    **Path Variable:**
     -    `username`: The username of the user you want to retrieve information
          for.

#### 5. GET /logout

This endpoint logs out the user by invalidating the JWT.

-    **Method:** GET
-    **URL:** `http://localhost:8080/logout`
-    **Authentication:**
     -    **Type:** Bearer Token
     -    **Bearer Token:** `< Token >`

Note: Replace `< Token >` in the Bearer Token with the actual JWT token received
during authentication.

#### Testing the API

You can use Thunder Client or any other API testing tool to test the API
endpoints mentioned above. Send requests to the respective endpoints with the
required parameters and observe the responses.

#### Conclusion

The Backend-Frontend Integration API provides a set of endpoints to register
users, authenticate them using JWT, retrieve user information, and log out. By
using the provided API endpoints, you can seamlessly integrate the backend with
your frontend application.

### [Assistant By ChatGPT](https://chat.openai.com/share/6e459060-e776-4337-9338-cf884ef61799) Click the link to read the chats.
