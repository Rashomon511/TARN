import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const {statusCode} :any = this.props;
    return (
      <p>
        <img src='../static/timg.jpeg'/>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}