import React from 'react';

const RecommenderContext = React.createContext({
  isSignedIn: false,
  articles: [],
  availableCards: [],
  userCards:[],
  userId:null,
  msg:"",
  isFromResultsPage:false
})

export default RecommenderContext