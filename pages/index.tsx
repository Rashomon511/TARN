import React from 'react'
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount  } from '../redux/actions/counter';
import Counter from '../components/counter/index';

function Index(props: any){
  return <Counter {...props}/>
}
const mapDispatchToProps = (dispatch: any) => ({
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

const mapStateToProps = (state: { counter: any; }) => ({
	counter: state.counter
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
