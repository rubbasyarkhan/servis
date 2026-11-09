import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { projectId, dataset } from './config';

const imageBuilder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

/**
 * Returns an image URL builder for a Sanity image asset.
 */
export function urlForImage(source: Image | string | unknown) {
  if (!imageBuilder || !source) return null;
  return imageBuilder.image(source as any).auto('format').fit('max');
}
