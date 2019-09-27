import React from 'react'
import App from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import initStore from '../redux/store'
import '../static/style/index.less'

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
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }
    render() {
        const { Component, pageProps, store }: any = this.props
        return (
            <Provider store={store}>
                <Head>
                    <title>Tarn</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withRedux(initStore)(withReduxSaga(MyApp))