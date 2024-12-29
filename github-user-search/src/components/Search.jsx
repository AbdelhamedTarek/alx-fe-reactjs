import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSearchResults([]);

    try {
      const query = {
        username,
        location,
        minRepos,
      };
      const results = await searchUsers(query);
      setSearchResults(results.items);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 max-w-md mx-auto bg-gray-100 p-6 rounded shadow"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-500 mt-4">
          Something went wrong. Try again.
        </p>
      )}

      <div className="mt-6">
        {searchResults.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 bg-white rounded shadow mb-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos || "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
