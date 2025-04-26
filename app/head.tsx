// app/head.tsx

export default function Head() {
    return (
      <>
        {/* Title & Meta */}
        <title>AlphaBinet | Digital Solutions & Web Services</title>
        <meta
          name="description"
          content="Full-service digital agency specializing in web development, UI/UX design, e-commerce solutions, mobile apps, and digital marketing. Explore our portfolio and transform your digital presence."
        />
  
        {/* Preconnect for Performance (fonts, analytics, etc.) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.alphabinet.com",
            "name": "AlphaBinet",
            "description": "Professional digital services including web development, UI/UX design, e-commerce, mobile apps, and digital marketing.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "name": "Services",
              "description": "Comprehensive digital solutions",
              "significantLink": [
                "https://www.alphabinet.com#services",
                "https://www.alphabinet.com#about"
              ]
            }
          })}
        </script>
  
        {/* Favicon & Icons (optional) */}
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
  