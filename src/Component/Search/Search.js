import React from 'react'

const Search =({handleSearch})=>{
    return(
        <div>
            <input className="form-control" type="text" placeholder="search" onChange={e=>handleSearch(e.target.value)}/>
        </div>
    )
}

export default Search