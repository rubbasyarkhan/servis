import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const relativePath = slug.join('/');
  
  // Try direct disk path
  const fullPath = path.join(process.cwd(), 'public', 'dcs-images', relativePath);
  
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    const fileBuffer = fs.readFileSync(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.gif': 'image/gif',
      '.avif': 'image/avif',
    };
    const contentType = mimeTypes[ext] || 'image/jpeg';
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // Fallback to default service image
  const defaultImagePath = path.join(process.cwd(), 'public', 'default-service.webp');
  if (fs.existsSync(defaultImagePath)) {
    const defaultBuffer = fs.readFileSync(defaultImagePath);
    return new NextResponse(defaultBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  return new NextResponse(null, { status: 404 });
}
