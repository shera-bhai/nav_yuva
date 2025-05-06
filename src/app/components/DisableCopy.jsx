import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include a CDN script to disable copying */}
        <Script
          src="https://cdn.jsdelivr.net/npm/nocopy@0.0.2/nocopy.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="disable-copy"
          strategy="afterInteractive"
        >
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Disable text selection
              document.body.style.userSelect = 'none';
              document.body.style.webkitUserSelect = 'none';
              document.body.style.mozUserSelect = 'none';
              document.body.style.msUserSelect = 'none';

              // Disable right-click
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                alert('Right-click is disabled on this site.');
              });

              // Disable copy keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                if (
                  (e.ctrlKey && (e.key === 'c' || e.key === 'x')) ||
                  (e.metaKey && (e.key === 'c' || e.key === 'x'))
                ) {
                  e.preventDefault();
                  alert('Copying is disabled on this site.');
                }
              });

              // Disable copy and cut events
              document.addEventListener('copy', function(e) {
                e.preventDefault();
                alert('Copying is disabled on this site.');
              });
              document.addEventListener('cut', function(e) {
                e.preventDefault();
                alert('Cutting is disabled on this site.');
              });
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}