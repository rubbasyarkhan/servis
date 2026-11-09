/**
 * Sanity CMS Configuration
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wtk1cisw';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

/**
 * Returns true if valid Sanity credentials have been provided in environment variables or default project.
 */
export const isSanityConfigured = Boolean(
  projectId && 
  projectId !== 'placeholder' &&
  projectId !== 'your_project_id' && 
  projectId !== 'your_sanity_project_id'
);
