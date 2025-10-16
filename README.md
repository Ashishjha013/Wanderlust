# 🌍 WanderLust  

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js&logoColor=white)  ![Express](https://img.shields.io/badge/Express-5-black?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb&logoColor=white)  ![Passport.js](https://img.shields.io/badge/Auth-Passport.js-blue?logo=passport&logoColor=white)  ![Cloudinary](https://img.shields.io/badge/Cloud-Cloudinary-lightblue?logo=cloudinary&logoColor=white) ![Mapbox](https://img.shields.io/badge/Maps-Mapbox-black?logo=mapbox&logoColor=white)  ![Render](https://img.shields.io/badge/Deployed%20On-Render-purple?logo=render&logoColor=white)  

---

**WanderLust** is a full-stack **Airbnb-style listings platform** where travelers can explore destinations, view maps, and book stays, while hosts can create and manage property listings with images and reviews.  

It combines **Express, MongoDB, Passport, Cloudinary, and Mapbox** into a seamless application that mirrors real-world product complexity — making it a strong showcase for full-stack development skills.

🚀 **Live Demo**: [WanderLust on Render](https://wanderlust-oxsv.onrender.com/listings)
📂 **Repository**: [GitHub Repo](https://github.com/ashishjha013/wanderlust)  

---

## 📖 Project Overview  

WanderLust was built as a clone-style project inspired by **Airbnb**, with a focus on:  

- Building a **scalable backend API** using Express and MongoDB  
- Implementing **secure authentication and authorization** for users  
- Handling **file uploads** and integrating with a cloud provider (Cloudinary)  
- Adding **geospatial features** like maps and geocoding via Mapbox  
- Providing a smooth **frontend experience** using EJS templates + Bootstrap  

This project demonstrates **real product engineering skills**:  
from designing data models and middleware to managing sessions, protecting routes, and deploying to a cloud platform.  

---

## ✨ Key Features  

- 🔑 **User Accounts & Sessions** – Sign up, log in, log out with Passport.js  
- 🏡 **CRUD for Listings** – Create, edit, delete property listings with cloud-hosted images  
- 🗺 **Interactive Maps** – Each listing includes a Mapbox map with geocoded location  
- ⭐ **Reviews System** – Users can leave reviews with star ratings, authorship protections, and validation  
- 🔍 **Explore & Filter** – Search listings by category or country for a curated browsing experience  
- ⚡ **Flash Messages & Validation** – Smooth UX with instant feedback on forms  
- 🔐 **Security** – Sessions persisted in MongoDB, server-side validation with Joi, and sensitive configs hidden with environment variables  

---

## 🛠 Tech Stack  

### Backend  
- **Node.js + Express** – Server and routing  
- **MongoDB + Mongoose** – Database and data modeling  
- **Passport.js** – Authentication (local strategy)  
- **express-session + connect-mongo** – Secure session storage  

### Frontend  
- **EJS + ejs-mate** – Server-rendered templates with layout support  
- **Bootstrap 5** – Styling and responsive UI  
- **Vanilla JS** – Client interactivity and Mapbox integration  

### Cloud & APIs  
- **Cloudinary** – Image hosting + storage  
- **Mapbox SDK + GL JS** – Geocoding + interactive maps  
- **Multer + multer-storage-cloudinary** – File upload handling  

---

## 🏗 Architecture  

```text
Client (Browser)
   |
   |--> EJS Templates + Bootstrap + Mapbox JS
   |
Express Server (app.js)
   |
   |--> Routes (listings, users, reviews)
   |--> Controllers (business logic)
   |--> Middleware (auth, validation, error handling)
   |
MongoDB Database (Atlas or local)
   |
Cloud Services (Cloudinary for images, Mapbox for maps)
   |
MVC-like structure: Routes → Controllers → Models
   |
Middleware-driven Express app: validation, error handling, authentication
   |
Cloud integrations: Cloudinary (media), Mapbox (location)
```
---

# 🧩 Challenges Solved
- Authentication & Authorization – Ensured only owners can edit/delete listings, and only review authors can delete reviews.
- File Uploads – Configured Multer + Cloudinary for secure image hosting.
- Geospatial Data – Used Mapbox SDK to convert human-readable addresses into GeoJSON for maps.
- Error Handling – Centralized error middleware for clean responses and debug flow.
- Deployment – Configured Render for auto-deploy with GitHub integration.

---

# 🌟 Why This Project Matters
- WanderLust is more than just a coding exercise:
- It shows end-to-end full-stack capability, from database design to deployment.
- It integrates real APIs and third-party services, similar to production systems.
- It demonstrates clean code practices (controllers, middleware, validation).
- It’s a portfolio-ready showcase for roles in backend, full-stack, or web app development.

---

# 🔐 Security Notes
- Sessions stored in MongoDB with secure secret keys.
- Environment variables handled privately (not committed to Git).
- Validation with Joi ensures strong input safety.

---

## ✨ Author
**Ashish Kumar Jha**  
📍 India | 💻 Full-Stack Software Engineer

---

## 📬 Connect with Me

- 🔗 GitHub: [Ashishjha013](https://github.com/Ashishjha013)
- 💼 LinkedIn: [Ashish Jha](https://www.linkedin.com/in/ashishjha13/)
- 📧 Email: [ashishjha1304@gmail.com](mailto:ashishjha1304@gmail.com)
  
