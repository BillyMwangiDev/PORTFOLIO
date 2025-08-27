# Billy Mwangi - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing IT administration and software engineering expertise.

## 🚀 Features

- **Professional Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth scrolling navigation and animated sections
- **SEO Optimized**: Meta tags, Open Graph, and structured content
- **Performance Focused**: Fast loading with Next.js optimization
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx      # Navigation bar
│       ├── Hero.tsx            # Hero section with photo
│       ├── About.tsx           # About section
│       ├── Skills.tsx          # Skills showcase
│       ├── Projects.tsx        # Portfolio projects
│       ├── Contact.tsx         # Contact form
│       └── Footer.tsx          # Footer section
├── public/                     # Static assets
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/Hero.tsx`
  - Name, headline, description
  - Professional photo (replace placeholder)
  - Contact buttons

- **About Section**: `src/components/About.tsx`
  - Professional background
  - Key strengths
  - Experience statistics

- **Skills Section**: `src/components/Skills.tsx`
  - Technical skills with proficiency levels
  - Skill categories
  - Additional tools and technologies

- **Projects Section**: `src/components/Projects.tsx`
  - Portfolio projects
  - Tech stacks
  - Project descriptions and links

- **Contact Section**: `src/components/Contact.tsx`
  - Contact information
  - Social media links
  - Resume download link

### Styling

- **Colors**: Update Tailwind CSS variables in `src/app/globals.css`
- **Fonts**: Modify font imports in `src/app/layout.tsx`
- **Layout**: Adjust spacing and grid layouts in component files

### Adding Your Professional Photo

1. Place your professional headshot in the `public/` folder
2. Update the Hero component to use your image:
   ```tsx
   <Image
     src="/your-photo.jpg"
     alt="Billy Mwangi - Professional Photo"
     width={400}
     height={400}
     className="rounded-2xl"
   />
   ```

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized typography for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Vercel will auto-deploy on push
   - Custom domain setup available

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out/` folder
   - Or connect your GitHub repository

### GitHub Pages

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

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Build Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔒 Security

- **Content Security Policy**: Configured for production
- **HTTPS**: Required for deployment
- **Input Validation**: Form validation and sanitization
- **Dependencies**: Regular security updates

## 📈 Analytics & SEO

### SEO Features
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Robots.txt configuration

### Analytics Integration
- Google Analytics 4 ready
- Plausible Analytics support
- Custom event tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For questions or support:
- Email: billy.mwangi@example.com
- LinkedIn: [Billy Mwangi](https://linkedin.com/in/billymwangi)
- GitHub: [Billy Mwangi](https://github.com/billymwangi)

---

**Made with ❤️ by Billy Mwangi**
