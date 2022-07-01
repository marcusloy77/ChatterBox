

const SearchBar = () => {

  const fetchSearches = (event) => {
    event.preventDefault()
    return null
  }

  return (
    <section className="search-bar">
      <form className="search-form" action="" onSubmit={fetchSearches}>
        <label htmlFor="">Search? </label>
        <input type="text" />
        <button>Find Chatters!</button>
      </form>
    </section>
  )
}

export default SearchBar