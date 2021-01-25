import React from 'react';

const RecommenderContext = React.createContext({
  isSignedIn: false,
  theme: 'light',
  articles: [],
  availableCards: [],
})

export default RecommenderContext