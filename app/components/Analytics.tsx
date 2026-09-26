'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    __labAnalytics?: { pageview: () => void };
  }
}

/**
 * This site uses client-side routing, so following a link swaps the page
 * without a document load and analytics.js would only ever count the first
 * one. This records the rest.
 *
 * The initial load is skipped deliberately — count.js already counted it, and
 * firing here as well would double every entry page.
 */
export default function Analytics() {
  const pathname = usePathname();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    window.__labAnalytics?.pageview();
  }, [pathname]);

  return null;
}
