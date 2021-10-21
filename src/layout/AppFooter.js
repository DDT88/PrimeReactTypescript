import React, { Component } from 'react';

class AppFooter extends Component {

    constructor(props) {
        super(props);

        this.version = "1";
    }

    render() {
        return (
            <div className="layout-footer">
                <div className="layout-footer-left">
                    <span>PrimeReact </span>

                </div>

               
            </div>
        );
    }
}

export default AppFooter;
