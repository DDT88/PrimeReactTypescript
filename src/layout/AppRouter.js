import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import AppContentContext from './AppContentContext';
import HomeComponent from "../component/homeComponent";



class AppRouter extends Component {

    addPagePath(path) {


    }

    componentDidMount() {
        this.addPagePath(this.props.location.pathname);

        this.unlisten = this.props.history.listen((location) => {
            if (this.props.location.pathname !== location.pathname) {
                this.addPagePath(location.pathname);
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <AppContentContext.Consumer>
                {
                    context => (
                        <>
                            <Route exact path="/" component={HomeComponent} />

                        </>
                    )
                }
            </AppContentContext.Consumer>
        );
    }
}

export default withRouter(AppRouter);
