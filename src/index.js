import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";

import Home from "./components/home";
import About from "./components/static/About";
import Contact from "./components/static/Contact";
import Header from "./components/common/HeaderBar";
import Footer from "./components/common/FooterBar";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import ProjectView from "./components/project/View";
import ProjectCreate from "./components/project/Create";
import ProjectModify from "./components/project/Modify";

import { getSampleProjects } from "./ProjectService";

import { Container } from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Galeri",
            projects: []
        };
    }

    componentDidMount() {
        getSampleProjects().then(
            response => {
                this.setState({ projects: response });
            },
            err => console.error(err.message)
        );
    }

    doSearch = query => {
        window.alert("You searched: " + query);
    };

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header
                    title={this.state.title}
                    searchFunc={q => this.doSearch(q)}
                />
                <Container>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <Home projects={this.state.projects} />
                            )}
                        />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />

                        <Route path="/signup" component={SignUp} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile/:id" component={Profile} />

                        <Route
                            path="/project/create"
                            component={props => <ProjectCreate {...props} />}
                        />
                        <Route
                            path="/projects/:id/edit"
                            component={props => <ProjectModify {...props} />}
                        />
                        <Route
                            exact
                            path="/projects/:id"
                            component={ProjectView}
                        />
                    </Switch>
                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
