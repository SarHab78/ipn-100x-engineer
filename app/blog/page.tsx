import BlogPostCard from '@/components/BlogPostCard';
import blogData from '@/data/blog-posts.json';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';

export default function BlogPage() {
  const posts: BlogPost[] = blogData.posts;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Restaurant Blog</h1>
              <p className="mt-1 text-sm text-gray-500">
                Discover stories from our featured restaurants
              </p>
            </div>
            <Link
              href="/"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Back to Restaurant Finder
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg">No blog posts yet</p>
            <p className="text-gray-400 text-sm mt-2">
              Check back soon for restaurant stories and reviews
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Restaurant Finder - AI Workshop Demo Application
          </p>
        </div>
      </footer>
    </main>
  );
}
