# NomanuAI - AI Automation Agency Website

A modern, minimalist website for NomanuAI, an AI automation agency specializing in lead generation, CRM integration, and business process optimization.

## Features

- 🚀 **Next.js 14** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🗄️ **Supabase** for database and forms
- 📱 **Fully Responsive** design
- ⚡ **Performance Optimized** with lazy loading
- 🔧 **Modern Components** with animations
- 📧 **Contact Forms** with Supabase integration
- 🎯 **SEO Optimized** with meta tags
- ♿ **Accessible** design

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nomanuAi
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Update `.env.local` with your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Set up Supabase database**

   Create the following tables in your Supabase database:

   **service_inquiries table:**

   ```sql
   CREATE TABLE service_inquiries (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     company TEXT,
     service_type TEXT NOT NULL,
     budget_range TEXT,
     timeline TEXT,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );
   ```

   **newsletter_subscribers table:**

   ```sql
   CREATE TABLE newsletter_subscribers (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nomanuAi/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── About.tsx        # About section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer component
│   ├── lib/                 # Utility functions
│   │   └── supabase.ts      # Supabase client
│   └── types/               # TypeScript definitions
│       └── index.ts         # Type definitions
├── public/                  # Static assets
│   └── assets/              # Images and logos
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Components

### Header

- Responsive navigation
- Mobile menu
- Scroll-based styling
- Logo integration

### Hero

- Dynamic text animation
- Call-to-action buttons
- Background animations
- Statistics display

### Services

- Service cards with hover effects
- Pricing information
- Feature lists
- Custom consultation CTA

### About

- Company story
- Mission and values
- Statistics and achievements
- Trust indicators

### Testimonials

- Client reviews
- Star ratings
- Trust badges
- Social proof

### Contact

- Multi-step contact form
- Supabase integration
- Form validation
- Success/error handling

## Customization

### Colors

The website uses a custom orange and black color scheme based on the NomanuAI logo. Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#f97316', // Main orange
    // ... other shades
  },
  gray: {
    900: '#111827', // Dark black
    // ... other shades
  }
}
```

### Content

Update content in the respective component files:

- Company information in `About.tsx`
- Services in `Services.tsx`
- Testimonials in `Testimonials.tsx`
- Contact details in `Contact.tsx` and `Footer.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes in component files
- Custom utilities: Defined in `tailwind.config.ts`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## SEO Optimization

The website includes:

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Image optimization
- Performance optimization

## Performance Features

- Next.js Image component for optimized images
- Lazy loading for non-critical content
- Minimized bundle size
- Fast page transitions
- Responsive images
- Font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved by NomanuAI.

## Support

For technical support or questions:

- Email: hello@nomanuai.com
- Phone: +1 (555) 123-4567

## Changelog

### v1.0.0

- Initial release
- Core website functionality
- Supabase integration
- Responsive design
- SEO optimization
