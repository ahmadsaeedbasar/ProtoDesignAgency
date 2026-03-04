import React from 'react';
type BadgeVariant = 'new' | 'beta' | 'coming-soon' | 'live' | 'active';

interface StatusBadgeProps {
  variant: BadgeVariant;
}

const badgeStyles = {
  new: 'bg-[var(--status-new-bg)] text-[var(--status-new-text)] border-[var(--status-new-border)]',
  beta: 'bg-[var(--status-beta-bg)] text-[var(--status-beta-text)] border-[var(--status-beta-border)]',
  'coming-soon': 'bg-[var(--status-coming-bg)] text-[var(--status-coming-text)] border-[var(--status-coming-border)]',
  live: 'bg-[var(--status-live-bg)] text-[var(--status-live-text)] border-[var(--status-live-border)]',
  active: 'bg-[var(--status-active-bg)] text-[var(--status-active-text)] border-[var(--status-active-border)]',
};

const badgeLabels = {
  new: 'New',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
  live: 'Live',
  active: 'Active',
};

export function StatusBadge({ variant }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${badgeStyles[variant]}`}
    >
      {badgeLabels[variant]}
    </span>
  );
}

