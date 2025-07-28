import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownFile {
  slug: string;
  content: string;
  data: Record<string, any>;
}

export function getContentDirectory() {
  return contentDirectory;
}

export function getAllMarkdownFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(fullPath);
  return fileNames.filter(fileName => fileName.endsWith('.md'));
}

export function getMarkdownFile(directory: string, slug: string): MarkdownFile | null {
  const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    data,
  };
}

export function getAllMarkdownFilesInDirectory(directory: string): MarkdownFile[] {
  const fileNames = getAllMarkdownFiles(directory);
  
  return fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getMarkdownFile(directory, slug);
    })
    .filter((file): file is MarkdownFile => file !== null)
    .sort((a, b) => {
      // Sort by date if available, otherwise by title
      if (a.data.date && b.data.date) {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
      }
      if (a.data.title && b.data.title) {
        return a.data.title.localeCompare(b.data.title);
      }
      return 0;
    });
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getMarkdownFileBySlug(directory: string, slug: string): MarkdownFile | null {
  return getMarkdownFile(directory, slug);
}

export function getAllSlugs(directory: string): string[] {
  const fileNames = getAllMarkdownFiles(directory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
} 