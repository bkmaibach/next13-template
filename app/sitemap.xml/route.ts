// import { getSortedPostsData } from "../lib/posts";

import { ServerResponse } from "http";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}/projects</loc>
     </url>
      <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}/design</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}/maintenance</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}/rentals</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_APP_URL}/contact</loc>
     </url>
   </urlset>
 `;
}

export function GET() {
  
  const body = generateSiteMap();
 
  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}

