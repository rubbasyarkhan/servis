/**
 * Cloudinary Image Delivery Utility
 * 
 * Provides automated next-gen format conversion (WebP/AVIF via f_auto),
 * intelligent compression (q_auto), and responsive delivery.
 */

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: string | number;
  format?: string;
  crop?: string;
}

/**
 * Deterministically maps any local asset path into a valid Cloudinary public_id
 * replacing spaces, ampersands, and invalid characters with safe underscores.
 */
export function sanitizePathToPublicId(rawPath: string): string {
  let p = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  try {
    p = decodeURIComponent(p);
  } catch (e) {
    // Keep as is
  }

  // Strip file extension (.webp, .jpg, etc.)
  const dotIndex = p.lastIndexOf('.');
  const slashIndex = p.lastIndexOf('/');
  if (dotIndex > slashIndex && dotIndex !== -1) {
    p = p.slice(0, dotIndex);
  }

  // Clean path segments
  const sanitized = p
    .split('/')
    .map(segment => {
      return segment
        .replace(/&/g, 'and')
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_\-]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
    })
    .join('/');

  return `servicesquads/${sanitized}`;
}

/**
 * Resolves an asset path to its high-performance Cloudinary CDN URL.
 * 
 * When `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is configured:
 *   Returns `https://res.cloudinary.com/<cloud_name>/image/upload/f_auto,q_auto/<public_id>`
 * 
 * When NOT configured:
 *   Gracefully falls back to the local `/public` path for development and previews.
 */
export function getCloudinaryUrl(
  rawPath: string | undefined | null,
  options: CloudinaryTransformOptions = {}
): string {
  if (!rawPath) return '/default-service.webp';

  // Already an absolute URL
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
    return rawPath;
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (cloudName && cloudName !== 'your_cloud_name') {
    const transforms: string[] = ['f_auto', 'q_auto'];

    if (options.width) transforms.push(`w_${options.width}`);
    if (options.height) transforms.push(`h_${options.height}`);
    if (options.crop) transforms.push(`c_${options.crop}`);
    if (options.quality) transforms.push(`q_${options.quality}`);
    if (options.format) transforms.push(`f_${options.format}`);

    const transformStr = transforms.join(',');
    const publicId = sanitizePathToPublicId(rawPath);

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformStr}/${publicId}`;
  }

  // Fallback to local public file
  let cleanPath = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  return encodeURI(`/${cleanPath}`);
}
