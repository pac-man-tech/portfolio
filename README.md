# Pacman Tech Solutions - Portfolio Website

A modern, conversion-focused portfolio website for a lead generation and automation specialist. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/preview.png)

## 🎯 Project Overview

This portfolio showcases lead generation, workflow automation, and administrative automation services with a focus on **business outcomes** rather than technical jargon. Every section is designed to convert visitors into clients by emphasizing ROI, time saved, and revenue generated.

## ✨ Key Features

### 🎨 Modern Design
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion for professional transitions
- **Dark/Light Mode Support** - Seamless theme switching
- **Glassmorphism Effects** - Modern UI aesthetics

### 📊 Strategic Sections

1. **Hero Section** - Compelling headline: "Stop Chasing Leads. Start Capturing Them Automatically."
2. **Services Section** - Three core offerings with client-focused benefits
3. **Projects Section** - Filterable portfolio with category badges (Lead Gen, Workflow, Admin)
4. **About Section** - Results-driven story with social proof
5. **Skills Section** - Business impact focus (not just tech stack)
6. **Contact Section** - Low-friction consultation booking

### 🎯 Conversion Optimization

- **Primary CTA**: "Get Your Free Automation Plan" (not generic "Contact Me")
- **Results-Focused Copy**: "$2.4M+ Revenue Generated", "10K+ Leads Captured"
- **Social Proof**: Real metrics, ROI claims, client success stories
- **Category Filtering**: Lets visitors self-qualify by service type

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Projects.tsx        # Portfolio with filtering
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Expertise section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── ui/                 # shadcn/ui components
├── data/
│   └── projects.json       # Project data
├── public/
│   ├── images/             # Project images
│   └── web-developer-headshot.png
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### 1. Update Personal Information

Edit the following files with your details:

**`app/metadata.ts`** - SEO metadata
```typescript
export const metadata: Metadata = {
  title: "Your Name - Lead Generation & Automation Expert",
  description: "Your custom description...",
  // ... update all fields
}
```

**`components/About.tsx`** - Personal info
```typescript
<h3>John Pacman</h3> // Change to your name
<p>Lead Generation & Automation Specialist</p>
```

**`components/Footer.tsx`** - Social links
```typescript
const socialLinks = [
  { href: "https://linkedin.com/in/yourprofile", ... },
  { href: "https://github.com/yourusername", ... },
  // ... update all links
]
```

### 2. Add Your Projects

Edit `data/projects.json`:

```json
{
  "projects": [
    {
      "id": "1",
      "title": "Your Project Name",
      "year": "2024",
      "category": "Lead Generation", // or "Workflow Automation" or "Admin Automation"
      "description": "Short description for card",
      "longDescription": "Detailed description for modal",
      "technologies": ["Python", "n8n", "PostgreSQL"],
      "image": "/images/project1.jpg",
      "gallery": ["/images/project1-1.jpg", "/images/project1-2.jpg"],
      "features": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      "results": "Generated 15,000+ qualified leads, 3.2x ROI in 60 days"
    }
  ]
}
```

**Important**: Each project must have a `category` field:
- `"Lead Generation"`
- `"Workflow Automation"`
- `"Admin Automation"`

### 3. Add Project Images

Place images in `public/images/`:
```
public/
  └── images/
      ├── project1.jpg
      ├── project1-gallery-1.jpg
      ├── project2.jpg
      └── ...
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change theme colors:

```typescript
colors: {
  primary: "#4EA8DE",    // Blue
  accent: "#F4A261",     // Orange/Yellow
  background: "#FFFFFF", // Light mode bg
  foreground: "#1A1A1A", // Text color
}
```

### Fonts

The project uses:
- **Headings**: Poppins (imported via next/font/google)
- **Body**: System font stack

Change in `app/layout.tsx`:
```typescript
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })
```

## 📱 Sections Overview

### Hero Section
- Benefit-driven headline
- Strong CTA: "Get Your Free Automation Plan"
- Social proof stats: Revenue, Leads, Uptime
- Animated visual elements

### Services Section
Three service cards with:
- Icon + Title
- Client benefit description
- Specific deliverables
- "Perfect for" audience tag

### Projects Section
- Category filter buttons (All, Lead Gen, Workflow, Admin)
- Color-coded badges
- Modal with full project details
- "Get Similar Results" CTA

### Skills Section
- Focus on **business impact** not tech percentages
- "What I Bring to Your Business"
- Results metrics instead of work history
- Minimal tech stack display

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Deploy automatically

### Environment Variables

If you add a contact form API, add to `.env.local`:
```
NEXT_PUBLIC_EMAIL_API_KEY=your_key_here
```

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Maintenance

### Adding New Projects

1. Add project data to `data/projects.json`
2. Add images to `public/images/`
3. Ensure `category` field is set correctly
4. Run `npm run build` to test

### Updating Content

- **Hero stats**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **About copy**: `components/About.tsx`
- **Footer links**: `components/Footer.tsx`

## 🤝 Contributing

This is a personal portfolio, but feedback is welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m "Add improvement"`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Built with** ❤️ **by Pacman Tech Solutions**

*Specializing in lead generation systems and automation that actually make you money.*
