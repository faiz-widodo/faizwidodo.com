# Faiz Widodo - Personal Portfolio Website

A modern, responsive portfolio website showcasing product management experience at Amazon, Alexa, ByteDance, Tokopedia, and Traveloka.

**Live Site:** [faizwidodo.com](https://faizwidodo.com)

## 🚀 Features

- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Easy Content Management** - All content configurable through `config.js`
- **SEO Optimized** - Meta tags, structured data, and sitemap included
- **Modern Design** - Terminal/tech aesthetic with smooth animations
- **Fast Loading** - Static site with minimal dependencies

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── config.js           # ⭐ Content configuration (edit this!)
├── app.js              # Rendering logic
├── fw.png              # Favicon
├── CNAME               # Custom domain configuration
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
├── README.md           # This file
├── DEPLOYMENT.md       # Deployment guide
└── SEO_IMPROVEMENTS.md # SEO optimization guide
```

## ✏️ Updating Content

All content is managed through `config.js`. Simply edit the configuration object to update:

- **Navigation** - Brand name, connect button
- **Hero Section** - Title, description, status
- **Companies** - List of companies with links and colors
- **Domain Experience** - Expertise areas
- **Portfolio Projects** - Featured work (currently hidden)
- **Competencies** - Core skills
- **Mentorship** - Stats, platforms, reviews
- **Education** - Degrees, institutions, scholarships
- **Social Links** - LinkedIn, Medium, GitHub, YouTube

### Example: Adding a New Company

```javascript
companies: [
  { 
    name: "NEW_COMPANY", 
    url: "https://example.com",
    glowColor: "#FF5733"
  }
]
```

### Example: Showing Portfolio Projects

```javascript
production: {
  showDeliveredResults: true  // Change from false to true
}
```

Then populate the `portfolio` array with your projects.

## 🛠️ Development

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Edit `config.js` to update content
4. Refresh browser to see changes

### Deployment

The site is deployed via GitHub Pages. Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages automatically rebuilds the site within 1-2 minutes.

## 📊 SEO

The site includes:
- ✅ Optimized meta tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Cards

See `SEO_IMPROVEMENTS.md` for optimization strategies.

## 🎨 Customization

### Colors

Edit the Tailwind config in `index.html`:

```javascript
colors: {
  "primary": "#1f8aad",        // Main brand color
  "background-dark": "#0a0c0d", // Dark background
  "border-subtle": "#1e2225"   // Border color
}
```

### Fonts

Fonts are loaded from Google Fonts:
- **Display**: Manrope
- **Mono**: JetBrains Mono

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🔗 Links

- **Website**: [faizwidodo.com](https://faizwidodo.com)
- **LinkedIn**: [linkedin.com/in/faizwidodo](https://www.linkedin.com/in/faizwidodo)
- **GitHub**: [github.com/faiz-widodo](https://github.com/faiz-widodo)

---

**Built with:** HTML, CSS (Tailwind), JavaScript  
**Deployed on:** GitHub Pages  
**Domain:** faizwidodo.com
