import React from "react";
import { Link } from "react-router-dom";
import "./articles.css";
import RecommenderContext from "./../recommenderContext";
import config from "./../config";
import PlaceholderImg from "./../images/placeholder.png";

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  static contextType = RecommenderContext;

  componentDidMount() {
    fetch(config.API_Articles_ENDPOINT, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${config.BEARER_TOKEN}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data }));
  }

  render() {
    return (
      <>
        <div className="articles-container">
          {this.state.articles.map((article, index) => {
            return (
              <div key={article.id} id={article.id} className="articles">
                <div
                  className={`articles-text-content ${
                    index % 2 === 0 ? "" : "text-first"
                  }`}
                >
                  <h2>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                  </h2>
                  <h5>{`Updated: article date`}</h5>
                  <p>Starting text of article</p>
                </div>
                <img
                  src={PlaceholderImg}
                  alt="placeholder"
                  className="articles-img"
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
