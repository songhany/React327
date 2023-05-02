import React from "react";

export default function withLogging(Component) {
  
  return class NewComponent extends React.Component {
    componentDidUpdate(prevProps, prevState) {
      // console.log("state", this.state);
      console.log("props",this.props);
    }

    render() {
      // console.log("render");
      return <Component {...this.props} />;
    }
  };
}