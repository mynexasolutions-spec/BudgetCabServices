"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Road Trips to Take This Summer",
    excerpt: "Discover the most scenic routes and hidden gems for your ultimate summer road trip adventure.",
    category: "Travel Guide",
    author: {
      name: "Sarah Jenkins",
      avatar: "/images/blog/blog-two-user-1-1.jpg"
    },
    date: "August 15, 2026",
    comments: 12,
    image: "/images/blog/blog-2-1.jpg",
    slug: "top-10-road-trips-summer"
  },
  {
    id: 2,
    title: "How to Choose the Right Cab Service for Airport Transfers",
    excerpt: "Ensure a stress-free start to your journey with these essential tips for booking airport transfers.",
    category: "Tips & Tricks",
    author: {
      name: "David Chen",
      avatar: "/images/blog/blog-two-user-1-2.jpg"
    },
    date: "August 12, 2026",
    comments: 8,
    image: "/images/blog/blog-2-2.jpg",
    slug: "choose-right-cab-airport-transfers"
  },
  {
    id: 3,
    title: "The Future of Intercity Travel: What to Expect in 2027",
    excerpt: "From electric fleets to AI-driven routing, explore how intercity cab services are evolving.",
    category: "Industry News",
    author: {
      name: "Emily Rodriguez",
      avatar: "/images/blog/blog-two-user-1-3.jpg"
    },
    date: "August 05, 2026",
    comments: 24,
    image: "/images/blog/blog-2-3.jpg",
    slug: "future-of-intercity-travel-2027"
  },
  {
    id: 4,
    title: "A Guide to Safe Night Travel in Cabs",
    excerpt: "Safety first! Learn the best practices for secure and comfortable late-night cab rides.",
    category: "Safety",
    author: {
      name: "Michael Chang",
      avatar: "/images/blog/blog-two-user-1-4.jpg"
    },
    date: "July 28, 2026",
    comments: 15,
    image: "/images/blog/blog-2-4.jpg",
    slug: "guide-to-safe-night-travel"
  },
  {
    id: 5,
    title: "Why Corporate Cab Tie-ups Are Boosting Employee Productivity",
    excerpt: "Explore the benefits of dedicated corporate transportation for employee well-being and punctuality.",
    category: "Business",
    author: {
      name: "Sarah Jenkins",
      avatar: "/images/blog/blog-two-user-1-1.jpg"
    },
    date: "July 20, 2026",
    comments: 5,
    image: "/images/blog/blog-2-5.jpg",
    slug: "corporate-cab-tie-ups-productivity"
  },
  {
    id: 6,
    title: "Exploring the City: 5 Must-Visit Historical Landmarks",
    excerpt: "Book a local hourly rental and dive into the rich history of the city's most famous landmarks.",
    category: "Travel Guide",
    author: {
      name: "David Chen",
      avatar: "/images/blog/blog-two-user-1-2.jpg"
    },
    date: "July 15, 2026",
    comments: 19,
    image: "/images/blog/blog-2-6.jpg",
    slug: "exploring-city-historical-landmarks"
  }
];

export default function BlogGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0b0e14] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#23293a] to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f26522]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading text-center"
          >
            Latest <span className="text-[#f26522]">News</span> & Articles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-[16px] sm:text-[16px] mt-3"
          >
            Stay updated with the latest travel tips, industry news, and guides for an unforgettable journey.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-[#131722] rounded-2xl border border-[#23293a] overflow-hidden hover:border-[#f26522]/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(242,101,34,0.1)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#f26522] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#f59e0b]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#f59e0b]" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[19px] font-bold text-white mb-3 leading-snug group-hover:text-[#f59e0b] transition-colors line-clamp-2">
                  <Link href={`#`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-3 text-[16px] line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer (Author & Read More) */}
                <div className="flex items-center justify-between pt-3 border-t border-[#23293a] mt-auto">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#23293a] flex items-center justify-center bg-[#1c2230] text-[#f59e0b] font-bold text-lg uppercase">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {post.author.name}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <Link 
                    href={`#`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1c2230] text-gray-400 group-hover:bg-[#f26522] group-hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination or Load More (Dummy) */}
        <div className="mt-16 text-center">
          <button className="px-5 py-3 bg-transparent border border-[#f26522] text-[#f26522] font-bold rounded-[5px] hover:bg-[#f26522] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(242,101,34,0.15)] hover:shadow-[0_0_25px_rgba(242,101,34,0.3)]">
            Load More Articles
          </button>
        </div>

      </div>
    </section>
  );
}
