import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  // will run as component is loaded and whenever the component is re-rendered AND data (term) has changed
  useEffect(() => {
    // useEffect's function cannot directly be marked as async, however there are still three ways to make a request
    // inside of useEffect, e.g. useEffect( async () => {})

    // First way to call async in useEffect is to declare helper function and declare it
    // const search = async () => {
    //   await axios.get('')
    // }
    // search();

    const timeoutId = setTimeout(() => {
      if (term) {
        // Second way is to use IIFE - 😍
        (async() => {
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: term
            }
          })
          setResults(data.query.search)
        })();
      }
    },5000)

    // Third way is to use promises... ewwwwwwww!
    // axios.get('SOME_WEBSITE.com').then((res) => res.data)

  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value)
            }}
          />
        </div>
        <div className="ui celled list">
          {renderedResults}
        </div>
      </div>
    </div>
  )
}

export default Search;