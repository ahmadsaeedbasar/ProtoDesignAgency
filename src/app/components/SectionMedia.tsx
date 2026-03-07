import React from 'react';

export interface SectionMediaItem {
  src: string;
  alt: string;
  label: string;
}

interface SectionMediaProps {
  media: SectionMediaItem;
}

export function SectionMedia({ media }: SectionMediaProps) {
  return (
    <aside className="section-media media-sticky">
      <div className="media-frame">
        <img src={media.src} alt={media.alt} className="media-image" loading="lazy" />
        <div className="media-overlay" />
        <span className="media-tag">{media.label}</span>
      </div>
    </aside>
  );
}

