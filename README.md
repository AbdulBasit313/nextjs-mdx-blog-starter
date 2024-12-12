# Nextjs Tailwind MDX Blog Starter

![Header](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/nextjs-blog-starter-header.png?updatedAt=1734006364110)

## How to get started?

1. Clone the repo
2. Install the dependencies
3. Add your article in an MDX (Markdown) file
4. Change the title and description
5. Customize as needed
6. Add analytics
7. Deploy

### List of UI Components (Next.js + Tailwind)

The Next.js MDX blog starter includes the following UI components:

1. Navbar
2. Banner
3. Category Card
4. Section Heading
5. 3 Variants Blog Card
6. FAQ Section
7. Newsletter
8. Footer
9. Bog Details Page

<br>

![Blog Section V1](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/nextjs-blog-starter-article-section-1.png?updatedAt=1734006364298)

### Live Demo

Check out the [live demo](https://nextjs-mdx-blog-starter-mauve.vercel.app/) of the blog app to see all the components in action.

### All these UI components are part of [Flexy UI](https://flexyui.com/), you can find details and different variants of each component [there](https://flexyui.com/).

[Flexy UI](https://flexyui.com/) is designed to help you build better, and faster UIs in React.

![Blog Section V2](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/nextjs-blog-starter-article-section-2.png?updatedAt=1734006364080)

### Features of Template

- Clean and elegant design
- Adjustable components using props
- All the components are responsive
- Components are built with TypeScript

If this repo helps you in your project, don't forget to give it a star!

<br>

![FAQ Section](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/tailwind-css-faq-component.png?updatedAt=1718756398872)

## Configuring Online Images

To display online images (e.g., from a CDN) in your deployed project, configure allowed image hostnames in next.config.js.

For demo purposes, we’re using Unsplash images. You can use any image host, but be sure to add the hostname in your configuration.

Replace '[images.unsplash.com](http://images.unsplash.com/)' and '[plus.unsplash.com](http://plus.unsplash.com/)' with your own image hostnames if using a different service.

## Theming and Styling

We use Tailwind CSS for styling. In tailwind.config.ts, you can customize theme settings such as fonts, colors, and animations.

## SEO & Branding

1. Favicon: Replace the default favicon with your own.
2. Metadata: Update meta title and description in layout.tsx.
3. SEO Files: robots.ts and sitemap.ts are included for search engines.
4. Open Graph Images:
   - Replace opengraph-image.png and twitter-image.png with custom images.
   - Alternatively, edit opengraph-image.tsx to generate images dynamically.

![Footer](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/multi-column-footer.png?updatedAt=1721730133511)

## Analytics

You can integrate analytics easily:

1. Simple Analytics or Vercel Analytics: Quick and easy to set up.
2. Google Analytics 4: Also straightforward.

## Deployment Notes

Before deploying, add environment variables from .env.local wherever you are deploying:

- NEXT_PUBLIC_SITE \_URL: Set to your actual site URL (e.g., https://johndoe.com).
- For local development, use the localhost URL.
