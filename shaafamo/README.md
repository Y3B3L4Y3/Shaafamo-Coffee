# Shaafamo Coffee

Premium specialty coffee from the highlands of Sidama, Ethiopia. A modern, animated website showcasing our farm-to-cup journey.

## 🌿 About

Shaafamo Coffee is a premium specialty coffee producer located in Sidama, Ethiopia. This website tells the story of our hand-picked, sun-dried coffee through a cinematic, immersive web experience.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shaafamo-coffee.git

# Navigate to the project
cd shaafamo-coffee/shaafamo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Coffee Bean | `#5D2E1F` | Secondary actions, text |
| Leaf Olive | `#7B8B3D` | Primary buttons, accents |
| Gold | `#B8956E` | Premium accents |
| Cream | `#FDFBF7` | Backgrounds |
| Espresso | `#1E1614` | Dark backgrounds |

## 📁 Project Structure

```
shaafamo/
├── app/                 # Next.js App Router pages
│   ├── about/          # About/Story page
│   ├── contact/        # Contact page
│   ├── gallery/        # Photo gallery
│   ├── products/       # Products page
│   ├── globals.css     # Global styles & CSS variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # Reusable React components
│   ├── AnimatedButton.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── MasonryGrid.tsx
│   ├── Navigation.tsx
│   ├── ParallaxLayer.tsx
│   └── ScrollReveal.tsx
├── public/
│   └── images/         # Static images & videos
└── next.config.ts      # Next.js configuration
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Set the **Root Directory** to `shaafamo`
6. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to the project
cd shaafamo

# Deploy
vercel

# For production deployment
vercel --prod
```

### Environment Variables

No environment variables are required for basic deployment.

## 📱 Features

- ✅ Responsive mobile-first design
- ✅ Cinematic video hero with parallax effects
- ✅ Smooth scroll animations
- ✅ Image optimization with Next.js
- ✅ Accessible button states (hover, focus, active)
- ✅ SEO-friendly static generation
- ✅ Security headers configured

## 📞 Contact

- **Phone**: +251 931 405 096 / +251 912 680 223
- **Email**: teshalelankamo@gmail.com
- **Location**: Sidama, Ethiopia

## 📄 License

© 2024 Shaafamo Coffee. All rights reserved.
