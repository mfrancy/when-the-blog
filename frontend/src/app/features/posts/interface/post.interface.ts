export interface Post {
    id: string;
    title: string;
    contain: string;
    author: string;
    tags: string[];
    category: string;
    image: string;
    imageAlt: string;
    publishedAt: Date
}