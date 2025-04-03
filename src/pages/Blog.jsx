import React, { useState } from 'react';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [expandedPost, setExpandedPost] = useState(null); // State to track the expanded post
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const [isLoading, setIsLoading] = useState(false); // State to manage the loading state
  const [statusMessage, setStatusMessage] = useState(null); // State for status messages (success or error)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatusMessage('Please enter a valid email.');
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    // Simulating a subscription request (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('Successfully subscribed!');
      setEmail('');
    }, 2000);
  };

  const handleToggleDescription = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId); // Toggle visibility
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category); // Toggle visibility
  };

  return (
    <div className="bg-white text-gray-900 py-16 px-8 mt-16">
      {/* Blog Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Rex Labs Blog</h2>
        <p className="text-lg text-gray-700">Stay updated with the latest insights, tutorials, and news in the world of technology and web development.</p>
      </div>

      {/* Articles Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-8">
        {/* Articles List */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col gap-6">
            {/* Blog Post 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <h3 className="text-2xl font-semibold">The Future of Web Development: Trends to Watch</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra nunc quis diam vehicula, et vulputate odio scelerisque.</p>
              <button 
                onClick={() => handleToggleDescription(1)} 
                className="text-blue-500 mt-4 inline-block"
              >
                {expandedPost === 1 ? "Show Less" : "Read more →"}
              </button>
              {expandedPost === 1 && (
                <p className="text-gray-600 mt-4">
                  Web development is constantly evolving. With the rise of AI, serverless architectures, and other emerging technologies, developers need to stay on top of trends. This post dives deep into the key trends that are shaping the future of web development.
                </p>
              )}
            </div>

            {/* Blog Post 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <h3 className="text-2xl font-semibold">JavaScript Frameworks: Which One to Choose in 2025?</h3>
              <p className="text-gray-600 mt-2">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec malesuada justo et eros fermentum, a rhoncus nisl pretium.</p>
              <button 
                onClick={() => handleToggleDescription(2)} 
                className="text-blue-500 mt-4 inline-block"
              >
                {expandedPost === 2 ? "Show Less" : "Read more →"}
              </button>
              {expandedPost === 2 && (
                <p className="text-gray-600 mt-4">
                  With many JavaScript frameworks available, choosing the right one can be overwhelming. In this post, we will compare the most popular frameworks such as React, Angular, and Vue to help you decide the best one for your next project.
                </p>
              )}
            </div>

            {/* Add more blog posts here */}
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="#"
                  onClick={() => handleCategoryClick('Web Design')}
                  className="hover:text-blue-500"
                >
                  Web Design
                </a>
                {selectedCategory === 'Web Design' && (
                  <p className="text-gray-600 mt-2 text-sm">
                    Explore the principles, tools, and techniques of creating beautiful and functional websites.
                  </p>
                )}
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleCategoryClick('JavaScript')}
                  className="hover:text-blue-500"
                >
                  JavaScript
                </a>
                {selectedCategory === 'JavaScript' && (
                  <p className="text-gray-600 mt-2 text-sm">
                    Learn about the powerful and versatile programming language that powers the web.
                  </p>
                )}
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleCategoryClick('React.js')}
                  className="hover:text-blue-500"
                >
                  React.js
                </a>
                {selectedCategory === 'React.js' && (
                  <p className="text-gray-600 mt-2 text-sm">
                    Dive into React, the popular JavaScript library for building interactive user interfaces.
                  </p>
                )}
              </li>
              <li>
                <a 
                  href="#"
                  onClick={() => handleCategoryClick('Node.js')}
                  className="hover:text-blue-500"
                >
                  Node.js
                </a>
                {selectedCategory === 'Node.js' && (
                  <p className="text-gray-600 mt-2 text-sm">
                    Understand how Node.js enables server-side JavaScript execution and enhances web development.
                  </p>
                )}
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Stay Updated with Our Newsletter</h3>
        <p className="text-gray-700 mb-4">Subscribe to receive updates and the latest articles directly in your inbox!</p>

        {/* Show status message */}
        {statusMessage && (
          <p className={`text-sm ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'} mb-4`}>
            {statusMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex justify-center">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            className="p-3 rounded-l-lg bg-gray-200 text-gray-900 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className={`bg-[#1746ff] p-3 rounded-r-lg text-white font-semibold hover:bg-blue-600 transition-all ${isLoading ? 'cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin border-t-4 border-white w-6 h-6 rounded-full mx-auto"></div> // Loading spinner
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;