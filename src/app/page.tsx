import React from 'react';
import { Metadata } from 'next';
import { HomePageClient } from '@/components/home/HomePageClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/utils';
import { getMainHubLocation } from '@/lib/cms/api';
import { getCloudinaryUrl } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Commercial & Residential Restoration Services Near You | Service Squad',
  description:
    'The premier disaster restoration contractor near you, Service Squad is available 24 hours for commercial & residential property emergencies like water damage, fire cleanup, mold remediation & turnkey reconstruction.',
  openGraph: {
    title: 'Commercial & Residential Restoration Services Near You | Service Squad',
    description:
      'Service Squad is available 24 hours for commercial & residential property emergencies like water damage, fire cleanup, mold remediation & more.',
    type: 'website',
    images: [
      {
        url: getCloudinaryUrl('/logo.webp')
      }
    ]
  }
};

export default async function HomePage() {
  const mainHub = await getMainHubLocation();
  const localBusinessSchema = generateLocalBusinessSchema(mainHub);

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <HomePageClient />
    </>
  );
}
