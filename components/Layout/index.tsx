import React from 'react'

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

export default Layout