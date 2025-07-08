// src/app/page.tsx
'use client';

import Hero from '../components/Hero';
import { ClassAnalyticsSection } from '../components/ClassAnalyticsSection';
import Sofware from '../components/Sofware';
import Realblog from '../components/Realblog';
import Awards from '../components/Awards';

export default function Home() {
  return (
    <>
      <Hero />
      <ClassAnalyticsSection />
      <Sofware />
      <Realblog/>
      <Awards />
    </>
  );
}
