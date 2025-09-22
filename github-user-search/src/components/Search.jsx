import React, { useState } from 'react';
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { fetchUserData } from '../services/githubService';
import GitHubUserCard from './GithubUserCard';

const Search = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setGhUser] = useState(null); // Use null instead of []

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
      const data = await fetchUserData({ username });

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

      {user && (
        <div className="mt-6">
          <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6 text-center">
        <img
          src={user.avatar_url}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {user.name || user.login}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          @{user.login}
        </p>

        {user.bio && (
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
            {user.bio}
          </p>
        )}

        <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <span className="font-bold">{user.public_repos}</span>
            <span className="block">Repos</span>
          </div>
          <div>
            <span className="font-bold">{user.followers}</span>
            <span className="block">Followers</span>
          </div>
          <div>
            <span className="font-bold">{user.following}</span>
            <span className="block">Following</span>
          </div>
        </div>

        {user.location && (
          <div className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            📍 {user.location}
          </div>
        )}

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200"
        >
          View Profile
        </a>
      </div>
    </div>
        </div>
      )}
    </div>
  );
};

export default Search;
