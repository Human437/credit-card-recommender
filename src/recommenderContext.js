import React from 'react';

const RecommenderContext = React.createContext({
  isSignedIn: false,
  theme: 'light',
  articles: [],
  userCards: [],
})

export default RecommenderContext