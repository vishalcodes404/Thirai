'use client';
import { useEffect } from 'react';

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    const observeAll = () => {
      const els = document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)');
      els.forEach(el => observer.observe(el));
    };

    observeAll();

    // Observe subtree additions so dynamically loaded/filtered content is always detected
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, deps);
}
