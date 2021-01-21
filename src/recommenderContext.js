import React from 'react';

const RecommenderContext = React.createContext({
  signedIn: false,
  theme: 'light',
  articles: [],
  userCards: [],
})

export default RecommenderContext