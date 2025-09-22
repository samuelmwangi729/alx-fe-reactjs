import React from 'react';

const GitHubUserCard = ({ user }) => {
  if (!user) return null;

  return (
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
  );
};

export default GitHubUserCard;
