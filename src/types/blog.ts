export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  image: string;
  category: string;
  author: BlogAuthor;
  publishedAt: string;
  content?: any;
  isSanity?: boolean;
}

export interface BlogAuthor {
  name: string;
  image: string;
}
