# Deployment Guide

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com) to get an API key for email functionality
2. **Cloudflare Account**: Create an account at [cloudflare.com](https://cloudflare.com) for deployment

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

To get your Resend API key:
1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Create a new API key
3. Copy the key and paste it into your `.env.local` file

## Deploying to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard

1. **Connect Your Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your repository

2. **Configure Build Settings**
   - **Framework preset**: Next.js
   - **Build command**: `npx pnpm build` or `npm run build`
   - **Build output directory**: `.next`
   - **Node version**: 18 or higher

3. **Add Environment Variables**
   - In the Cloudflare dashboard, go to **Settings** → **Environment Variables**
   - Add `RESEND_API_KEY` with your API key value
   - Make sure it's available for **Production** environment

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site

### Option 2: Using Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Configure wrangler.toml** (if not exists)
   ```toml
   name = "the-behaviorists"
   compatibility_date = "2024-01-01"

   [env.production]
   vars = { }
   ```

4. **Set Environment Variables**
   ```bash
   wrangler secret put RESEND_API_KEY
   ```

5. **Deploy**
   ```bash
   npm run build
   wrangler pages deploy .next --project-name=the-behaviorists
   ```

## Post-Deployment

### Configure Custom Domain (Optional)

1. In Cloudflare Dashboard, go to your Pages project
2. Navigate to **Custom domains**
3. Add your domain (e.g., `the-behaviorists.com`)
4. Follow the DNS configuration instructions

### Test Email Functionality

1. Visit your deployed site
2. Fill out a contact form on:
   - Homepage (bottom section)
   - `/contact` page
   - `/getting-started` page
   - `/join-our-team` page
3. Verify emails are being sent to `hello@the-behaviorists.com`

### Resend Email Configuration

To ensure emails are delivered properly:

1. **Verify your domain** in Resend:
   - Go to [resend.com/domains](https://resend.com/domains)
   - Add `the-behaviorists.com`
   - Add the required DNS records

2. **Update the FROM address** in API routes:
   - Edit `/app/api/contact/route.ts`
   - Edit `/app/api/join-team/route.ts`
   - Change `from: 'The Behaviorists Website <onboarding@resend.dev>'`
   - To: `from: 'The Behaviorists <noreply@the-behaviorists.com>'`

## Troubleshooting

### Build Errors

If you encounter build errors:
- Make sure Node.js version is 18 or higher
- Clear cache and rebuild: `rm -rf .next && npm run build`

### Email Not Sending

- Verify `RESEND_API_KEY` is correctly set in Cloudflare environment variables
- Check Resend dashboard for any error logs
- Make sure your domain is verified in Resend (for production use)

### 404 Errors

- Ensure build output directory is set to `.next`
- Verify all routes are working in local development first

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

## Support

For issues with:
- **Deployment**: Contact Cloudflare Support
- **Email**: Contact Resend Support
- **Application**: Check the GitHub repository issues
