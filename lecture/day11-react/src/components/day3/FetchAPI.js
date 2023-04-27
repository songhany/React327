import React, { Component } from 'react'

const API = "https://jsonplaceholder.typicode.com/posts";

// after the component mounted, we are to going fetch the api
// then update state based on api's data
// write jsx, we are going to render the list

export default class FetchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handleAPICall = this.handleAPICall.bind(this);
  }

  // IMPORTANT: During the "Render phase", the component should Always be pure.  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // i.e. Up until you call the render method, the components should always be pure.
  // Making a API call is a side effect. For all of those side effects, we only trigger them after the "render()" method is complete, so the place to make the API request is inside "componentDidMount()" method.
  // componentDidMount() {
  //   fetch(API)
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ posts: data });
  //     });
  // }

  // instead of trigger fetch(API) call right after the component Mounted using above code, we can also choose to make a API call after the button is clicked.
  handleAPICall() {
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div>
        <h1>Fetch API</h1>
        <button onClick={this.handleAPICall}>Make API Call</button>
        <div>
          {this.state.posts.map((post) => {
            return <div key={post.id}>
              {post.title}
            </div>;
          })}
        </div>
      </div>
    );
  }
}
