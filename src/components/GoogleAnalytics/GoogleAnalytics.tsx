'use client';

import { GOOGLE_ANALYTICS_ID } from '@/utils/gtag';
import Script from 'next/script';

function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
