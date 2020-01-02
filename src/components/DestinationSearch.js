import React from 'react';
import { Search } from 'semantic-ui-react';

const initialState = {
  isLoading: false,
  results: [],
  value: ""
}

export class DestinationSearch extends React.Component{

  state = initialState;

  handleResultSelect = (e, { result }) => {
    const title = result.name;
    this.setState({ value: title }, () => {
      const { setLocation } = this.props;
      setLocation(result);
    });
  }

  handleSearchChange = (e, { value }) => {
    const { fuse } = this.props;
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      this.setState({
        isLoading: false,
        // use Fuse.JS to filter
        results: fuse.search(value).map(location => {
          return {
            ...location,
            title: location.name
          }
        })
      });
    }, 300);
  };
  
  render() {
    const { isLoading, value, results } = this.state;

    return (
      <>
        <Search
          loading={isLoading}
          minCharacters={3}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
        />
      </>
    );
  };
};

export default DestinationSearch;
