# Assets Required for Production

This document lists all assets that need to be created and added before the website can go live.

## Images Needed

### Hero Section
- **vaulti-hero.png** (600x500px)
  - High-quality product photo showing Vaulti piggy bank
  - Multiple color variants visible
  - Professional studio lighting
  - Currently: SVG placeholder

- **vaulti-hero.webp** (600x500px)
  - WebP version of hero image for better performance
  - Currently: Not present

### OpenGraph / Social Media
- **vaulti-og-1200x630.png** (1200x630px)
  - Social media share image
  - Should include product photo and tagline
  - Optimized for Facebook, Twitter, LinkedIn
  - Currently: SVG placeholder

### Customer Reviews
- **avatar-1.jpg** (48x48px) - Maria's avatar
- **avatar-2.jpg** (48x48px) - Jan's avatar
- **avatar-3.jpg** (48x48px) - Anna's avatar
  - Real customer photos or professional avatars
  - Currently: SVG placeholders with initials

### Video Section
- **vaulti-video-poster.jpg** (1920x1080px)
  - Poster frame for video player
  - Should be visually appealing still from the video
  - Currently: SVG placeholder

## Videos Needed

### Product Demo
- **vaulti-demo.webm** (1920x1080px, WebM format)
  - Primary video format (best compression)
  - 30-60 seconds demonstration
  - Shows product features, AirTag compartment, personalization
  - Currently: Not present

- **vaulti-demo.mp4** (1920x1080px, MP4 format)
  - Fallback format for browsers without WebM support
  - Same content as WebM version
  - Currently: Not present

## Image Specifications

### Format Guidelines
- **PNG**: Use for images requiring transparency
- **WebP**: Use for better compression (primary format)
- **JPG**: Use for photos without transparency
- **SVG**: Keep for icons and vector graphics

### Quality Guidelines
- Export at 2x resolution for retina displays
- Compress images without visible quality loss
- Target file sizes:
  - Hero images: < 200KB
  - Avatars: < 20KB each
  - OG image: < 300KB
  - Video poster: < 150KB

### Optimization Tools
```bash
# Convert to WebP
cwebp image/vaulti-hero.png -o image/vaulti-hero.webp

# Optimize PNG
pngquant image/vaulti-hero.png --output image/vaulti-hero.png

# Optimize JPG
jpegoptim --max=85 image/*.jpg
```

## Current Status

✅ **Completed:**
- SVG placeholders for all images
- Directory structure
- Image references in HTML
- Responsive image handling

⏳ **Pending:**
- Professional product photography
- Customer avatar photos
- Demo video recording and editing
- Final image optimization

## Next Steps

1. **Photography Session**
   - Hire professional photographer
   - Shoot Vaulti in all color variants
   - Capture AirTag integration
   - Get lifestyle shots with children (with parental consent)

2. **Video Production**
   - Script the demo video
   - Record product demonstration
   - Edit and add Polish/Dutch/English captions
   - Export in WebM and MP4 formats

3. **Customer Content**
   - Get permission from real customers for testimonials
   - Collect photos and quotes
   - Ensure GDPR compliance

4. **Final Integration**
   - Replace all SVG placeholders with real assets
   - Test on multiple devices and browsers
   - Verify load times and performance
   - Run Lighthouse audit

## Asset Delivery Format

Please deliver assets in the following structure:
```
image/
  ├── vaulti-hero.png
  ├── vaulti-hero.webp
  ├── vaulti-og-1200x630.png
  ├── avatar-1.jpg
  ├── avatar-2.jpg
  ├── avatar-3.jpg
  └── vaulti-video-poster.jpg

video/
  ├── vaulti-demo.webm
  └── vaulti-demo.mp4
```

## Questions?

Contact: info@vaulti.nl
