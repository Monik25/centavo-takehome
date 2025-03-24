# Centivo Take-Home Technical Challenge

This project is a simple Node.js Express API that connects to a MongoDB database to retrieve user data. 
The API includes a GET endpoint at `/users/:id` that accepts a user ID as a route parameter, queries the MongoDB collection for a matching document,
and returns the user's details in JSON format. It also handles invalid ObjectId errors and only returns users where the age is greater than 21.

note: id's may differ, based on generation in the code.And also its done in local, so only my ip address is given to mongodb to access the collection.


## Sample Requests and Responses
----------------------------------------------------------------------------------------------------------------------------------------------------------
Valid User ID and Age Greater Than 21

Request:
http://localhost:3000/users/605c72ef1c4d88b6f8f8f8f8

Response:

{
  "_id": "605c72ef1c4d88b6f8f8f8f8",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
----------------------------------------------------------------------------------------------------------------------------------------------------------

Valid User ID but Age Not Greater Than 21

Request:
GET http://localhost:3000/users/605c72ef1c4d88b6f8f8f8f9

Response:

{
  "error": "User not found"
}

----------------------------------------------------------------------------------------------------------------------------------------------------------
Invalid User ID

Request:
http://localhost:3000/users/invalidUserId

Response:

{
  "error": "Invalid user ID"
}

----------------------------------------------------------------------------------------------------------------------------------------------------------
User Not Found

Request:
http://localhost:3000/users/605c72ef1c4d88b6f8f8f8fa

Response:

{
  "error": "User not found"
}

----------------------------------------------------------------------------------------------------------------------------------------------------------
