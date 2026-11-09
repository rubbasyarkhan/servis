import { createClient, type ClientConfig } from 'next-sanity';
import { projectId, dataset, apiVersion, isSanityConfigured } from './config';

export const clientConfig: ClientConfig = {
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
};

export const sanityClient = createClient(clientConfig);

/**
 * Fetch wrapper that only queries Sanity if credentials are configured,
 * otherwise returns null so callers can seamlessly fall back to local seed data.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = []
): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: {
        revalidate: 60, // ISR cache for 60 seconds
        tags,
      },
    });
  } catch (error) {
    console.warn('Sanity query error (falling back to local data):', error);
    return null;
  }
}
