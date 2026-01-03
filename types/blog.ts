export interface BlogPost {
  id: string;
  restaurantId: string;
  restaurantName: string;
  title: string;
  excerpt: string;
  content: string;
  cuisine: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
}
