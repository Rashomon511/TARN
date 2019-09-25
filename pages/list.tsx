import React from 'react'
import { connect } from 'react-redux'
import {List, Avatar} from 'antd';
import { loadData } from '../redux/actions/list'

class Lists extends React.Component {
  static async getInitialProps (props: any) {
    const { store, isServer } = props.ctx
    store.dispatch(loadData())
    return { isServer }
  }

  render () {
    const {list: {data}}: any = this.props;
    return (
      <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={item.name}
            description={<span>website: {item.website}  phone: {item.phone}</span>}
          />
        </List.Item>
      )}
    />
    )
  }
}

const mapStateToProps = (state: any) => ({
	list: state.list
});

export default connect(mapStateToProps, null)(Lists)