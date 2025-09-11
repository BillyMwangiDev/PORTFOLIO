#!/bin/bash

# 🚀 Portfolio Deployment Script
# This script automates the deployment process

echo "🚀 Starting Portfolio Deployment Process..."
echo "=========================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the portfolio directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the portfolio directory."
    exit 1
fi

# Check if git repository exists
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Get GitHub username
echo ""
echo "🔐 Please enter your GitHub username:"
read -r github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin "https://github.com/$github_username/portfolio.git"
    echo "✅ Remote origin added"
else
    echo "✅ Remote origin already exists"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials and repository."
    exit 1
fi

echo ""
echo "🎉 GitHub Setup Complete!"
echo "========================="
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your portfolio repository"
echo "5. Click 'Deploy'"
echo ""
echo "⏱️  Estimated time for Vercel deployment: 10 minutes"
echo ""
echo "🔗 Your GitHub repository: https://github.com/$github_username/portfolio"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT_CHECKLIST.md"
echo ""
echo "�� Happy deploying!"
