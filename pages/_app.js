import React from 'react'
import App from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store'
import '../assets/index.less'

class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div className='layout'>
                {children}
            </div>
        )
    }
}

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)