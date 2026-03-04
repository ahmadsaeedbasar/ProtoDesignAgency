import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { ROUTES } from '../routePaths';

export default function NotFound() {
  return (
    <div className="page-shell min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="text-center surface-panel card-pad md:p-12 max-w-2xl w-full">
        <div className="text-9xl font-bold text-[var(--primary)]/20 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Page Not Found</h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to={ROUTES.home} className="cta-primary px-8 py-4">
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

