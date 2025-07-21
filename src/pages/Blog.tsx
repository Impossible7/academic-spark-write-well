import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Writing a Compelling Research Paper",
    excerpt: "Master the art of academic writing with these proven strategies that will elevate your research papers and improve your academic success.",
    content: "Research paper writing is a fundamental skill that every student and academic professional must master...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-20",
    readTime: "8 min read",
    category: "Writing Tips",
    tags: ["Research", "Academic Writing", "Tips"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Understanding Scopus Indexing: A Complete Guide for Researchers",
    excerpt: "Learn everything you need to know about Scopus indexing, why it matters for your research career, and how to get your work published in Scopus journals.",
    content: "Scopus is one of the largest abstract and citation databases of peer-reviewed literature...",
    author: "Prof. Michael Chen",
    date: "2024-01-18",
    readTime: "12 min read",
    category: "Publication",
    tags: ["Scopus", "Journal", "Publication"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Future of Academic Writing: AI Tools and Human Expertise",
    excerpt: "Explore how artificial intelligence is transforming academic writing while maintaining the irreplaceable value of human expertise and creativity.",
    content: "The landscape of academic writing is rapidly evolving with the integration of AI technologies...",
    author: "Dr. Emily Williams",
    date: "2024-01-15",
    readTime: "10 min read",
    category: "Technology",
    tags: ["AI", "Writing", "Future"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Overcoming Writer's Block: Strategies for Academic Writers",
    excerpt: "Discover effective techniques to overcome writer's block and maintain productivity in your academic writing journey.",
    content: "Writer's block is a common challenge faced by academic writers at all levels...",
    author: "Prof. David Kumar",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Productivity",
    tags: ["Writing Block", "Productivity", "Tips"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Citation Styles Demystified: APA, MLA, Chicago, and More",
    excerpt: "Master the most common academic citation styles with our comprehensive guide to proper formatting and referencing.",
    content: "Proper citation is crucial for academic integrity and scholarly communication...",
    author: "Dr. Lisa Park",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Citation",
    tags: ["Citation", "APA", "MLA", "Chicago"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Building a Strong Thesis Statement: Foundation of Great Writing",
    excerpt: "Learn how to craft compelling thesis statements that provide clear direction and focus for your academic papers.",
    content: "A strong thesis statement is the backbone of any successful academic paper...",
    author: "Dr. James Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Writing Tips",
    tags: ["Thesis", "Writing", "Structure"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Writing Tips", "Publication", "Technology", "Productivity", "Citation"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Writosphere Blog</h1>
              <p className="text-xl opacity-90 mb-8">
                Insights, tips, and guidance for academic writing and research success
              </p>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="py-16 bg-background-light">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Featured Article</h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center text-sm text-text-dark/60">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-text-dark mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-text-dark/80 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-text-dark/60">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {featuredPost.date}
                          </div>
                        </div>
                        
                        <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center space-x-2">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Filter */}
        <div className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Latest Articles</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-text-dark/60">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-dark mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-text-dark/80 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-text-dark/60 mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <button className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center space-x-1">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-primary text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest articles, writing tips, and academic insights directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-text-dark"
                  />
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;