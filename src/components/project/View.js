import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { markdown } from "markdown";

import { getSampleProject } from "../../ProjectService";

import { Button } from "react-bootstrap";

// TODO: If one of the collaborators is logged in user,
//   add "Edit" button
const ProjectView = props => {
    const [currentProject, setCurrentProject] = useState({});
    const [errMsg, setErrMsg] = useState();
    // eslint-disable-next-line
    const [loggedInUser, setLoggedInUser] = useState("bobby123");


    useEffect(() => {
        getSampleProject(props.match.params.id).then(
            response => {
                setCurrentProject(response);
            },
            err => {
                console.error(err.message);
                setErrMsg(err.message);
            }
        );
    });

    return (
        <>
            <div className="clearfix mb-3" />

            <div style={{ color: "red" }}>{errMsg}</div>

            <div style={{ float: "right" }}>
                {currentProject.creator === loggedInUser ? (
                    <Button
                        onClick={() =>
                            props.history.push(
                                `/projects/${currentProject.id}/edit`
                            )
                        }
                    >
                        {currentProject.creator} - Edit
                    </Button>
                ) : null}
            </div>
            <div
                className="text-center"
                style={{ textDecoration: "underline" }}
            >
                <h1>{currentProject.title}</h1>
            </div>
            <div className="clearfix" />

            <h4>{currentProject.summary}</h4>
            <hr />
            {currentProject.content ? (
                <div
                    dangerouslySetInnerHTML={{
                        __html: markdown.toHTML(currentProject.content)
                    }}
                />
            ) : (
                <div />
            )}
        </>
    );
};

export default withRouter(ProjectView);
