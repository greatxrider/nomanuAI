# NomanuAI Website - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies

```bash
cd nomanuAi
npm install
```

### 2. Set Up Supabase (Required for Contact Forms)

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Get your credentials** from Project Settings > API
3. **Create environment file**:
   ```bash
   cp env.example .env.local
   ```
4. **Update .env.local** with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

### 3. Create Database Tables

In your Supabase SQL Editor, run:

```sql
-- Service inquiries table
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

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed)
CREATE POLICY "Enable insert for all users" ON service_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for all users" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website!

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Option 2: Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Add environment variables in Netlify dashboard

## ✅ Verification Checklist

- [ ] Website loads at localhost:3000
- [ ] All sections display correctly
- [ ] Logo appears in header and footer
- [ ] Navigation works (smooth scrolling)
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] All animations and transitions work

## 🎨 Customization Quick Tips

### Update Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
primary: {
  500: '#your-color', // Main brand color
}
```

### Update Content

- **Services**: Edit `src/components/Services.tsx`
- **About**: Edit `src/components/About.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Update Logo

Replace `public/assets/nomanuai-logo.png` with your logo

## 🛠️ Troubleshooting

### Common Issues:

**"Module not found" errors:**

```bash
npm install
```

**Supabase connection errors:**

- Check your environment variables
- Verify Supabase URL and keys
- Ensure database tables exist

**Build errors:**

```bash
npm run type-check
```

**Styling issues:**

```bash
npm run build
```

## 📞 Need Help?

If you encounter any issues:

1. Check the main README.md for detailed documentation
2. Verify all dependencies are installed
3. Ensure environment variables are set correctly
4. Check browser console for errors

The website should be fully functional after following these steps!
