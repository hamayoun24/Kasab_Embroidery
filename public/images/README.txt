Drop your real assets into these folders. The site already references them
by exact filename — no code changes needed if you keep the names below.

public/
├── images/
│   ├── hero/
│   │   └── poster.jpg           (fallback image used before the hero video loads)
│   ├── about/
│   │   ├── factory-1.jpg        (used on Home — About teaser — portrait)
│   │   ├── factory-2.jpg        (used on About page — portrait)
│   │   ├── detail-1.jpg         (small overlay image on Home teaser)
│   │   ├── capability-1.jpg
│   │   ├── capability-2.jpg
│   │   ├── capability-3.jpg
│   │   └── capability-4.jpg
│   ├── services/
│   │   ├── aari.jpg
│   │   ├── multi-head.jpg
│   │   ├── sequin.jpg
│   │   ├── double-sequin.jpg
│   │   ├── 28-head.jpg
│   │   └── custom.jpg
│   ├── gallery/
│   │   ├── 01.jpg ... 12.jpg    (portrait/landscape mix looks best in masonry)
│   ├── clients/
│   │   ├── limelight.png
│   │   ├── nishat.png
│   │   ├── sapphire.png
│   │   ├── khaadi.png
│   │   ├── gul-ahmed.png
│   │   └── generation.png
│   └── texture.png              (optional subtle texture overlay)
└── videos/
    ├── hero.mp4                 (looping background video on homepage hero)
    ├── gallery-01.mp4
    └── gallery-02.mp4

Notes:
- Images should ideally be WebP or compressed JPG under 300 KB each.
- The hero video should be short (10-20 s), silent, H.264 MP4 under 5 MB.
- If an image is missing, the site degrades gracefully to a dark placeholder.
- Client logo colors are overridden to white/grayscale in the marquee.
  Use transparent PNG or SVG logos for best results.
