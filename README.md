# 📈 AlphaKite - User Dashboard  

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white" alt="Material-UI" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>  

<p align="center">
The main client-facing application for the AlphaKite platform, providing a rich, interactive user experience.
</p>  

---

## ✨ Overview  
This repository contains the primary **user dashboard** for the AlphaKite application.  
Built with **React**, this single-page application (SPA) serves as the central hub for users to:  
- Manage their investments  
- View live market data  
- Interact with their portfolio  

It communicates securely with the **AlphaKite Backend API** to fetch and display **real-time financial information**.  

**Live Dashboard URL:** `https://your-dashboard-url.vercel.app`  
(Replace with your actual Vercel URL)  

---

## 🎯 Key Features  

- 📊 **Interactive Data Visualization:** Portfolio allocation & performance via responsive Chart.js doughnut charts.  
- 📋 **Real-Time Data Display:** Fetches Holdings, Positions, and Orders live from the backend.  
- ❤️ **Dynamic Watchlist:** Add and track favorite stocks.  
- 🛒 **Seamless Order Placement:** Intuitive buy/sell flow managed with global context.  
- 🔐 **Secure Session Management:** Uses secure cookie-based authentication with the backend.  

---

## 🛠️ Tech Stack  

| Category            | Technology         |
|---------------------|--------------------|
| **Library**         | React.js           |
| **Routing**         | React Router       |
| **API Communication** | Axios             |
| **UI Components**   | Material-UI        |
| **Charting**        | Chart.js with react-chartjs-2 |
| **State Management** | React Hooks (useState, useEffect, useContext) |
| **Deployment**      | Vercel             |  

---

## ⚙️ Local Setup  

To run this project locally, follow these steps:  

🔹 **Prerequisite:** The **AlphaKite Backend API** must be running locally for the dashboard to fetch data.  

1. **Clone the repository**  
   ```bash
   git clone <your-dashboard-repo-url>
Navigate to the project directory
   cd dashboard

   Install dependencies

    npm install
# Start the development server


npm start

The app will start on: http://localhost:3000