// import {Button} from 'antd';
// import '../assets/index.less'
// interface Person {
//     name: String;
// }
// const Rashomon: Person = {
//     name: 'rashomon',
// }
// export default () => <Button type='primary'>{Rashomon.name}</Button>

import React from 'react'
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store/index'
import Examples from '../components/examples'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Examples />
  }
}
const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Index)