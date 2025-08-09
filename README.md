# HobbyHub: A Local Hobby Group Organizer

🚩 **Update:** All updates and feature improvements will be declared here.

🎯 **Requirement Explanation Video:** [Add your video link here]

---

## Project Theme

HobbyHub is a platform where users can discover and join local hobby-based groups such as book clubs, hiking crews, painting circles, or create their own. It encourages social engagement through shared interests and helps build communities around passions.

---

## Key Features

- Email/password and Google authentication using Firebase Authentication.
- Private routes for creating, updating, and managing hobby groups.
- CRUD operations with Express.js and MongoDB backend.
- Responsive design for mobile, tablet, and desktop using React and Tailwind CSS.
- Dynamic group joining availability based on start date.
- Toast and SweetAlert notifications for success and error messages.
- Dark/light theme toggle on the homepage.
- Interactive animations using React Simple Typewriter and React Awesome Reveal.
- Custom 404 Not Found and loading spinner components.
- User-friendly forms with password validation (uppercase, lowercase, minimum 6 characters).

---

## Layout Overview

- **Navbar:** Logo/Name, Home, All Groups, Create Group (private), My Groups (private), Login/Register (conditional), user photo on hover shows displayName, Logout button.
- **Main Section:** Displays pages based on routes.
- **Footer:** Eye-catching footer with relevant information.
- **Home Page:** Banner/slider with 3+ slides, featured groups (up to 6), and 2 static sections.
- **Authentication:** Login/Register pages with proper validations and user feedback.
- **Group Pages:**
  - Create Group (private) with fields: group name, hobby category, description, meeting location, max members, start date, image URL, user info.
  - Group Details with "Join Group" button (disabled if start date passed).
  - All Groups listing.
  - My Groups (private) with update and delete functionality.
  - Update Group (private) form, optionally via modal.
- **Error Handling:** 404 page and loading spinner.

---

## Challenges Implemented

- Dark/light theme toggle.
- Animations using:
  - React Simple Typewriter
  - React Awesome Reveal
- Group join restriction based on start date.

---

## Environment Variables

- Firebase config keys and MongoDB credentials are securely hidden using `.env` files.

---

## Deployment

- Client hosted on [Netlify / Surge / Firebase] (add your deployed URL)
- Server hosted on Vercel

---

## How to Run Locally

1. Clone the client and server repositories.
2. Install dependencies with `npm install`.
3. Set up `.env` files with Firebase and MongoDB credentials.
4. Run client and server with `npm start` / `npm run dev`.
5. Access the app on `http://localhost:3000`.

---

## What to Submit

- Client-side GitHub repository.
- Server-side GitHub repository.
- Live website URL.

---

## Author

Your Name  
[GitHub Profile](https://github.com/your-username)  
[LinkedIn Profile](https://linkedin.com/in/your-profile)

---

## License

This project is licensed under the MIT License.
