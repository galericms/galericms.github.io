import React, { useState, useEffect } from "react";

// import { Form, Input, Button, Mention } from "antd";
import {
    Form,
    FormControl,
    FormGroup,
    Button,
    FormLabel
} from "react-bootstrap";

import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";

import { getSampleProject } from "../../ProjectService";

const ModifyProject = props => {
    const [project, setProject] = useState({
        id: "",
        title: "",
        summary: "",
        content: "",
        creator: "",
        tags: [],
        collaborators: []
    });
    const editorRef = React.createRef();

    useEffect(() => {
        let isSubscribed = true;
        getSampleProject(props.match.params.id)
            .then(resp => {
                if (isSubscribed) {
                    // console.log(resp);
                    setProject(resp);
                }
            })
            .catch(err => console.error(err));

        return () => (isSubscribed = false);
    }, []);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().setValue(project.content);
        }
    }, [project.content])

    const uploadImage = (blob, callback) => {
        // Imgur client ID: 41f5c8b3bfcd69e

        // console.log(blob);
        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID 41f5c8b3bfcd69e"
            },
            body: blob
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                // console.log(response.data.link);
                callback(response.data.link);
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const MDContent = editorRef.current.getInstance().getValue();
        setProject({ ...project, content: MDContent });
        console.log(project);
    };

    const handleChange = e => {
        // TODO: Fix this so input works again
        const MDContent = editorRef.current.getInstance().getValue();
        const value = e.target.value;
        setProject({
            ...project,
            [e.target.name]: value,
            content: MDContent
        });
    };

    return (
        <div>
            {project ? (
                <>
                    <h1 className="text-center">Edit: {project.title} </h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId="title">
                            <FormLabel>Project Title</FormLabel>
                            <FormControl
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={project.title}
                            />
                        </FormGroup>
                        <FormGroup controlId="summary">
                            <FormLabel>Project Summary</FormLabel>
                            <FormControl
                                type="text"
                                name="summary"
                                onChange={handleChange}
                                value={project.summary}
                            />
                        </FormGroup>
                        <hr />
                        <Editor
                            usageStatistics={false}
                            initialValue={project.content}
                            previewStyle="vertical"
                            height="auto"
                            minHeight="400px"
                            initialEditType="wysiwyg"
                            ref={editorRef}
                            useCommandShortcut={true}
                            exts={[
                                {
                                    name: "chart",
                                    minWidth: 100,
                                    maxWidth: 600,
                                    minHeight: 100,
                                    maxHeight: 300
                                },
                                "scrollSync",
                                "colorSyntax",
                                "uml",
                                "mark",
                                "table"
                            ]}
                            hooks={{
                                addImageBlobHook: (blob, callback) => {
                                    uploadImage(blob, url => {
                                        callback(url, "alt text");
                                        return false;
                                    });
                                }
                            }}
                        />
                        <br />
                        <div className="text-center">
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

const ProjectModify = ModifyProject;
export default ProjectModify;
