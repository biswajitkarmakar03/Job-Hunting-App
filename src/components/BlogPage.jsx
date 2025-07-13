import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const blogs = [
  {
    title: "AI in 2025: What to Expect",
    description: "Discover how artificial intelligence is shaping industries and everyday life.",
    date: "July 10, 2025",
    category: "Technology",
    image: "https://source.unsplash.com/featured/?technology",
  },
  {
    title: "Why Mental Health Needs More Awareness",
    description: "Let’s talk about mental health, its impact, and how to support those in need.",
    date: "July 9, 2025",
    category: "Health",
    image: "https://source.unsplash.com/featured/?mentalhealth",
  },
  {
    title: "Startup Culture: Boom or Bubble?",
    description: "The rise of startup ecosystems and what entrepreneurs need to watch out for.",
    date: "July 8, 2025",
    category: "Business",
    image: "https://source.unsplash.com/featured/?startup",
  },
  // Add more posts...
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === "All" || blog.category === selectedCategory) &&
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", "Technology", "Health", "Business"];

  return (
    <section className="container mx-auto p-4 pt-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Latest News & Blogs</h2>
        <p className="text-gray-500">Stay updated with trending stories</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2"
        />
        <div className="flex gap-2 mt-2 md:mt-0">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog, index) => (
          <Card key={index} className="shadow-lg rounded-2xl overflow-hidden">
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date} • {blog.category}</p>
              <p className="text-gray-600">{blog.description}</p>
              <Button variant="link" className="mt-2 p-0 text-blue-600">Read More →</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-10">
        <Button variant="outline">Load More</Button>
      </div>
    </section>
  );
};

export default BlogPage;
