import React from "react"

import { SearchWrapper } from "./styles"
import Hit from "./Hit"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexMain: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexMain}>
      <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </SearchWrapper>
)

export default Search
