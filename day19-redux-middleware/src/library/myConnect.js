import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default function myConnect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    class Connect extends React.Component {
      render() {
        const { stateProps, dispatchProps } = this.props;

        return <WrappedComponent {...stateProps} {...dispatchProps} />;
      }
    }

    function mapStateToPropsWrapper(state, ownProps) {
      const stateProps = mapStateToProps(state, ownProps);
      return { stateProps };
    }

    function mapDispatchToPropsWrapper(dispatch, ownProps) {
      const dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      return { dispatchProps };
    }

    return connect(mapStateToPropsWrapper, mapDispatchToPropsWrapper)(Connect);
  };
}