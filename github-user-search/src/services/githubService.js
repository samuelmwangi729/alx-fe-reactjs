import axios from 'axios'
export const fetchUserData = async ({ username, location, minRepos }) => {
    console.log('fetching the data')
     let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Failed to fetch');

  const detailedUsers = await Promise.all(
    data.items.map(async (user) => {
      const userRes = await fetch(user.url);
      return await userRes.json();
    })
  );

  return detailedUsers;
}