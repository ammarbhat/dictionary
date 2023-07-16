import React from "react";
import SearchR from "./SearchR";
function Search() {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [def, setDef] = React.useState("");
  const [name, setName] = React.useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function submit() {
    setLoading(true);
    setDef("");
    let response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/sd3/json/${search
        .toLocaleLowerCase()
        .trim()}?key=8ddc963b-1fbb-4d69-a0bf-72e57e73453a`,
      {
        method: "GET",
      }
    );

    let data = await response.json();
    console.log(data);
    setDef(
      data[0].shortdef
        ? data[0].shortdef.map((mean, i) => (
            <div key={i}>
              <li>{mean}</li>
            </div>
          ))
        : ["no such word found"]
    );
    setLoading(false);
  }
  React.useEffect(() => {
    setName(search.toUpperCase());
  }, [def]);

  return (
    <>
      <div className="flex justify-center items-center py-5">
        <input
          className="p-2 rounded-l-full outline-none  border"
          placeholder="write a word"
          value={search}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" p-2 border-3 rounded-r-full bg-green-500   text-white"
          onClick={submit}
        >
          {loading ? "loading..." : "Search"}
        </button>
      </div>
      {def ? <SearchR name={name} def={def} /> : null}
      <div className="p-10 mt-20 text-center sm:h-48">
        Note: This app is still in development and the API is slow so you might
        need to click multiple times to get results.{" "}
      </div>
    </>
  );
}

export default Search;
