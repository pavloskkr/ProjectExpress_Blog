import React, { useState, useEffect } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Dummy token (Replace with actual auth logic)
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDUsImVtYWlsIjoicGF2bG9za2tyMUBob3RtYWlsLmNvbSJ9.laVv4Tca-POcv7_86hvMs_fFgB4bdVMHckDhEqB2oa8';

        const response = await fetch('/api/articles', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center text-indigo-600 mb-8">Latest Blog Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">{article.title}</h2>
            <p className="text-sm text-gray-600">By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
            <p className="mt-4 text-gray-800">{article.content.substring(0, 100)}...</p>
            <a href="#" className="text-indigo-500 mt-4 inline-block hover:text-indigo-700 transition-colors duration-300">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
