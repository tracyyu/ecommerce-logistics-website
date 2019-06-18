import React, { Component } from 'react';


class SearchBar extends Component {

    handleSubmit(e) {
        e.preventDefault();
    }
      
    handleMobileSearch(e) {
        e.preventDefault();
        this.setState({
          mobileSearch: true
        });
    }
    
    handleSearchNav(e) {
        e.preventDefault();
        this.setState(
            {
            mobileSearch: false
            },
            function() {
            this.refs.searchBox.value = "";
            this.props.handleMobileSearch();
            }
        );
    }

    render(){
        return(
            <div className="search">
            <a
              className="mobile-search"
              href="#"
              onClick={this.handleMobileSearch.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                alt="search"
              />
            </a>
            <form
              action="#"
              method="get"
              className={
                this.state.mobileSearch ? "search-form active" : "search-form"
              }
            >
              <a
                className="back-button"
                href="#"
                onClick={this.handleSearchNav.bind(this)}
              >
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                  alt="back"
                />
              </a>
              <input
                type="search"
                ref="searchBox"
                placeholder="Search for Vegetables and Fruits"
                className="search-keyword"
                onChange={this.props.handleSearch}
              />
              <button
                className="search-button"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              />
            </form>
          </div>
        );
    }
}

export default SearchBar;