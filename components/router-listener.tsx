'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignals } from '@preact/signals-react/runtime';
import { effect } from '@preact/signals-react';
import { RouterEvent } from '@/utils/app.event';

export const RouterListener = () => {
  useSignals();
  const router = useRouter();

  useEffect(() => {
    const dispose = effect(() => {
      const { pathname, query } = RouterEvent.value;

      if (pathname) {
        // Construct URL with query params if they exist
        let url = pathname;
        if (query && Object.keys(query).length > 0) {
          const searchParams = new URLSearchParams(query);
          url = `${pathname}?${searchParams.toString()}`;
        }

        router.push(url);

        // Reset the signal to avoid redundant push on re-render
        // However, we need to be careful not to trigger another effect if we use value directly
        // Usually, setting it to {} is safe if we check for pathname
        RouterEvent.peek().pathname = '';
      }
    });

    return () => dispose();
  }, [router]);

  return null;
};
