# ayomide-portfolio-option-a
Portfolio Development Project


Here’s a fully integrated, polished, and professional project description that now includes your **Netlify deployment**, with GitHub as the **source of truth**. I’ve woven it naturally into the structure so it reads like a complete, production‑ready README.

---

# **Ayomide Portfolio – Option A (Static Website Deployment Project)**

This project delivers a fast, accessible, and fully containerised **static portfolio website** for Ayomide, built with **HTML, CSS, and JavaScript** and served using **Nginx**. It demonstrates clean front‑end structure, modern deployment practices, and production‑ready packaging using **Docker**, **Docker Compose**, and optional **Kubernetes** manifests.  
The live site is deployed on **Netlify**, using the GitHub repository as the **single source of truth** for continuous deployment.

---

## 🌐 **Project Overview**

**Ayomide Portfolio – Option A** is the static‑site version of the portfolio. It includes:

- A multi‑page HTML website  
- A responsive layout styled with CSS  
- Basic interactivity using JavaScript  
- A custom Nginx configuration for clean routing and static asset delivery  
- A Dockerfile for packaging the site into a production‑ready container  
- A Docker Compose setup for local development  
- Kubernetes manifests for cluster‑based deployment  
- A Netlify deployment pipeline that automatically rebuilds and redeploys the site on every Git push  

This option focuses on **front‑end only**. Backend functionality (e.g., contact form processing) is introduced in Options **B** and **C**.

---

## 📁 **Project Structure**

```
ayomide-portfolio-option-a/
├─ index.html
├─ about.html
├─ portfolio.html
├─ courses.html
├─ contact.html
├─ assets/
│  ├─ css/style.css
│  └─ js/main.js
├─ nginx.conf
├─ Dockerfile
├─ docker-compose.yml
└─ k8s/
   ├─ deployment.yaml
   ├─ service.yaml
   └─ ingress.yaml
```

### **Key Components**
- **HTML pages**: Core content for each section of the portfolio  
- **CSS & JS**: Styling and client‑side behaviour  
- **Nginx config**: Defines the web root and static file handling  
- **Dockerfile**: Packages the site into an Nginx container  
- **Docker Compose**: Simplifies local builds and testing  
- **Kubernetes manifests**: Enable scalable deployment in a cluster  
- **Netlify deployment**: Automated builds triggered by GitHub commits  

---

## 🖥️ **Run Locally (No Containers)**

You can open `index.html` directly in your browser, or serve the site using a simple local server:

```bash
python3 -m http.server 5173
```

Then visit:

```
http://localhost:5173
```

---

## 🐳 **Run with Docker (Local Test)**

Build and run the container manually:

```bash
docker build -t ayomide/portfolio-option-a:latest .
docker run --rm -p 8080:80 ayomide/portfolio-option-a:latest
```

Open:

```
http://localhost:8080
```

---

## 🐳 **Run with Docker Compose**

The recommended local workflow:

```bash
docker compose up --build -d
```

Then open:

```
http://localhost:8080
```

Compose handles:

- Building the image  
- Creating the container  
- Managing ports  
- Restart behaviour  

---

## ☸️ **Deploy with Kubernetes**

Assuming you have a cluster (Minikube, kind, AKS, EKS, GKE, etc.) and an Nginx Ingress Controller installed:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Notes:
- Update the host in `k8s/ingress.yaml` to your real domain (e.g., `portfolio.ayomide.dev`).  
- For Minikube:

```bash
minikube addons enable ingress
```

Then add an `/etc/hosts` entry pointing your domain to the Minikube IP.

---

## 🚀 **Netlify Deployment (Production Hosting)**

This project is deployed on **Netlify**, using the GitHub repository as the **source of truth**.  
Every push to the `main` branch triggers:

1. A fresh Netlify build  
2. A full site deployment  
3. Instant updates to the live production site  

### **Netlify Setup Summary**
- Connected directly to the GitHub repo  
- Build command: _not required_ (static site)  
- Publish directory: `/` (root of the project)  
- Automatic deploy previews for pull requests  
- Continuous deployment enabled  

This ensures the portfolio is always up‑to‑date with the latest commits.

---

## 📝 **Additional Notes**

- The **contact form** in Option A is **client‑side only**.  
  Backend functionality will be added in:
  - **Option B** → API‑based backend  
  - **Option C** → Serverless endpoint  

- Replace placeholder values (email, LinkedIn, domain, etc.) with your real details before deployment.

- The project is intentionally structured to support:
  - CI/CD pipelines  
  - Container registry publishing  
  - Cloud deployment  
  - Future expansion into backend or serverless architectures  

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

# **Ayomide Portfolio – Option A (Static Website Deployment Project)**  
A fast, accessible, and fully containerised **static portfolio website** built with HTML, CSS, and JavaScript, served via **Nginx**, deployed using **Docker**, **Docker Compose**, **Kubernetes**, and **Netlify** (with GitHub as the source of truth).

---

## 📛 **Badges**

<p align="left">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-blue" />
  <img src="https://img.shields.io/badge/Server-Nginx-orange" />
  <img src="https://img.shields.io/badge/Container-Docker-blue" />
  <img src="https://img.shields.io/badge/Orchestration-Kubernetes-326ce5" />
  <img src="https://img.shields.io/badge/Hosting-Netlify-00C7B7" />
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20%7C%20Netlify-black" />
</p>

---

## 🌐 **Live Deployment**

This portfolio is deployed on **Netlify**, with **GitHub as the single source of truth**.  
Every push to the `main` branch triggers an automatic rebuild and redeployment.

🔗 **Live Site:** _Add your Netlify URL here_

---

## 📘 **Project Overview**

This project implements a clean, responsive, multi‑page portfolio website for Ayomide.  
It demonstrates:

- Modern static‑site development  
- Nginx‑based static hosting  
- Containerisation with Docker  
- Local orchestration with Docker Compose  
- Optional Kubernetes deployment  
- Automated CI/CD via Netlify + GitHub  

This is **Option A** of the portfolio system — a purely static front‑end.  
Backend functionality (contact form processing, API endpoints, serverless functions) will be introduced in **Options B and C**.

---

## 📁 **Project Structure**

```
ayomide-portfolio-option-a/
├─ index.html
├─ about.html
├─ portfolio.html
├─ courses.html
├─ contact.html
├─ assets/
│  ├─ css/style.css
│  └─ js/main.js
├─ nginx.conf
├─ Dockerfile
├─ docker-compose.yml
└─ k8s/
   ├─ deployment.yaml
   ├─ service.yaml
   └─ ingress.yaml
```

---

## 🖥️ **Run Locally (Without Containers)**

You can open `index.html` directly, or serve the site using a simple local server:

```bash
python3 -m http.server 5173
```

Visit:

```
http://localhost:5173
```

---

## 🐳 **Run with Docker**

Build and run the container:

```bash
docker build -t ayomide/portfolio-option-a:latest .
docker run --rm -p 8080:80 ayomide/portfolio-option-a:latest
```

Visit:

```
http://localhost:8080
```

---

## 🐳 **Run with Docker Compose**

Recommended for local development:

```bash
docker compose up --build -d
```

Visit:

```
http://localhost:8080
```

---

## ☸️ **Deploy with Kubernetes**

Assuming you have a cluster and an Nginx Ingress Controller:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Notes:
- Update the host in `k8s/ingress.yaml` to your real domain  
- For Minikube:

```bash
minikube addons enable ingress
```

Then add an `/etc/hosts` entry pointing your domain to the Minikube IP.

---

## 🚀 **Netlify Deployment (CI/CD)**

This project is deployed on **Netlify**, with:

- GitHub as the **source of truth**  
- Automatic builds on every push to `main`  
- Instant deploy previews for pull requests  
- Zero‑config static hosting  

### Netlify Settings
| Setting | Value |
|--------|--------|
| Build command | _None required (static site)_ |
| Publish directory | `/` |
| Deployment trigger | Git push to `main` |

---

## 🧩 **Deployment Architecture Diagram**

Below is a simple conceptual diagram showing how the project is deployed across environments:

```
                   ┌──────────────────────────┐
                   │        GitHub Repo        │
                   │  (Source of Truth: main)  │
                   └─────────────┬────────────┘
                                 │
                                 ▼
                     ┌────────────────────┐
                     │     Netlify CI     │
                     │ Auto-build & deploy│
                     └──────────┬─────────┘
                                │
                                ▼
                     ┌────────────────────┐
                     │   Netlify Hosting  │
                     │  (Live Production) │
                     └────────────────────┘


Local Dev Path:
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Developer   │──► │   Docker      │──► │ Docker Compose│
└──────────────┘     └──────────────┘     └──────────────┘

Optional Cluster Path:
┌──────────────┐
│ Kubernetes    │
│ Deployment    │
└──────────────┘
```

---

## 📝 **Additional Notes**

- The **contact form** is client‑side only in Option A  
- Backend/API functionality will be added in Options **B** and **C**  
- Replace placeholder values (email, LinkedIn, domain, etc.) before production deployment  
- The project is structured to support:
  - CI/CD pipelines  
  - Container registry publishing  
  - Cloud deployment  
  - Future backend expansion  

# Next Steps

- A **project overview diagram**  
- A **Kubernetes architecture diagram**  
- A **Docker workflow diagram**  
- A **CV‑ready project summary**  

CV
**CV‑Ready Project Summary

**Static Portfolio Website | Nginx | Docker | Docker Compose | Kubernetes | Netlify CI/CD**

Designed and deployed a fully responsive, multi‑page **static portfolio website** built with HTML, CSS, and JavaScript, packaged for production using **Nginx** and containerised with **Docker**. Implemented a clean deployment workflow using **Docker Compose** for local orchestration and provided optional **Kubernetes manifests** for scalable cluster deployment.  

The project is hosted on **Netlify**, with **GitHub as the single source of truth**, enabling automated CI/CD where every commit to the `main` branch triggers a fresh build and instant redeployment.  

# Key achievements include:

- Developed a structured, accessible, and mobile‑friendly multi‑page portfolio using semantic HTML, modular CSS, and lightweight JavaScript.  
- Configured **Nginx** to serve static assets efficiently, ensuring fast load times and clean routing.  
- Built a production‑ready **Docker image** and automated local development using **Docker Compose**.  
- Authored **Kubernetes deployment, service, and ingress manifests** to support cloud‑native deployment scenarios.  
- Implemented **continuous deployment** via Netlify, enabling automated builds and live updates directly from GitHub.  
- Ensured portability and scalability across environments, from local development to containerised and cloud‑based hosting.  

This project demonstrates strong capability in **front‑end development**, **containerisation**, **DevOps workflows**, and **modern deployment practices**, forming the foundation for future enhancements in Options B and C (API‑driven and serverless backends).




http://ayomide-portfolio.local

