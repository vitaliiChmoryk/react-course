import React from 'react'

export const CreateElement = React.createElement('p', null, 'Hello World - create Element')

export class ReactComponent extends React.Component {
    render() {
        return <p>Hello World - create Component</p>
    }
}

export class ReactPureComponent extends React.PureComponent {
    render() {
        return <p>Hello World - create PureComponent</p>
    }
}

export const FunctionalComponent = () => <p>Hello World - create FunctionalComponent</p>