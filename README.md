# Personal Portfolio Website

A modern, responsive portfolio website with a terminal/tech aesthetic. All content is easily configurable through a single configuration file.

## 📁 File Structure

```
├── index.html      # Main HTML file (don't edit unless you know what you're doing)
├── config.js       # ⭐ ALL YOUR CONTENT IS HERE - Edit this file!
├── app.js          # Rendering logic (don't edit)
└── README.md       # This file
```

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. To update content, edit `config.js`

## ✏️ How to Update Content

### **Navigation**
```javascript
nav: {
  brand: "TERMINAL.CORE",           // Change your brand name
  connectButton: {
    text: "CONNECT",                 // Button text
    link: "#contact"                 // Where it links to
  }
}
```

### **Hero Section**
```javascript
hero: {
  status: "SYSTEM_READY",            // Status badge text
  title: {
    line1: "Left-Brain",             // First line of title
    line2: "Product Manager"         // Second line (highlighted)
  },
  description: "Your description...", // Main description
  highlightWords: ["Robotics", "Engineering"] // Words to highlight
}
```

### **Companies/Partners**
Simply add or remove company names:
```javascript
companies: [
  "AMAZON",
  "BYTEDANCE",
  "ABB",
  "Tokopedia",
  "Traveloka"
]
```

### **Domain Experience Tags**
Add or remove domain tags:
```javascript
domains: [
  "B2C_MARKETPLACE",
  "AD_TECH",
  "FLIGHT_TICKETING",
  "ROBOTICS",
  "INDUSTRIAL_AI"
]
```

### **Portfolio Projects** ⭐ Most Important

Add, remove, or edit projects:
```javascript
portfolio: [
  {
    id: 1,
    company: "ByteDance",                    // Company name
    title: "Autonomous Fleet Orchestration", // Project title
    image: "https://...",                    // Image URL (or local path)
    metrics: [                               // Key metrics
      { label: "Efficiency", value: "+24%_UPLIFT" },
      { label: "Scale", value: "10k_UNITS" }
    ],
    link: "#",                               // Project link
    active: true                             // true = visible, false = hidden
  },
  {
    id: 2,
    company: "Another Company",
    title: "Another Project",
    image: "path/to/image.jpg",              // Use local images or URLs
    metrics: [],
    link: "https://example.com",
    active: true,
    locked: false                            // Set to true for "encrypted" look
  }
]
```

**To add images:**
- Place images in an `images/` folder
- Reference them as: `image: "images/project1.jpg"`
- Or use full URLs: `image: "https://example.com/image.jpg"`

### **Competencies/Skills**
```javascript
competencies: [
  {
    name: "PRODUCT_STRATEGY",
    icon: "terminal"                        // Material Symbols icon name
  }
]
```

**Available icons:** Visit [Material Symbols](https://fonts.google.com/icons) to find icon names.

### **Mentorship**
```javascript
mentorship: {
  status: "LIVE_SESSION",                    // Status badge
  platforms: [
    {
      name: "ADPList",
      logo: "https://...",                   // Logo image URL
      type: "ADPList"                        // Display text
    }
  ],
  impact: {
    hours: "100+",                           // Hours mentored
    rank: "Top 1%",                          // Ranking
    rankLabel: "Global Rank"                 // Rank label
  },
  testimonial: {
    text: "Your testimonial text...",
    highlightWords: ["technical architecture", "market fit"]
  }
}
```

### **Education**
```javascript
education: [
  {
    years: "2018 — 2019",                    // Date range
    degree: "MSc in Robotics",               // Degree name
    institution: "University of Bristol, UK", // Institution
    badge: {
      text: "Chevening Scholar",             // Badge text
      icon: "award_star",                    // Icon name
      color: "primary"                       // "primary" or "slate"
    }
  }
]
```

### **Social Links**
```javascript
socials: [
  {
    name: "LinkedIn",
    icon: "link",                            // Material Symbols icon
    link: "https://linkedin.com/in/yourprofile" // Your profile URL
  }
]
```

### **Footer**
```javascript
footer: {
  text: "DESIGNED & ENGINEERED © 2024"       // Footer text
}
```

## 📱 Responsive Design

The website is fully responsive and works great on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

All content automatically adjusts for different screen sizes.

## 🎨 Customization Tips

1. **Colors**: Edit the Tailwind config in `index.html` to change the color scheme
2. **Fonts**: Fonts are loaded from Google Fonts - change in the `<head>` section
3. **Images**: 
   - Use high-quality images (recommended: 1200x675px for portfolio images)
   - Optimize images for web (use tools like TinyPNG)
   - Keep file sizes under 500KB for fast loading

## 🔗 Adding Links

All links can be:
- Internal: `"#section-id"` (links to a section on the page)
- External: `"https://example.com"` (opens in new tab automatically)

## 📝 Best Practices

1. **Keep it updated**: Regularly update your portfolio with new projects
2. **Test links**: Make sure all links work before publishing
3. **Optimize images**: Compress images to improve loading speed
4. **Proofread**: Check spelling and grammar in all text
5. **Mobile test**: Always check how it looks on mobile devices

## 🚀 Deployment

To deploy your website:

1. **GitHub Pages**: 
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Your site will be live at `username.github.io/repo-name`

2. **Netlify**:
   - Drag and drop your folder to Netlify
   - Or connect your GitHub repo
   - Free hosting with automatic deployments

3. **Vercel**:
   - Connect your GitHub repo
   - Automatic deployments on push

## ❓ Troubleshooting

**Images not showing?**
- Check image paths are correct
- Make sure images are in the right folder
- For external URLs, ensure they allow hotlinking

**Changes not appearing?**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for JavaScript errors
- Make sure `config.js` syntax is correct (no missing commas, brackets, etc.)

**Layout looks broken?**
- Check that all required fields in `config.js` are filled
- Ensure arrays have at least one item
- Verify JSON syntax is correct

## 📧 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Verify your `config.js` syntax is valid JavaScript
3. Make sure all required fields are present

---

**Happy building! 🚀**
