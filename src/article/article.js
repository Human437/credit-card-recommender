import React from "react";
import "./article.css";
import config from "./../config";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
    this.selectedArticleId = this.props.match.params.id;
  }

  componentDidMount() {
    fetch(`${config.API_Articles_ENDPOINT}/${this.selectedArticleId}`, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${config.BEARER_TOKEN}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ article: data }));
  }

  render() {
    return (
      <>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.content}</p>
      </>
    );
  }
}