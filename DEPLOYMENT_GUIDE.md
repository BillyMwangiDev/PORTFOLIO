# 🚀 Portfolio Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Security & Privacy Checks
- [x] No `.env` files in repository
- [x] No API keys or secrets in code
- [x] No database credentials exposed
- [x] No private information in components
- [x] `.gitignore` properly configured
- [x] Middleware security implemented

### ✅ Code Quality Checks
- [x] No TypeScript errors
- [x] No console.log statements in production
- [x] All components properly exported
- [x] No broken imports
- [x] Responsive design tested

## 🐙 GitHub Deployment Steps

### 1. Initialize Git Repository (if not already done)
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Create GitHub Repository
- Go to [GitHub.com](https://github.com)
- Click "New repository"
- Name: `portfolio` or `billy-mwangi-portfolio`
- Description: "Personal portfolio website"
- Make it **Public** (for free hosting)
- Don't initialize with README (we already have one)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 4. Verify Repository
- Check that no sensitive files are uploaded
- Verify `.gitignore` is working
- Ensure only source code is present

## 🌐 Live Hosting Options

### Option 1: Vercel (Recommended - Free)
**Best for:** Next.js applications, automatic deployments

#### Setup Steps:
1. **Connect GitHub to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Project:**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables:**
   - No environment variables needed for static portfolio

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Get a live URL (e.g., `https://portfolio-abc123.vercel.app`)

#### Vercel Advantages:
- ✅ Automatic deployments on Git push
- ✅ Built-in CDN and edge functions
- ✅ Free tier with generous limits
- ✅ Perfect for Next.js
- ✅ Custom domain support

### Option 2: Netlify (Free)
**Best for:** Static sites, form handling

#### Setup Steps:
1. **Connect GitHub to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

3. **Deploy:**
   - Netlify will build and deploy automatically

### Option 3: GitHub Pages (Free)
**Best for:** Simple static sites

#### Setup Steps:
1. **Build the project:**
   ```bash
   npm run build
   npm run export  # Need to add this script
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` or `main`
   - Folder: `/docs` or `/out`

## 🐳 Docker Deployment (Optional)

### Dockerfile
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production && npm cache clean --force

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Build and Run
```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Or with docker-compose
docker-compose up -d
```

## ☸️ Kubernetes Deployment (Advanced)

### Kubernetes Manifest
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: portfolio:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

## 🔒 Security Considerations

### ✅ Implemented Security Features
- Rate limiting middleware
- Security headers (XSS, CSRF protection)
- Bot protection
- Malicious user agent blocking
- Sensitive path protection
- Query parameter validation

### 🔍 Additional Security Recommendations
1. **HTTPS Only:**
   - Force HTTPS redirects
   - Use HSTS headers

2. **Content Security Policy:**
   - Add CSP headers
   - Restrict inline scripts/styles

3. **Regular Updates:**
   - Keep dependencies updated
   - Monitor security advisories

4. **Monitoring:**
   - Set up error tracking (Sentry)
   - Monitor rate limiting logs
   - Set up uptime monitoring

## 📱 Performance Optimization

### ✅ Current Optimizations
- Next.js Image optimization
- Tailwind CSS purging
- Lazy loading components
- Optimized fonts and icons

### 🚀 Additional Optimizations
1. **Bundle Analysis:**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

2. **Performance Monitoring:**
   - Core Web Vitals tracking
   - Lighthouse CI integration

## 🌍 Custom Domain Setup

### 1. Purchase Domain
- Use providers like Namecheap, GoDaddy, or Google Domains

### 2. Configure DNS
- Add CNAME record pointing to your hosting provider
- For Vercel: `cname.vercel-dns.com`

### 3. SSL Certificate
- Most hosting providers provide automatic SSL
- Vercel/Netlify handle this automatically

## 📊 Analytics & Monitoring

### 1. Google Analytics
```typescript
// Add to _app.tsx or layout.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### 2. Performance Monitoring
- Vercel Analytics (built-in)
- Sentry for error tracking
- Uptime monitoring (UptimeRobot)

## 🚀 Final Deployment Checklist

### Before Going Live:
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Check all images load correctly
- [ ] Test contact form (if applicable)
- [ ] Verify SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Check accessibility (WCAG compliance)
- [ ] Verify cross-browser compatibility

### Post-Deployment:
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Verify SSL certificate
- [ ] Test backup/restore procedures
- [ ] Set up monitoring alerts

## 💰 Cost Breakdown

### Free Tier Options:
- **Vercel:** $0/month (unlimited deployments)
- **Netlify:** $0/month (100GB bandwidth)
- **GitHub Pages:** $0/month
- **Custom Domain:** ~$10-15/year

### Paid Options (if needed):
- **Vercel Pro:** $20/month (team features)
- **Netlify Pro:** $19/month (form handling)
- **Custom Server:** $5-20/month (VPS)

## 🆘 Troubleshooting

### Common Issues:
1. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Deployment Issues:**
   - Verify repository permissions
   - Check build logs for errors
   - Ensure proper build commands

3. **Performance Issues:**
   - Optimize images
   - Implement code splitting
   - Use CDN for static assets

## 📞 Support Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **GitHub Help:** [help.github.com](https://help.github.com)

---

**🎯 Recommended Path:** Start with Vercel deployment (easiest), then consider Docker if you need containerization, and Kubernetes only for enterprise-scale deployments.

**⏱️ Estimated Time:** 
- GitHub setup: 15 minutes
- Vercel deployment: 10 minutes
- Custom domain: 30 minutes
- Total: ~1 hour for basic deployment
