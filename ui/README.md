## UI 


```bash
npm install 
# Run the website in dev mode.
npm run dev
# Build the static website.
npm run build
```

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Layout 

Login (account) -> collections -> brand input -> creation tool 

## Website Design 

[OpenAI](https://openai.com/product/dall-e-2)


## Website Performance Metrics

- LCP (Largest Contentful Paint) : < 2.5s is good -> Bad LCP == Bad SEO
    1. reduce resource load time
    2. CDN (Content Delivery Network)
    3. Blocking JS
    4. Preload
        E.g. `<link rel="preload" href="style.css" as="style" />`
             `<img src="/icon.svg" fetchpriority="low">

- FID (First Input Delay) : < 100ms is good 
- CLS (Cumulative Layout Shift) : <0.1s is good

Testing Tool: 
- [Web Vitals Chrome Extensions](https://chrome.google.com/webstore/detail/web-vitals-tester/ifabcmgidbefjaahoobpomamcohgpeem)
- [Unlighthouse](https://unlighthouse.dev/)

## Tools 
- [Astro](https://astro.build/)
- [Solidjs](https://www.solidjs.com/). Find **solidjs** on [Discord](https://discord.com/invite/solidjs)
