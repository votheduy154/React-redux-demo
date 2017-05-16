import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div>{this.props.children}</div>
                </section>
            </div>
        )
    }
}