// Search.jsx
import React, { useState } from 'react';
import { BiSearch, BiUserCircle, BiMap, BiGitRepoForked } from 'react-icons/bi';
import { fetchUserData } from '../services/githubService';
import GitHubUserCard from './GithubUserCard';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage('');
    setResults([]);
    setLoading(true);

    try {
      const users = await fetchUserData(formData);
      if (users.length === 0) {
        setMessage('Looks like we cant find the user');
      } else {
        setResults(users);
      }
    } catch (err) {
      console.error(err);
      setMessage('Error fetching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10 h-full">
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl shadow space-y-4">
        {message && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
            {message}
          </div>
        )}

        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700">
            <BiUserCircle /> Username (optional)
          </label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="e.g. johndoe"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700">
            <BiMap /> Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Nairobi"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700">
            <BiGitRepoForked /> Minimum Repositories
          </label>
          <input
            type="number"
            name="minRepos"
            value={formData.minRepos}
            onChange={handleChange}
            placeholder="e.g. 5"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          {loading ? 'Searching...' : 'Advanced Search'}
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-8 space-y-4">
          {results.map((user) => (
            <>
            <GitHubUserCard key={user.id} user={user} />
            <a href={user.html_url}>View Profile</a>

            </>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
