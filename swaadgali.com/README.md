# SwaadGali - Your Local Street Food Finder

## Introduction
SwaadGali is a platform to discover and review local street food vendors. This project includes a backend server built with Node.js and Express, and a frontend built with React. The setup is designed to be compatible with future native iOS and Android apps.

## Features
- User Authentication
- Real-time Location Services
- Street Food Listings
- Reviews and Ratings
- Search and Filters
- Map Integration
- Notifications
- Admin Panel

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Containerization:** Docker
- **Orchestration:** Docker Compose
- **Hosting:** Google Cloud Platform

## Getting Started

### Prerequisites
- **Docker:** You need Docker installed on your machine. [Download and install Docker](https://docs.docker.com/get-docker/).
- **Google Cloud Platform Account:** You need an account to deploy your application.

### Step-by-Step Deployment Instructions

1. **Clone the repository:**
   Open your terminal (Command Prompt, PowerShell, or Terminal) and run the following command to clone the repository:
   ```bash
   git clone https://github.com/yourusername/swaadgali.git
   cd swaadgali
   ```

2. **Build and run the containers:**
   In the terminal, navigate to the cloned repository directory and run:
   ```bash
   docker-compose up --build
   ```
   This command will:
   - Download the necessary Docker images.
   - Build the Docker containers for the backend, frontend, and PostgreSQL database.
   - Start the containers and set up the environment.

3. **Access the application:**
   Once the containers are up and running, you can access the application in your web browser.
   - **Frontend:** Go to `http://localhost:3000` to see the frontend.
   - **Backend:** Go to `http://localhost:5000` to see the backend API.

4. **Deploying to Google Cloud Platform:**
   - **Step 1:** Create a new project in the Google Cloud Console.
   - **Step 2:** Set up a Google Cloud Storage bucket for storing Docker images.
   - **Step 3:** Install the Google Cloud SDK and authenticate your account.
   - **Step 4:** Tag and push your Docker images to Google Container Registry:
     ```bash
     docker tag swaadgali-frontend gcr.io/your-project-id/swaadgali-frontend
     docker tag swaadgali-backend gcr.io/your-project-id/swaadgali-backend
     docker push gcr.io/your-project-id/swaadgali-frontend
     docker push gcr.io/your-project-id/swaadgali-backend
     ```
   - **Step 5:** Create a Kubernetes cluster and deploy your containers.

### Additional Considerations
- Ensure secure handling of user data.
- Design the backend to be scalable.
- Implement features to keep users engaged.

## License
This project is licensed under the MIT License.
