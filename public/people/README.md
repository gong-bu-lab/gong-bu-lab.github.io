# Profile Pictures Directory

This directory contains profile pictures for lab members.

## How to Add Profile Pictures

1. **Add your image file** to this directory (e.g., `wei-gong.jpg`, `alex-johnson.png`)
2. **Update the markdown file** in `content/people/` to reference your image:
   ```yaml
   image: "/people/your-filename.jpg"
   ```

## Supported Formats
- JPG/JPEG
- PNG
- WebP
- SVG

## Recommended Image Specifications
- **Size**: 300x300 pixels or larger (square aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 500KB for optimal loading
- **Style**: Professional headshot with neutral background

## File Naming Convention
Use lowercase letters and hyphens: `firstname-lastname.jpg`

Examples:
- `wei-gong.jpg`
- `alex-johnson.png`
- `sarah-chen.jpg`

## Fallback Behavior
If no image is provided or the image fails to load, the website will display the person's initials in a circular background. 