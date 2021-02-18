import React from "react";
import { Link } from "react-router-dom";
import "./show-results.css";
import RecommenderContext from "./../recommenderContext";
import config from "./../config";

export default class ShowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  static contextType = RecommenderContext;

  componentDidMount() {
    let results = this.context.userCards.map((cardId) => {
      return fetch(`${config.API_Cards_ENDPOINT}/${cardId}`, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        }),
      }).then((response) => response.json());
    });
    Promise.all(results).then((response) => this.setState({ cards: response }));
  }

  handleUpdateUserCards(event) {
    fetch(`${config.API_User_ENDPOINT}/${this.context.userId}`, {
      method: "PATCH",
      headers: new Headers({
        Authorization: `Bearer ${config.BEARER_TOKEN}`,
        "content-type": "application/json",
      }),
      body: JSON.stringify({
        usercards: this.context.userCards,
        msg: this.context.msg,
      }),
    }).then((response) => {
      this.props.history.push(`/your-cards/${this.context.userId}`);
    });
  }

  render() {
    let signOn = (
      <>
        <h2 id="save-results">Sign on to save your results</h2>
        <button
          id="results-button"
          onClick={(e) => {
            this.context.updateIsFromResultsPage(true);
          }}
        >
          <Link to="/sign-in">Sign On</Link>
        </button>
      </>
    );
    if (this.context.isSignedIn) {
      signOn = (
        <button
          id="results-button"
          onClick={(e) => {
            this.handleUpdateUserCards();
          }}
        >
          Update My Recomendations
        </button>
      );
    }
    return (
      <>
        <div className="result-container">
          <div className="card-container">
            {this.state.cards.map((card) => {
              return (
                <div key={card.id} id={card.id} className="card">
                  <img
                    src={card.imglink}
                    alt={card.title}
                    className="img-for-cards"
                  />
                  <h3>
                    <Link to={`/cards/${card.id}`}>{card.title}</Link>
                  </h3>
                </div>
              );
            })}
          </div>
          <p className="text-for-cards">{this.context.msg}</p>
        </div>
        {signOn}
      </>
    );
  }
}
