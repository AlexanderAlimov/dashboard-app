## React Dashboard
-

This is admin panel with categories and products.

- Admin can add/delete/update categories or products.

- Each product belongs to one category. 

- If category is deleted all products from category are replacing to "Without Category"

- To have CRUD oportunity admin must sign in.


#### React Dashboard is using:
-

Client:

1. Ant Design components

2. Redux for store

3. Redux-thunk for async Api request

Server:

1. Express.js

2. MongoDb (mongoose)

3. Passport (auth)

#### To run project:
-

1. clone mkdevReactApp
2. use command docker build -t "your app name" .
3. then docker run -p 5000:5000 -d "your app name"
4. open app on localhost:5000

