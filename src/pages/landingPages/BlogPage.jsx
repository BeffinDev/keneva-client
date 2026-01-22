import { motion } from 'framer-motion';
import { BsCalendar3, BsPerson, BsChatDots } from 'react-icons/bs';
import BreadcrumbHeroSection from '../../components/landing/BreadcrumbHeroSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewportOnce = { once: true, amount: 0.3 };

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Construction Trends for 2024',
    excerpt: 'Discover the latest trends shaping the construction industry this year, from sustainable building materials to smart technology integration.',
    image: '/assets/img/blog/blog-1.jpg',
    date: '2024-01-15',
    author: 'John Smith',
    category: 'Industry Trends',
  },
  {
    id: 2,
    title: 'Sustainable Building Practices',
    excerpt: 'Learn how eco-friendly construction methods are revolutionizing the way we build and their impact on the environment.',
    image: '/assets/img/blog/blog-2.jpg',
    date: '2024-01-10',
    author: 'Sarah Johnson',
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'Project Management Best Practices',
    excerpt: 'Essential tips and strategies for successful construction project management from planning to completion.',
    image: '/assets/img/blog/blog-3.jpg',
    date: '2024-01-05',
    author: 'Mike Wilson',
    category: 'Management',
  },
  {
    id: 4,
    title: 'The Future of Smart Buildings',
    excerpt: 'Exploring how IoT and automation are transforming modern buildings into intelligent, responsive spaces.',
    image: '/assets/img/blog/blog-4.jpg',
    date: '2023-12-28',
    author: 'Emily Davis',
    category: 'Technology',
  },
  {
    id: 5,
    title: 'Renovation vs New Construction',
    excerpt: 'A comprehensive guide to help you decide between renovating existing structures or building new.',
    image: '/assets/img/blog/blog-5.jpg',
    date: '2023-12-20',
    author: 'David Brown',
    category: 'Planning',
  },
  {
    id: 6,
    title: 'Safety Standards in Construction',
    excerpt: 'Understanding the latest safety protocols and regulations that ensure worker protection on construction sites.',
    image: '/assets/img/blog/blog-6.jpg',
    date: '2023-12-15',
    author: 'Lisa Anderson',
    category: 'Safety',
  },
];

const categories = ['All', 'Industry Trends', 'Sustainability', 'Management', 'Technology', 'Planning', 'Safety'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <BreadcrumbHeroSection title={"Blog"} />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <BsCalendar3 />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <BsPerson />
                    {post.author}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition duration-300">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest industry insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
