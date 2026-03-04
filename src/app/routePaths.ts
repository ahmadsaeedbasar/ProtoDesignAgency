export const ROUTES = {
  home: '/',
  services: '/services',
  products: '/products',
  internship: '/internship',
  research: '/research',
  contact: '/contact',
} as const;

export const LEGACY_ROUTES = {
  internee: '/internee',
} as const;

export const ROUTE_SEGMENTS = {
  services: 'services',
  products: 'products',
  internship: 'internship',
  internee: 'internee',
  research: 'research',
  contact: 'contact',
} as const;
