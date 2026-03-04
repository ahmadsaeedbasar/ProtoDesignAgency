import { describe, expect, it } from 'vitest';
import { LEGACY_ROUTES, ROUTES, ROUTE_SEGMENTS } from './routePaths';

describe('route paths', () => {
  it('contains expected public routes', () => {
    expect(ROUTES.home).toBe('/');
    expect(ROUTES.services).toBe('/services');
    expect(ROUTES.products).toBe('/products');
    expect(ROUTES.internship).toBe('/internship');
    expect(ROUTES.research).toBe('/research');
    expect(ROUTES.contact).toBe('/contact');
  });

  it('keeps legacy internee redirect path', () => {
    expect(LEGACY_ROUTES.internee).toBe('/internee');
    expect(ROUTE_SEGMENTS.internship).toBe('internship');
  });
});