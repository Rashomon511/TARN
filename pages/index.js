import React from 'react'
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount  } from '../redux/actions/counter';
import Counter from '../components/counter/index';

class Index extends React.Component {

  render () {
    return <Counter {...this.props}/>
  }
}
const mapDispatchToProps = dispatch => ({
	incrementCount() {
		dispatch(incrementCount());
  },
  decrementCount() {
		dispatch(decrementCount());
  },
  resetCount() {
		dispatch(resetCount());
  }
});

const mapStateToProps = state => ({
	counter: state.counter
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
