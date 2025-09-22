import React, { useState } from 'react';
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { fetchuserData } from '../services/githubService';
import GitHubUserCard from './GithubUserCard';

const Search = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [ghuser, setGhUser] = useState(null); // Use null instead of []

  const fetchData = async (e) => {
    e.preventDefault();

    // Reset state
    setMessage('');
    setGhUser(null);

    if (!username.trim()) {
      setMessage('Username cannot be empty');
      return;
    }

    setLoading(true);

    try {
      const data = await fetchuserData({ username });

      if (!data || data.message === 'Not Found') {
        setMessage('GitHub user not found');
        setGhUser(null);
      } else {
        setGhUser(data);
        setMessage('');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while fetching data');
    } finally {
      setLoading(false);
      setUsername('');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 px-4 h-screen">
      <form onSubmit={fetchData} className="bg-white rounded-xl shadow p-6">
        <div className="form-group">
          {message && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {message}
            </div>
          )}

          <label htmlFor="username">
            <div className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <BiUserCircle className="text-orange-500" size={24} />
              <span>GitHub Username</span>
            </div>
          </label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. octocat"
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800 transition"
            disabled={loading}
          >
            <BiSearch size={20} />
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
      </form>

      {ghuser && (
        <div className="mt-6">
          <GitHubUserCard user={ghuser} />
        </div>
      )}
    </div>
  );
};

export default Search;
