import React from 'react'
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import initStore from '../redux/store'
// import withReduxStore from '../lib/with-redux-store'

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
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {};
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps({ ctx });
        }
    
        return { pageProps };
      }
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withRedux(initStore)(withReduxSaga(MyApp))