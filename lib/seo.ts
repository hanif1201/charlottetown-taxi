export const SITE_URL = 'https://charlottetowntaxi.ca';

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TaxiService', 'LocalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: 'Charlottetown Taxi',
      description:
        'Licensed 24/7 taxi and private transportation across Prince Edward Island — city rides, YYG airport transfers, cruise and ferry transfers, golf transportation, Island tours, corporate, wedding and medical travel.',
      url: `${SITE_URL}/`,
      telephone: '+1-782-377-7533',
      email: 'info@charlottetowntaxi.ca',
      priceRange: '$$',
      image: `${SITE_URL}/wp-content/uploads/charlottetown-taxi-group-transport.jpg`,
      logo: `${SITE_URL}/wp-content/uploads/charlottetown-taxi-logo-mark.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '72 Kensington Road',
        addressLocality: 'Charlottetown',
        addressRegion: 'PE',
        postalCode: 'C1A 5J2',
        addressCountry: 'CA',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 46.25, longitude: -63.13 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Charlottetown' },
        { '@type': 'City', name: 'Stratford' },
        { '@type': 'City', name: 'Cornwall' },
        { '@type': 'City', name: 'Summerside' },
        { '@type': 'City', name: 'Montague' },
        { '@type': 'City', name: 'Souris' },
        { '@type': 'AdministrativeArea', name: 'Prince Edward Island' },
      ],
      paymentAccepted: 'Cash, Interac Debit, Visa, Mastercard, American Express, Apple Pay',
      currenciesAccepted: 'CAD',
      sameAs: [
        'https://www.facebook.com/charlottetowntaxi',
        'https://www.instagram.com/charlottetowntaxi',
        'https://www.tiktok.com/@charlottetowntaxi',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transportation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi Service' } },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Airport Transfers (YYG)' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Cruise & Ferry Transfers' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Golf Transportation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Island Tours' } },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Corporate Transportation' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Transportation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hourly Chauffeur' } },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Long Distance Transportation' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Transportation' } },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Charlottetown Taxi',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/wp-content/uploads/charlottetown-taxi-logo-mark.png`,
      sameAs: [
        'https://www.facebook.com/charlottetowntaxi',
        'https://www.instagram.com/charlottetowntaxi',
        'https://www.tiktok.com/@charlottetowntaxi',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-782-377-7533',
        contactType: 'reservations',
        areaServed: 'CA',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Charlottetown Taxi',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }],
    },
  ],
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas of Prince Edward Island do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Prince Edward Island. Charlottetown, Stratford and Cornwall are fixed-fare zones; Summerside, Cavendish, Montague, Souris, Victoria-by-the-Sea and every other community are quoted before you travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your fares regulated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our starting fare of $8.50 is the standard regulated rate for licensed taxi operators in Charlottetown, and airport journeys follow the tariff published by the Charlottetown Airport Authority. Every fare is confirmed by dispatch before you travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are taxi fares in Charlottetown set by the City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The City of Charlottetown Taxi Bylaw #2021-TX-01 divides the city into six zones and sets the fare for each: Zone 1 $8.50, Zone 2 $9.25, Zone 3 $9.75, Zone 4 $10.25, Zone 5 $10.75 and Zone 6 $11.25 to $18.00, all including HST. East-west travel adds $0.25 for each zone boundary crossed after the first, and additional passengers over 11 are $2.00 each. Airport fares are set separately with the Charlottetown Airport Authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Charlottetown taxi refuse card payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Section 12.1 of the City of Charlottetown Taxi Bylaw requires every taxi operator to accept electronic payments and prohibits refusing a passenger solely because they wish to pay by credit or debit card. Operators must also issue a receipt on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an extra charge for a wheelchair in a Charlottetown taxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Section 12.2 of the City of Charlottetown Taxi Bylaw prohibits any additional fee for transporting wheelchairs, or for escorting passengers with disabilities to and from the first accessible door of their pickup or destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you operate 24 hours a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dispatch runs around the clock, every day of the year, including overnight, holidays and through winter storms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or text +1 (782) 377-7533, message us on WhatsApp, or use the booking form on this page. Every booking is confirmed personally by dispatch, usually within minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge surge pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Fares stay the same during peak hours, cruise days, holidays and severe weather. The price quoted is the price you pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash, Interac debit, Visa, Mastercard, American Express and Apple Pay. A card machine is carried in every vehicle, and corporate accounts can be invoiced monthly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you meet flights at Charlottetown Airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We monitor your flight number and adjust the pickup automatically, so an early landing or a delay costs you nothing. Drivers can meet you inside Arrivals with a name board or at the curb.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you carry golf clubs and oversized luggage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tell us what you are bringing when you book and we will assign an SUV or van with the space for it rather than a sedan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run private Island tours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Private tours cover Green Gables Heritage Place, Cavendish, North Rustico, Brackley Beach, Point Prim Lighthouse and other stops you choose, at your own pace with a local driver.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your drivers licensed and insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every driver and vehicle is licensed and commercially insured under Prince Edward Island regulation. We are also a BBB Accredited Business and a member of the Tourism Industry Association of P.E.I.',
      },
    },
  ],
};
