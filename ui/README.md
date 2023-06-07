## UI 

```bash
npm install 
# Run the website in dev mode.
npm run dev
# Build the static website.
npm run build
# Code formatting
npx prettier --write <targetFile>
```

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Layout 

### Pages
- Login
- Account overview with some bare settings
- Collections (created content to revisit and further refine) 
- Brand
    - Create/Set Brand which will be designed as carousel (explanation text of why & how this data is used, basics (name, website, location, industry),
    social media links & brand logo)
    - Brand Overview (Simple & clean overview of the brand a user specified)
    
- Copilot: Content Creation Tool : This will be image only for the beginning & for one channel basically (instagram)

## Website Design 

- [OpenAI](https://openai.com/product/dall-e-2)
- [Qonto](https://qonto.com/en)


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

## UI Components
- [erakiui](https://merakiui.com/)
- Component [Modal](https://github.com/AdamAnSubtractM/SolidJS-Modal) in SolidJS

## Production Ready Application
Auth
 - [Serverless Functions](https://youtu.be/pAzqscDx580) to grab the .env variables
 - [Hiding API keys with a nodejs relay](https://www.youtube.com/watch?v=uk9pviyvrtg) 

## Additional
- https://www.youtube.com/watch?v=xiowCksSKpk


## Next steps
- loading element
- clean up code 
- add user to mongodb when registering 
- display brand info of user when created
- adjust collection 
- font 
- color adjustments
- set on datamodel (mongodb)
- add user edit possibility (change name & logo)
- Copilot !!
- make it hostable with terraform 
- nginx config
