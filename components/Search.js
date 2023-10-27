"use client";
import { useState } from "react";
export default function Search() {
    const [query, setQuery] = useState("")
    var queryHandler = (e) => {
        setQuery(e.target.value)
    }
    var submitHandler = () => {
        // execute api request with query
    }
    return (
      <div className="h-full items-center justify-center flex">
        <input className="flex p-4 rounded text-xl text-black mr-4 border-2 border-bereaBlue" value={query} placeholder="Find a company" onChange={queryHandler}/>
        <button className="flex p-4 bg-bereaBlue text-xl rounded drop-shadow-md" onClick={submitHandler}>Submit</button>
      </div>
    )
  }
  