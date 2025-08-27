# 🚀 Portfolio Deployment Guide

This guide covers deploying your portfolio website to various platforms with step-by-step instructions.

## 📋 Prerequisites

- Portfolio website built and tested locally
- Git repository set up
- Node.js 18+ installed
- npm or yarn package manager

## 🎯 Deployment Options

### 1. Vercel (Recommended - Free Tier)

Vercel is the platform created by the Next.js team and offers the best integration.

#### Setup Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy from CLI**
   ```bash
   # Navigate to your portfolio directory
   cd portfolio
   
   # Deploy
   vercel
   
   # Follow the prompts:
   # - Link to existing project? No
   # - Project name: billy-mwangi-portfolio
   # - Directory: ./
   # - Override settings? No
   ```

4. **Automatic Deployments**
   - Connect your GitHub repository
   - Every push to main branch auto-deploys
   - Preview deployments for pull requests

5. **Custom Domain Setup**
   - Go to Project Settings → Domains
   - Add your domain (e.g., billymwangi.com)
   - Update DNS records as instructed

#### Environment Variables:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. Netlify (Free Tier)

Netlify offers excellent performance and easy deployment.

#### Setup Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Build Settings**
   ```bash
   # Build command
   npm run build
   
   # Publish directory
   .next
   ```

3. **Deploy Options**
   - **Drag & Drop**: Build locally and upload
   - **Git Integration**: Connect repository for auto-deploy
   - **CLI**: Use Netlify CLI for advanced features

4. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain
   - Update DNS records

### 3. GitHub Pages (Free)

GitHub Pages is perfect if you want everything in one place.

#### Setup Steps:

1. **Update package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && gh-pages -d out"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Configure Next.js**
   ```javascript
   // next.config.js
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### 4. Docker Deployment

For containerized deployment on any platform.

#### Local Docker Build:
```bash
# Build image
docker build -t billy-portfolio .

# Run container
docker run -p 3000:3000 billy-portfolio
```

#### Docker Compose:
```bash
# Development
docker-compose up

# Production
docker-compose --profile production up
```

#### Cloud Deployment:
- **AWS ECS**: Use the Dockerfile
- **Google Cloud Run**: Deploy container directly
- **Azure Container Instances**: Simple container deployment

## 🔧 Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace placeholder content with your information
- [ ] Add your professional photo
- [ ] Update contact information
- [ ] Customize project details
- [ ] Verify all links work

### 2. SEO Optimization
- [ ] Update meta tags in layout.tsx
- [ ] Add Open Graph images
- [ ] Verify page titles and descriptions
- [ ] Test social media previews

### 3. Performance
- [ ] Run `npm run build` locally
- [ ] Check Lighthouse scores
- [ ] Optimize images
- [ ] Test mobile responsiveness

### 4. Security
- [ ] Update contact form endpoints
- [ ] Verify environment variables
- [ ] Check for sensitive data in code
- [ ] Test form validation

## 🌐 Domain & DNS Setup

### 1. Domain Purchase
- **Recommended**: Namecheap, GoDaddy, or Google Domains
- **Cost**: $10-15/year for .com domains

### 2. DNS Configuration

#### For Vercel:
```
Type    Name               Value
A       @                  76.76.19.36
CNAME   www               cname.vercel-dns.com
```

#### For Netlify:
```
Type    Name               Value
A       @                  75.2.60.5
CNAME   www               your-site.netlify.app
```

#### For GitHub Pages:
```
Type    Name               Value
A       @                  185.199.108.153
A       @                  185.199.109.153
A       @                  185.199.110.153
A       @                  185.199.111.153
CNAME   www               username.github.io
```

### 3. SSL Certificate
- **Vercel/Netlify**: Automatic HTTPS
- **GitHub Pages**: Automatic HTTPS
- **Custom servers**: Use Let's Encrypt

## 📱 Post-Deployment

### 1. Testing
- [ ] Test all pages on different devices
- [ ] Verify contact form works
- [ ] Check social media links
- [ ] Test download buttons
- [ ] Validate accessibility

### 2. Analytics Setup
- **Google Analytics 4**:
  ```html
  <!-- Add to layout.tsx -->
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
    strategy="afterInteractive"
  />
  ```

- **Plausible Analytics**:
  ```html
  <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
  ```

### 3. Monitoring
- Set up uptime monitoring
- Configure error tracking (Sentry)
- Set up performance monitoring
- Monitor Core Web Vitals

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**
   ```bash
   # Clear cache
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Image Loading Issues**
   - Check image paths
   - Verify image formats (JPG, PNG, WebP)
   - Optimize image sizes

3. **Styling Problems**
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify CSS imports

4. **Performance Issues**
   - Run Lighthouse audit
   - Check bundle size
   - Optimize images and fonts

## 📊 Performance Optimization

### 1. Image Optimization
```bash
# Install sharp for better image processing
npm install sharp

# Use Next.js Image component
import Image from 'next/image'
```

### 2. Font Optimization
```javascript
// Use Google Fonts with display=swap
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})
```

### 3. Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
```

## 🔄 Continuous Deployment

### GitHub Actions Setup:
1. Add secrets to repository:
   - `VERCEL_TOKEN`
   - `ORG_ID`
   - `PROJECT_ID`

2. Push to main branch triggers:
   - Linting
   - Type checking
   - Build verification
   - Security audit
   - Auto-deploy to Vercel

### Manual Deployment:
```bash
# Build and deploy
npm run build
vercel --prod

# Or use specific environment
vercel --prod --env NODE_ENV=production
```

## 📞 Support & Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Need help?** Check the troubleshooting section or reach out to the platform's support team.
