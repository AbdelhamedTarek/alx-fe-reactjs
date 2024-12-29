import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSearchResults([]);
    setUserDetails(null);

    try {
      if (advancedSearch) {
        const query = { username, location, minRepos };
        const results = await searchUsers(query);
        setSearchResults(results.items);
      } else {
        const data = await fetchUserData(username);
        setUserDetails(data);
      }
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
        {advancedSearch && (
          <>
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
          </>
        )}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={advancedSearch}
              onChange={(e) => setAdvancedSearch(e.target.checked)}
            />
            Advanced Search
          </label>
        </div>
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

      {/* Display User Details */}
      {userDetails && (
        <div className="mt-6 flex flex-col items-center bg-white p-4 rounded shadow">
          <img
            src={userDetails.avatar_url}
            alt={userDetails.name || userDetails.login}
            className="w-24 h-24 rounded-full"
          />
          <h2 className="text-xl font-bold mt-4">
            {userDetails.name || userDetails.login}
          </h2>
          <p>Location: {userDetails.location || "N/A"}</p>
          <p>Public Repositories: {userDetails.public_repos}</p>
          <a
            href={userDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View Profile
          </a>
        </div>
      )}

      {/* Display Search Results */}
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
