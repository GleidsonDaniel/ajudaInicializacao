import React from 'react';
import ReactDOM from 'react-dom';

class AcessoPortal extends React.Component {
    constructor(props) {
        super(props);
        this.portalElem = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.portalElem);
    }

    componentWillUnmount() {
        document.body.removeChild(this.portalElem);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.portalElem
        );
    }
}

export default AcessoPortal;