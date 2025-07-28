# Content Management Guide

This website uses markdown files for easy content management. All content is stored in the `content/` directory and automatically loaded by the website.

## Directory Structure

```
content/
├── people/           # Lab member profiles
├── publications/     # Research publications
├── news/            # News and announcements
└── misc/            # Lab culture and other content
```

## Adding Lab Members

### 1. Create a new markdown file in `content/people/`

File name: `firstname-lastname.md`

Example: `content/people/alex-johnson.md`

### 2. Use this template:

```markdown
---
name: "Alex Johnson"
title: "Ph.D. Student"
email: "alex.johnson@university.edu"
research: "Reinforcement Learning"
image: "/path/to/photo.jpg"
category: "graduate"  # faculty, postdoc, graduate, undergraduate
order: 1
---

Alex is researching reinforcement learning algorithms for autonomous systems.

## Research Focus

- Reinforcement learning for robotics
- Multi-agent systems
- Safe AI

## Education

- B.S. in Computer Science, University of California, Berkeley
- Currently pursuing Ph.D. in Computer Science

## Recent Work

- Developed novel RL algorithms for autonomous vehicles
- Published 3 papers in top-tier conferences
- Won Best Student Paper Award at ICML 2023
```

### 3. Category Options

- `faculty`: Principal investigators and faculty members
- `postdoc`: Postdoctoral researchers
- `graduate`: Ph.D. and M.S. students
- `undergraduate`: Undergraduate researchers

### 4. Adding Profile Pictures

To add a profile picture for a lab member:

1. **Save the image** in `public/people/` directory
2. **Use the filename** in the `image` field of the markdown file
3. **Recommended format**: JPG or PNG, 300x300 pixels or larger
4. **File naming**: Use lowercase with hyphens (e.g., `firstname-lastname.jpg`)

Example:
```yaml
image: "/people/wei-gong.jpg"
```

If no image is provided, the website will display the person's initials in a circular background.

## Adding Publications

### 1. Create a new markdown file in `content/publications/`

File name: `year-number.md` (e.g., `2024-01.md`)

### 2. Use this template:

```markdown
---
title: "Your Paper Title"
authors: "Author1, A., Author2, B., Author3, C."
venue: "Conference or Journal Name"
doi: "10.1234/paper.doi"
pdf: "/papers/paper.pdf"
year: "2024"
researchArea: "Computer Vision"
order: 1
---

Brief abstract or description of the paper.

## Abstract

Detailed abstract of the paper.

## Key Contributions

- Contribution 1
- Contribution 2
- Contribution 3

## Results

Our method achieves:
- 5.2% improvement in accuracy
- 40% reduction in computational cost
```

## Adding News

### 1. Create a new markdown file in `content/news/`

File name: `slug-title.md` (e.g., `new-grant-award.md`)

### 2. Use this template:

```markdown
---
title: "News Title"
date: "2024-03-15"
category: "Awards"  # Awards, Publications, People, Funding, Conferences, Education
featured: true      # true for featured news, false for regular news
excerpt: "Brief description of the news item."
image: "/news/image.jpg"
order: 1
---

Full news content goes here.

## Details

Additional details about the news.

## Impact

How this affects the lab or research.
```

## Adding Lab Culture Content

### 1. Create a new markdown file in `content/misc/`

### 2. Use this template:

```markdown
---
title: "Lab Values & Culture"
type: "values"
order: 1
---

# Our Values

## Collaboration 🤝

Description of collaboration value.

## Innovation 💡

Description of innovation value.

# Lab Activities

## Coffee & Code ☕

Description of the activity.
```

## Frontmatter Fields

### People Files
- `name`: Full name
- `title`: Position/title
- `email`: Email address
- `research`: Research interests
- `image`: Path to photo
- `category`: Member category
- `order`: Display order

### Publication Files
- `title`: Paper title
- `authors`: Author list
- `venue`: Conference/journal
- `doi`: DOI link
- `pdf`: Path to PDF
- `year`: Publication year
- `researchArea`: Research area
- `order`: Display order

### News Files
- `title`: News title
- `date`: Publication date
- `category`: News category
- `featured`: Featured status
- `excerpt`: Brief description
- `image`: Featured image
- `order`: Display order

## Markdown Features

You can use standard markdown syntax:

### Text Formatting
- **Bold text**
- *Italic text*
- `Code snippets`

### Lists
- Bullet points
- Numbered lists

### Headers
```markdown
# Main Header
## Subheader
### Sub-subheader
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/path/to/image.jpg)
```

## Tips for Content Management

1. **File Naming**: Use lowercase, hyphens for spaces, and descriptive names
2. **Images**: Store images in the `public/` directory and reference them with absolute paths
3. **Ordering**: Use the `order` field to control display order within categories
4. **Categories**: Be consistent with category names across files
5. **Dates**: Use YYYY-MM-DD format for dates
6. **Content**: Write clear, concise content that's easy to read

## Adding New Content Types

To add a new content type:

1. Create a new directory in `content/`
2. Add markdown files with appropriate frontmatter
3. Update the corresponding page component to load from markdown files
4. Add any necessary styling or layout components

## Example: Adding a New Lab Member

1. Create `content/people/maria-garcia.md`:
```markdown
---
name: "Maria Garcia"
title: "Undergraduate Researcher"
email: "maria.garcia@university.edu"
research: "Computer Vision"
image: "/people/maria-garcia.jpg"
category: "undergraduate"
order: 1
---

Maria helps with computer vision experiments and data collection.

## Current Projects

- Object detection in medical images
- Data preprocessing for deep learning models
```

2. The website will automatically display Maria in the Undergraduate Researchers section.

## Troubleshooting

- **Content not appearing**: Check file naming and frontmatter syntax
- **Images not loading**: Verify image paths are correct
- **Ordering issues**: Check the `order` field values
- **Categories not working**: Ensure category names match exactly

## Need Help?

If you have questions about content management, check:
1. This guide
2. Existing markdown files for examples
3. The markdown processing code in `lib/markdown.ts` 