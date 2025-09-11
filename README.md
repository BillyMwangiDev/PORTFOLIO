# 🚀 Billy Mwangi - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and comprehensive security measures.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Next.js and Tailwind CSS
- **Security**: Built-in rate limiting, bot protection, and security headers
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended), Docker, or GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🐳 Docker Deployment

### Build and Run
```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Or use docker-compose
docker-compose up -d
```

### Docker Compose
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🌐 Deployment Options

### 1. Vercel (Recommended - Free)
- Perfect for Next.js applications
- Automatic deployments from GitHub
- Built-in CDN and edge functions
- Custom domain support

**Steps:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### 2. Netlify
- Great for static sites
- Form handling capabilities
- Free tier available

### 3. GitHub Pages
- Free hosting for public repositories
- Requires static export

### 4. Self-Hosted
- Use Docker containers
- Deploy to VPS or cloud provider
- Full control over infrastructure

## 🔒 Security Features

- **Rate Limiting**: Configurable limits per route
- **Bot Protection**: Blocks malicious user agents
- **Security Headers**: XSS, CSRF, and content type protection
- **Input Validation**: Sanitizes query parameters and headers
- **Path Protection**: Blocks access to sensitive routes

## 📱 Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging
- **Lazy Loading**: Components load on demand
- **CDN Ready**: Optimized for content delivery networks

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Run tests (if configured)
npm test

# Security audit
npm audit
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   └── middleware.ts        # Security middleware
├── public/                  # Static assets
├── .github/                 # GitHub Actions workflows
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables
No environment variables required for basic portfolio functionality.

### Next.js Config
- Security headers enabled
- Image optimization configured
- Docker support with standalone output
- Performance optimizations enabled

### Tailwind CSS
- Custom color palette
- Responsive breakpoints
- Animation utilities
- Dark mode support (removed per user preference)

## 📊 Monitoring & Analytics

### Built-in Monitoring
- Error tracking with Next.js
- Performance metrics
- Security event logging

### Recommended Add-ons
- **Google Analytics**: User behavior tracking
- **Sentry**: Error monitoring and performance
- **UptimeRobot**: Uptime monitoring
- **Lighthouse CI**: Performance testing

## 🚀 CI/CD Pipeline

GitHub Actions automatically:
- ✅ Lint and test code
- ✅ Build application
- ✅ Security scanning
- ✅ Docker image building
- ✅ Performance testing
- ✅ Deploy to Vercel (if configured)

## 🌍 Custom Domain

1. **Purchase Domain**: Use providers like Namecheap, GoDaddy
2. **Configure DNS**: Point to your hosting provider
3. **SSL Certificate**: Automatic with most providers
4. **Update Settings**: Configure in hosting platform

## 📈 Performance Optimization

### Current Optimizations
- Next.js Image component
- Tailwind CSS purging
- Code splitting
- Lazy loading

### Additional Recommendations
- Implement service worker for offline support
- Add PWA capabilities
- Use CDN for static assets
- Implement caching strategies

## 🆘 Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version and dependencies
2. **Deployment Issues**: Verify repository permissions and build commands
3. **Performance Issues**: Optimize images and implement code splitting

### Support
- Check [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Open GitHub issues for bugs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Billy Mwangi**
- IT Administrator & Software Engineer
- Specializing in systems administration and backend development
- Passionate about solving real-world problems through technology

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- The open source community

---

**⭐ Star this repository if you find it helpful!**

**🔗 Live Demo**: [Your Portfolio URL Here]
**📧 Contact**: billy.mwangi@example.com
