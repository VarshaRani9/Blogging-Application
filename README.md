# Blogging Application
This is a full-fledged blogging application that allows users to sign up, log in, create, and read blog posts. The application features JWT-based authentication and leverages a serverless backend.

## Features
- User authentication (sign up and sign in)
- Create, read blog posts
- Fetch multiple blog posts
- JWT-based authentication
- Modular route structure
- Prisma for database ORM
- Zod validation for data integrity

## Technology Used
- Backend: Cloudflare Workers, Hono, Prisma, PostgreSQL
- Frontend: Next.js, Tailwind CSS
- Validation: Zod (shared between frontend and backend)
- Database: Neon PostgreSQL
- Deployment: Vercel, Cloudflare Workers
- Miscellaneous: JWT for authentication, npm for package management

## Installation

Clone the Repository:
```
git clone https://github.com/VarshaRani9/Blogging_Application.git

cd Blogging_Application
```

### Backend Setup:

Navigate to the backend directory:
```
cd backend
```

Install dependencies:
```
npm install
```

Initialize Prisma and migrate the database:

npx prisma migrate dev --name init_schema

### Frontend Setup:

Navigate to the frontend directory:
```
cd ../frontend
```

Install dependencies:
```
npm install
```

### Common Package Setup:

Navigate to the common directory:
```
cd ../common
```

Install dependencies and publish to npm:
```
npm install

npm publish
```

### Usage
#### Run Backend:

Navigate to the backend directory:
```
cd backend
```

Start the development server:
```
npm run dev
```

#### Run Frontend:

Navigate to the frontend directory:
```
cd ../frontend
```

Start the development server:
```
npm run dev
```

#### Access the Application:

Open your browser and go to http://localhost:3000.

## Routes and Endpoints
### User Routes

Sign Up:
```
URL: /api/v1/user/signup
Method: POST
Body:
{
  "email": "user@example.com",
  "password": "password123"
}
```

Sign In:
```
URL: /api/v1/user/signin
Method: POST
Body:
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Blog Routes

Create Blog:
```
URL: /api/v1/blog
Method: POST
Headers:
{
  "Authorization": "Bearer <JWT>"
}
Body:
{
  "title": "My First Blog",
  "content": "This is the content of my first blog."
}
```

Update Blog:
```
URL: /api/v1/blog
Method: PUT
Headers:
{
  "Authorization": "Bearer <JWT>"
}
Body:
{
  "id": "blog-id",
  "title": "Updated Title",
  "content": "Updated content."
}
```

Fetch Blog by ID:
```
URL: /api/v1/blog/:id
Method: GET
```

Fetch All Blogs:
```
URL: /api/v1/blog/bulk
Method: GET
```

#### Common Package
The common package contains shared Zod validations to ensure data integrity across both the frontend and backend. This package is published on npm and can be installed as a dependency in both projects.

Installation:
```
npm install @your-org/common
```

Usage Example:
```
import { userSchema } from '@your-org/common';

// Use in validation
const userData = userSchema.parse(requestBody);
```
