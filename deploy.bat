@echo off
chcp 65001 >nul

echo 🚀 Starting Portfolio Deployment Process...
echo ==========================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if we're in the portfolio directory
if not exist "package.json" (
    echo ❌ Please run this script from the portfolio directory.
    pause
    exit /b 1
)

REM Check if git repository exists
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial portfolio commit"
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

REM Get GitHub username
echo.
echo 🔐 Please enter your GitHub username:
set /p github_username=

if "%github_username%"=="" (
    echo ❌ GitHub username is required
    pause
    exit /b 1
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Adding GitHub remote...
    git remote add origin "https://github.com/%github_username%/portfolio.git"
    echo ✅ Remote origin added
) else (
    echo ✅ Remote origin already exists
)

REM Push to GitHub
echo.
echo 📤 Pushing to GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo ❌ Failed to push to GitHub. Please check your credentials and repository.
    pause
    exit /b 1
) else (
    echo ✅ Successfully pushed to GitHub!
)

echo.
echo 🎉 GitHub Setup Complete!
echo =========================
echo.
echo 📋 Next Steps:
echo 1. Go to https://vercel.com
echo 2. Sign up with GitHub
echo 3. Click 'New Project'
echo 4. Import your portfolio repository
echo 5. Click 'Deploy'
echo.
echo ⏱️  Estimated time for Vercel deployment: 10 minutes
echo.
echo 🔗 Your GitHub repository: https://github.com/%github_username%/portfolio
echo.
echo 📚 For detailed instructions, see DEPLOYMENT_CHECKLIST.md
echo.
echo 🚀 Happy deploying!
pause
