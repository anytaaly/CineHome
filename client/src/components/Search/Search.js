import React from "react";
import Footer from "../Footer/Footer";

class Search extends React.Component {
  state = {
    searchMovie: ""
  };

  onChangeHandler = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    //Prevent the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      searchMovie: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <p> Hello: {this.state.searchMovie} </p>
          <div className="form">
            <input
              type="text"
              value={this.state.searchMovie}
              name="searchMovie"
              placeholder="Search Movie"
              onChange={this.onChangeHandler}
            />
          </div>
          <button onClick={this.handleFormSubmit}> Search </button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Search;
