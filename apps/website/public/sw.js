if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const r=e=>s(e,c),d={module:{uri:c},exports:n,require:r};a[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-8c8aeaed"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bFMCcviHI5MX0icMBDpRq/_buildManifest.js",revision:"3a5294586b51d7e19e6adc088a43c0de"},{url:"/_next/static/bFMCcviHI5MX0icMBDpRq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2413-4ce956090f10ec59.js",revision:"4ce956090f10ec59"},{url:"/_next/static/chunks/2641-bf64b8416b395f4b.js",revision:"bf64b8416b395f4b"},{url:"/_next/static/chunks/3321-bfbb3fecae1f0e51.js",revision:"bfbb3fecae1f0e51"},{url:"/_next/static/chunks/448715ac-30a5f9778e427480.js",revision:"30a5f9778e427480"},{url:"/_next/static/chunks/52361fab-8a4d754f82adc16b.js",revision:"8a4d754f82adc16b"},{url:"/_next/static/chunks/5838-4e3847d29d046410.js",revision:"4e3847d29d046410"},{url:"/_next/static/chunks/5be28a27-4f150cd7af271add.js",revision:"4f150cd7af271add"},{url:"/_next/static/chunks/9737-ba1f667e802a327d.js",revision:"ba1f667e802a327d"},{url:"/_next/static/chunks/bd43a57c-5ef99b54608834dd.js",revision:"5ef99b54608834dd"},{url:"/_next/static/chunks/cb700956-e48b3795e7d4c86f.js",revision:"e48b3795e7d4c86f"},{url:"/_next/static/chunks/framework-04384c949e818510.js",revision:"04384c949e818510"},{url:"/_next/static/chunks/main-2d38163428af47e6.js",revision:"2d38163428af47e6"},{url:"/_next/static/chunks/pages/404-4f3fb1d6033ba390.js",revision:"4f3fb1d6033ba390"},{url:"/_next/static/chunks/pages/_app-b69859028ca21015.js",revision:"b69859028ca21015"},{url:"/_next/static/chunks/pages/_error-682dedafd1be03ad.js",revision:"682dedafd1be03ad"},{url:"/_next/static/chunks/pages/colors-5b87582e57eff0d1.js",revision:"5b87582e57eff0d1"},{url:"/_next/static/chunks/pages/components-d592e8a74d3b8ec0.js",revision:"d592e8a74d3b8ec0"},{url:"/_next/static/chunks/pages/components/accordions-4c5a00540287252f.js",revision:"4c5a00540287252f"},{url:"/_next/static/chunks/pages/components/accordions/gopx-accordion-f9ed75bc8048428a.js",revision:"f9ed75bc8048428a"},{url:"/_next/static/chunks/pages/components/add-utils-952b110c1e28beb3.js",revision:"952b110c1e28beb3"},{url:"/_next/static/chunks/pages/components/buttons-d57b0a082862084c.js",revision:"d57b0a082862084c"},{url:"/_next/static/chunks/pages/components/calendars-c1f1715128fa456a.js",revision:"c1f1715128fa456a"},{url:"/_next/static/chunks/pages/components/cards-d4c29f48fc63bb4d.js",revision:"d4c29f48fc63bb4d"},{url:"/_next/static/chunks/pages/components/cards/profile-card-528ffaa81c9d0ece.js",revision:"528ffaa81c9d0ece"},{url:"/_next/static/chunks/pages/components/carousels-7a074fad52fdb006.js",revision:"7a074fad52fdb006"},{url:"/_next/static/chunks/pages/components/carousels/infinite-carousel-5851d86a3d309211.js",revision:"5851d86a3d309211"},{url:"/_next/static/chunks/pages/components/countdowns-4b9af0cc8abaccb1.js",revision:"4b9af0cc8abaccb1"},{url:"/_next/static/chunks/pages/components/dropdown-menus-3eab87a2f0f996f3.js",revision:"3eab87a2f0f996f3"},{url:"/_next/static/chunks/pages/components/faq-sections-25d1e224e9dd9b0b.js",revision:"25d1e224e9dd9b0b"},{url:"/_next/static/chunks/pages/components/features-sections-15c6ddba68852aae.js",revision:"15c6ddba68852aae"},{url:"/_next/static/chunks/pages/components/form-sections-505f896a5f7fe3ce.js",revision:"505f896a5f7fe3ce"},{url:"/_next/static/chunks/pages/components/grids-4a85f8801e5ee0ec.js",revision:"4a85f8801e5ee0ec"},{url:"/_next/static/chunks/pages/components/hero-sections-09982fee82855bd3.js",revision:"09982fee82855bd3"},{url:"/_next/static/chunks/pages/components/inputs-783ef2be10aba4c3.js",revision:"783ef2be10aba4c3"},{url:"/_next/static/chunks/pages/components/install-nextjs-1a43b58390371ca9.js",revision:"1a43b58390371ca9"},{url:"/_next/static/chunks/pages/components/install-tailwind-a348cd734c94fffc.js",revision:"a348cd734c94fffc"},{url:"/_next/static/chunks/pages/components/links-242a6188b800db13.js",revision:"242a6188b800db13"},{url:"/_next/static/chunks/pages/components/links/torsional-link-a8ecf9df275d8b66.js",revision:"a8ecf9df275d8b66"},{url:"/_next/static/chunks/pages/components/loaders-676a2c6ae356073e.js",revision:"676a2c6ae356073e"},{url:"/_next/static/chunks/pages/components/modals-48c697b373c4e6d3.js",revision:"48c697b373c4e6d3"},{url:"/_next/static/chunks/pages/components/navbars-menus-a283a29d146c64ac.js",revision:"a283a29d146c64ac"},{url:"/_next/static/chunks/pages/components/notifications-dd7401b1cf88b23e.js",revision:"dd7401b1cf88b23e"},{url:"/_next/static/chunks/pages/components/others-dcb56b3966178c0f.js",revision:"dcb56b3966178c0f"},{url:"/_next/static/chunks/pages/components/pricing-sections-22dbee713969bf6a.js",revision:"22dbee713969bf6a"},{url:"/_next/static/chunks/pages/components/progress-7df07a38f5149803.js",revision:"7df07a38f5149803"},{url:"/_next/static/chunks/pages/components/signin-sections-9d6c978e63cfab62.js",revision:"9d6c978e63cfab62"},{url:"/_next/static/chunks/pages/components/stats-sections-41a7077cd990c1a8.js",revision:"41a7077cd990c1a8"},{url:"/_next/static/chunks/pages/components/tables-9cd13d217b594aa8.js",revision:"9cd13d217b594aa8"},{url:"/_next/static/chunks/pages/components/tabs-e55ba18c93340d9d.js",revision:"e55ba18c93340d9d"},{url:"/_next/static/chunks/pages/components/testimonial-sections-ab7bd4d98fc0216e.js",revision:"ab7bd4d98fc0216e"},{url:"/_next/static/chunks/pages/components/text-e6f077cbe60f6a29.js",revision:"e6f077cbe60f6a29"},{url:"/_next/static/chunks/pages/components/toggles-141221bd8a297fd4.js",revision:"141221bd8a297fd4"},{url:"/_next/static/chunks/pages/components/tooltips-e86dac88c21b79d8.js",revision:"e86dac88c21b79d8"},{url:"/_next/static/chunks/pages/components/tooltips/image-tooltip-c2b01a8f83a12e39.js",revision:"c2b01a8f83a12e39"},{url:"/_next/static/chunks/pages/components/tooltips/text-tooltip-b1b4a68963451506.js",revision:"b1b4a68963451506"},{url:"/_next/static/chunks/pages/faqs-e694092a95ae17d1.js",revision:"e694092a95ae17d1"},{url:"/_next/static/chunks/pages/index-d21fda76417e335c.js",revision:"d21fda76417e335c"},{url:"/_next/static/chunks/pages/pricing-5f5521ef236982e0.js",revision:"5f5521ef236982e0"},{url:"/_next/static/chunks/pages/privacy-policy-d1ebd129eff90d5a.js",revision:"d1ebd129eff90d5a"},{url:"/_next/static/chunks/pages/templates-4273435cb64b1eff.js",revision:"4273435cb64b1eff"},{url:"/_next/static/chunks/pages/terms-and-conditions-4e73674624fbf20f.js",revision:"4e73674624fbf20f"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-dd8919a572f3efbe.js",revision:"dd8919a572f3efbe"},{url:"/_next/static/css/61698fa546854d3c.css",revision:"61698fa546854d3c"},{url:"/_next/static/css/7cf8e0710adb7d18.css",revision:"7cf8e0710adb7d18"},{url:"/_next/static/css/eb40d03f54e2209f.css",revision:"eb40d03f54e2209f"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/arrow-right.1a3665d4.svg",revision:"7a2cf7df83b3e34a1740c626c0ad4638"},{url:"/_next/static/media/box.2f47a33b.svg",revision:"1dbf4f053d36cb3d5184c28fb64a930e"},{url:"/_next/static/media/brush.f70c6bf6.svg",revision:"64773768bcecb5c7635e0b5810db08cf"},{url:"/_next/static/media/cards.afb553cd.svg",revision:"26a8bb58019b6ce85567ca3b1bf0bcd6"},{url:"/_next/static/media/chevron-right.8cb1c01f.svg",revision:"710716f1b94078ee0aa9317b00c1f0f5"},{url:"/_next/static/media/cloud.9abddccb.svg",revision:"e2f1cc8179beed83da0327f28823e9a1"},{url:"/_next/static/media/code.ae437384.svg",revision:"095e06af90a3dbce2801c79b5a4893ef"},{url:"/_next/static/media/diagram.3a6b8948.svg",revision:"d89ec72c34f7bdfcd00395b8e9ebe282"},{url:"/_next/static/media/dropper.2e14d079.svg",revision:"324c8e0b2903431e8fa26672a076ab19"},{url:"/_next/static/media/file.593070c6.svg",revision:"e9ad4102546fe36102414dae60a0ec9e"},{url:"/_next/static/media/files.36ba0e8b.svg",revision:"7132ca4d144d4bf186a0777c69fff856"},{url:"/_next/static/media/folder-tree.aad4662f.svg",revision:"ffe65caa9b77bd3779280774bd5c10ce"},{url:"/_next/static/media/formula.ecf76bd5.svg",revision:"bd0a9ed3003638c212db15e7368f1491"},{url:"/_next/static/media/gear.3849e092.svg",revision:"a3e267193909dab26ad88aa6acb974da"},{url:"/_next/static/media/globe.379d3c74.svg",revision:"f60b5772000007d6171d0b72521f4166"},{url:"/_next/static/media/id-card.9247aec2.svg",revision:"3b56fc41faeb83bfd9848f096adc5130"},{url:"/_next/static/media/lightning.3647b1e9.svg",revision:"29e130af4a77cae5cef044466aff54ff"},{url:"/_next/static/media/link.64f40e02.svg",revision:"a815e2f6b09592e70416c6c4cbabdc1e"},{url:"/_next/static/media/markdown.35bb5554.svg",revision:"54f258684469bf17cdcc45ca654363f3"},{url:"/_next/static/media/newsletter.3b3d08fd.svg",revision:"5b7e09f0a9eacf0ea498896f07a2de3e"},{url:"/_next/static/media/one.c5310fdf.svg",revision:"25bb8dfe534259a5d015d7399cbb9cb0"},{url:"/_next/static/media/picture.ebadce8f.svg",revision:"39b789d3301bf9e7ed3c2c0bf81b9cf9"},{url:"/_next/static/media/rows.a5b1f484.svg",revision:"ed2cf1944a13786344ba0a0adfdbc0a1"},{url:"/_next/static/media/stars.c36341de.svg",revision:"28ab39d997a56a47a37789a47bb94d6b"},{url:"/_next/static/media/switch.584354d3.svg",revision:"00a62fdcf3ee01a8afa6390b3788116c"},{url:"/_next/static/media/table.0e035a09.svg",revision:"df8a8b8b94224cd0cb698cc07310bb8e"},{url:"/_next/static/media/tailwind.68672c31.svg",revision:"2163d97454e7315ae985609c776a045b"},{url:"/_next/static/media/terminal.b998eedb.svg",revision:"743b449dd6a64c63349acb7eeb496109"},{url:"/_next/static/media/warning.6a32980b.svg",revision:"5743114d575e3bdbe9df43bf22047120"},{url:"/android-chrome-192x192.png",revision:"27bdec5d98651bce3bbbcebf4df34a45"},{url:"/android-chrome-512x512.png",revision:"8f1bf3e30c381d7965519e9cfbfb4653"},{url:"/apple-touch-icon.png",revision:"f575fab20247f759afbd33458a433d7a"},{url:"/assets/blog-theme.png",revision:"ebec60c9d58ce3f31c64aa0446ecfb0b"},{url:"/assets/brands/framer-motion.png",revision:"859b832d2b75d84e8b093d1ce685cad8"},{url:"/assets/brands/framer-motion.svg",revision:"be69789d248daa3222003145edfe2dfa"},{url:"/assets/brands/gsap.png",revision:"c5872dc34b9ac1e193c0347975f93bcf"},{url:"/assets/brands/nextjs.png",revision:"fefed8e676af18ae7abadf9dc7f566cd"},{url:"/assets/brands/nextjs.svg",revision:"18b7e3cfc453d47fe24b0d25baa4ab1e"},{url:"/assets/brands/react.svg",revision:"b9a67d7c2d34e366788776c405731ca6"},{url:"/assets/brands/tailwind.png",revision:"2441cb996a3afd2ae91cf88fe008a623"},{url:"/assets/brands/tailwind.svg",revision:"2f77e9d2d9b4446ea7311e9ebcd2ed12"},{url:"/assets/brands/tailwind.webp",revision:"8791b9e97190c0e251abaaff21f047e7"},{url:"/assets/card-1.dark.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/assets/card-1.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/assets/components/accordions/gopx-accordion.png",revision:"ba16e309993d9b23bae769472854f268"},{url:"/assets/components/cards/profile-card.png",revision:"2aca44d4cba7bfd6899dbda90f65d23a"},{url:"/assets/components/carousels/infinite-carousel.png",revision:"22b93b02c77e54a563e2f427b6d79991"},{url:"/assets/components/links/torsional-link.png",revision:"97eb8e4cfdce9ad2af83de02dcda2e4c"},{url:"/assets/components/tooltips/image-tooltip.png",revision:"d3ec30f6002c7bad924cc9caf7f3af39"},{url:"/assets/components/tooltips/text-tooltip.png",revision:"4ccb2995f63a1499790a6ef59214ebf0"},{url:"/assets/docs-theme.png",revision:"632e0ac47583ff49de7aadac16d2b431"},{url:"/assets/docs/banner.png",revision:"b487a148d912f518bc8a991005d40c97"},{url:"/assets/docs/custom-theme.png",revision:"51a0828e8ad2c139dff2c30e00d6c264"},{url:"/assets/docs/logo.png",revision:"8c576d302ed64d076fde3ec87a26cac4"},{url:"/assets/docs/menu.png",revision:"45970f55f51b280476a707b00472e5f1"},{url:"/assets/docs/navigation.png",revision:"6cdbea067e1d26f1538537f6fd53ad1b"},{url:"/assets/docs/project-link.png",revision:"07e777b97912fb2364cbef1ef34a82ac"},{url:"/assets/docs/sidebar-customized.png",revision:"56207115e2312ee59ce090ebdc76689d"},{url:"/assets/docs/sub-docs.mp4",revision:"b05ac980f7b024f8d76709a6f3f93103"},{url:"/assets/docs/title-suffix.png",revision:"4280710f177c3e2fedfdca2e7dba9e98"},{url:"/assets/gradient-bg.jpeg",revision:"c522a2888a3be798c1019a625aa122df"},{url:"/assets/hero/Components.zip",revision:"90b1f258059aefb70781c06e09dfd7ff"},{url:"/assets/hero/bento/1.png",revision:"ef9c36a949a3db07aab085dbf6425ad8"},{url:"/assets/hero/bento/2.png",revision:"ce2a24c0acbfb91e0f5a92f1f46692fc"},{url:"/assets/hero/bento/3.png",revision:"f04e917ee288ee8461e724b4f0162f2a"},{url:"/assets/hero/bento/4.png",revision:"c8490949e10eecbfff2d160565d236e9"},{url:"/assets/hero/bento/5.png",revision:"3f501b04558d85981ba3f670efb9a461"},{url:"/assets/hero/image1.png",revision:"5d9f5d69776debf2b578b26f6b1e5f4f"},{url:"/assets/hero/image10.png",revision:"44baa4bc06d4c8d48518b405cfa72d74"},{url:"/assets/hero/image11.png",revision:"b8f1e8e4a960dc03c92978fc0d493189"},{url:"/assets/hero/image12.png",revision:"158db7ae47a75f6fe373a8c810d7c69a"},{url:"/assets/hero/image13.png",revision:"ee713b7e1d3ac3c0f3872b91bc41d1b3"},{url:"/assets/hero/image14.png",revision:"b73cea2f59915bebfa8b78966315b026"},{url:"/assets/hero/image15.png",revision:"1fbdcebb40fea2d21713a3ed2cc0498a"},{url:"/assets/hero/image16.png",revision:"cf384b6ca160d0bba2c9d5bde7c961b7"},{url:"/assets/hero/image2.png",revision:"34921bfe44c3a7342b7449bb828842a3"},{url:"/assets/hero/image3.png",revision:"f73a22ba6bfec279767ed808ac042955"},{url:"/assets/hero/image4.png",revision:"7914fbf4b3f4f117c69d54adef9f5268"},{url:"/assets/hero/image5.png",revision:"b927f22880d71dea7097760a4fe4a787"},{url:"/assets/hero/image6.png",revision:"22d1de8fc311b73dc51b090b70ec925e"},{url:"/assets/hero/image7.png",revision:"746ea5175acd2dc3e8098c3b96cbdfd8"},{url:"/assets/hero/image8.png",revision:"638e584a6b405fa8248e915f7e534235"},{url:"/assets/hero/image9.png",revision:"1f18ab81b0f31ddcee66d1004bcb15c2"},{url:"/assets/high-contrast.png",revision:"a5b084f19316c389ee77e292d5ce1454"},{url:"/assets/routing.png",revision:"1351486c930bc4f86a4e0f91b99ac926"},{url:"/assets/routing@1x.png",revision:"29ed39048ee3fca3c5fdae539cb56649"},{url:"/assets/search-dark.mp4",revision:"d69171e099f2b59058b1b98fca5b2b02"},{url:"/assets/search.mp4",revision:"89d84e9eac11f0743a35dda9dd08d906"},{url:"/assets/syntax-highlighting.svg",revision:"15b8b2a2af9587a93def6a0c3364ea22"},{url:"/assets/templates/gopx-1.png",revision:"6005e21e6fb1dfcd3c994074d9e4e481"},{url:"/assets/templates/gopx-2.png",revision:"24fc5d8b2c15099d813f52b9c3b73f3a"},{url:"/assets/templates/gopx-3.png",revision:"7e45ea99483b79b3103b633beeed7131"},{url:"/assets/templates/gopx-blogs-1.png",revision:"1792b906ece4818186298ed3b4f25553"},{url:"/assets/templates/gopx-blogs-2.png",revision:"28b62d57578c69042c5d68c8fa5849e8"},{url:"/assets/templates/gopx-nb-1.png",revision:"6e0818098cace09a51f1bebb499bef68"},{url:"/assets/templates/gopx-nb-2.png",revision:"b3609f880ee6d9abe4b5b1289d88b0c9"},{url:"/assets/templates/gopx-sc-1.png",revision:"2bd77d7c14baa883d34d95a148322584"},{url:"/assets/templates/gopx-sc-2.png",revision:"d1aaac465dbb512ee7072574733158fe"},{url:"/atom.xml",revision:"ecd7caf4b566a528e1b81d971676be07"},{url:"/cli/cli-dark.png",revision:"f42c671b8d8b6a95b05d5da8b8915a90"},{url:"/cli/cli-light.png",revision:"2680901dae160832a0c9ac6e1572fbe0"},{url:"/favicon-16x16.png",revision:"71bf88a1afaec8d78ddc9427bc029987"},{url:"/favicon-32x32.png",revision:"024046d1e17ae9dc2743bbd41feb319d"},{url:"/favicon.ico",revision:"2e924aa22254cdc2a9e0f75f1645f8b1"},{url:"/icon-192x192.png",revision:"530e7cbd01a751b17cf3415071bf65e8"},{url:"/icon-256x256.png",revision:"57d638232ba6fbd7c985163ac5f9d576"},{url:"/icon-384x384.png",revision:"b004265bbab46adee74b4a77d7c040a0"},{url:"/icon-512x512.png",revision:"54baf571e970f8c5871cd5964f606506"},{url:"/manifest.webmanifest",revision:"33a24fc6c5f41f01236f16ce016d6a04"},{url:"/me.jpg",revision:"3d06f499a532d1a61d8edfdaf1f17d22"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.jpeg",revision:"dd69d71df899b3c1fb4c8de87046325c"},{url:"/og_full.jpeg",revision:"2653f8e6ac4f80b833e49b5ec765e587"},{url:"/robots.txt",revision:"c92baed611b02376a340b7fe3b0bcfb6"},{url:"/rss.json",revision:"d2e6a7f0e3357585929901aa40ded760"},{url:"/rss.xml",revision:"cc81f8d006d7c4647cdc1e179de80b47"},{url:"/site.webmanifest",revision:"c74fe75002aaeca7e64bbc0fc97b6909"},{url:"/sitemap-0.xml",revision:"b2e715720d20059bbd314949ed4785e8"},{url:"/sitemap.xml",revision:"f246918e62b546b4a6be4d121a944ab3"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/webui-dark-rounded.png",revision:"86557428b10872f2e538503404ace833"},{url:"/webui-dark.png",revision:"144a7d47946f3301af0022cef3fc9a2d"},{url:"/webui-footer-dark.png",revision:"854ca0393e71fda39d62101ace9cc613"},{url:"/webui-footer-light.png",revision:"cb7db61647f1cfd6992e629e65640b27"},{url:"/webui-light-rounded.png",revision:"19abcf304e67db62e64318d32ac8e840"},{url:"/webui-light.png",revision:"f8de129c18e2ff68d5c05a9251f26ca9"},{url:"/webui-logo-dark.png",revision:"0af1a24ca0179ffec0ee82acfdee2818"},{url:"/webui-logo-light.png",revision:"ca9bc4047ae956481e308e9d6cc050e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
