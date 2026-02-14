# ayomide-portfolio-option-a
Portfolio Development Project


# Ayomide Portfolio – Option A (Static Site)

A fast, accessible, static website for Ayomide [Surname] built with HTML, CSS, and JavaScript, served by Nginx.

## Structure
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

## Local (no container)
Just open `index.html` in your browser or serve locally:
```bash
# Python simple server
python3 -m http.server 5173
# then open http://localhost:5173
```

## Docker – Local Test
Build and run with Docker:
```bash
# from inside ayomide-portfolio-option-a
docker build -t ayomide/portfolio-option-a:latest .
docker run --rm -p 8080:80 ayomide/portfolio-option-a:latest
# open http://localhost:8080
```

## Docker Compose – Local Test
```bash
docker compose up --build -d
# open http://localhost:8080
```

## Kubernetes – Deploy
Assuming you have a cluster (Minikube, kind, or cloud) and an Nginx Ingress Controller installed.

```bash
# push your image somewhere accessible by the cluster, or use "IfNotPresent" with local registry
# apply manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

- Update `k8s/ingress.yaml` host to your real domain (e.g. `portfolio.ayomide.dev`).
- If using Minikube, enable ingress: `minikube addons enable ingress` and add `/etc/hosts` entry.

## Notes
- The contact form is client‑side only in Option A. We’ll add email/storage in Options **B** (backend API) and **C** (serverless endpoint).
- Replace placeholders like email, LinkedIn, and domain with your details.

## Next Steps
When you’re ready, we’ll extend this project with **Option B** and **Option C**.
