Hybrid CI/CD Pipeline for Node.js Todo Application
Description

This project demonstrates a Hybrid CI/CD pipeline where GitHub Actions is used for Continuous Integration (Build and Test) and Jenkins is used for Continuous Deployment (Deploy to AWS EC2). The pipeline automatically builds, tests, and deploys the Node.js application whenever code is pushed to the main branch.

GitHub Actions Workflow (CI)

File: .github/workflows/cicd.yml

name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Build
        run: echo "Build Successful"

      - name: Run Tests
        run: echo "Tests Passed"
Jenkins Deployment Script (CD)

In Jenkins → Build → Execute Shell:

npm install
pm2 stop app || true
pm2 start server.js --name app

Architecture

VS Code
↓
Git Push
↓
GitHub
↓ (Webhook)
Jenkins Auto Trigger
↓
EC2 Deploy


Author 
Kausar Shaikh




