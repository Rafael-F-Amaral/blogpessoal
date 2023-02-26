import React from 'react'

const index = () => {
  return (
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <form>
          <label>
            Search:
            <input />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default index