# MEAN CRUD Deploy — Full End‑to‑End Deployment Guide

## Overview
This README contains EVERY command and EVERY step required to deploy your MEAN app using Docker, Docker Compose, NGINX reverse proxy, GitHub Actions CI/CD, and AWS EC2.



---

# ✅ 1. CONNECT TO EC2 & INSTALL DEPENDENCIES

### 1.1 Connect to EC2
```bash
ssh -i /path/to/key.pem ec2-user@<EC2_PUBLIC_IP>
```

### 1.2 Update system
```bash
sudo yum update -y
```

### 1.3 Install Docker
```bash
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```

### 1.4 Install Docker Compose
```bash
sudo yum install docker-compose -y
docker-compose version
```

### 1.5 Add user to docker group
```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

# ✅ 2. CLONE PROJECT REPOSITORY

```bash
git clone https://github.com/DeepakkumarRathour/mean-crud-deploy.git
cd mean-crud-deploy
```

---

# ✅ 3. MANUAL BUILD & PUSH DOCKER IMAGES (OPTIONAL IF CI/CD IS ENABLED)

## 3.1 Backend
```bash
cd backend
docker build -t <dockerhub-username>/mean-backend:latest .
docker push <dockerhub-username>/mean-backend:latest
cd ..
```

## 3.2 Frontend
```bash
cd frontend
docker build -t <dockerhub-username>/mean-frontend:latest .
docker push <dockerhub-username>/mean-frontend:latest
cd ..
```

---

# ✅ 4. DEPLOY USING DOCKER COMPOSE

From the project root:

```bash
docker-compose down
docker-compose up -d
```

---

# ✅ 5. VERIFY RUNNING CONTAINERS

```bash
docker ps
```

You should see:

- `mongo`
- `mean-backend`
- `mean-frontend`
- `nginx-proxy`

---

# ✅ 6. TEST APPLICATION

### 6.1 Test backend API
```bash
curl http://localhost/api/tutorials
```

### 6.2 Access frontend in browser
```
http://<EC2_PUBLIC_IP>/
```

---

# ✅ 7. AFTER EC2 RESTART (VERY IMPORTANT)

When you stop/start the EC2 instance:

```bash
ssh -i /path/to/key.pem ec2-user@<EC2_PUBLIC_IP>
cd mean-crud-deploy
docker-compose up -d
docker ps
```

---

# ✅ 8. CI/CD WORKFLOW (AUTOMATIC DEPLOYMENT)

### GitHub Actions performs:

1. Build frontend + backend Docker images  
2. Push images to Docker Hub  
3. SSH into EC2  
4. Run:
```bash
docker-compose pull
docker-compose up -d
```
5. New version goes live automatically.

---

# ✅ 9. ALL COMMANDS SUMMARY (NO STEP MISSED)

```bash
ssh -i /path/to/key.pem ec2-user@<EC2_IP>
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo yum install docker-compose -y
docker --version
docker-compose version
sudo usermod -aG docker $USER
newgrp docker

git clone https://github.com/DeepakkumarRathour/mean-crud-deploy.git
cd mean-crud-deploy

# Optional manual builds
cd backend
docker build -t <username>/mean-backend:latest .
docker push <username>/mean-backend:latest
cd ../frontend
docker build -t <username>/mean-frontend:latest .
docker push <username>/mean-frontend:latest
cd ..

docker-compose down
docker-compose up -d
docker ps

curl http://localhost/api/tutorials
```

---

# 🎉 Deployment Complete
Your MEAN CRUD application is now fully deployed with Docker, NGINX, GitHub CI/CD, and AWS EC2.

Need SSL (HTTPS) setup? I can help.

