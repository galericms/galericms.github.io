import React, { useState } from "react";

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

const CreateProject = props => {
    const [formContent, setFormContent] = useState({
        title: "",
        summary: "",
        tags: [],
        collaborators: [],
        content: ""
    });

    // TODO: Use react-bootstrap-typeahead for autofill / dropdown
    // http://ericgio.github.io/react-bootstrap-typeahead/#controlling-selections
    // const allTags = ["software", "hardware", "math", "science", "laser"];
    // const allCollaborators = [
    //     "bsmith@example.com",
    //     "tom@example.com",
    //     "johhny@rockets.net"
    // ];

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

    const editorRef = React.createRef();

    // TODO: Use Project Service, and send an obj
    // TODO: Load existing project
    const handleSubmit = e => {
        e.preventDefault();
        // MD editor content
        const MDContent = editorRef.current.getInstance().getValue();
        setFormContent({ ...formContent, content: MDContent });
        console.log(formContent);
        // console.log(content);
    };

    const handleChange = e => {
        // TODO: Fix this so input works again
        const MDContent = editorRef.current.getInstance().getValue();
        const value = e.target.value;
        setFormContent({
            ...formContent,
            [e.target.name]: value,
            content: MDContent
        });
    };

    return (
        <div>
            <h1 className="text-center">Create a project</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId="title">
                    <FormLabel>Project Title</FormLabel>
                    <FormControl
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="summary">
                    <FormLabel>Project Summary</FormLabel>
                    <FormControl
                        type="text"
                        name="summary"
                        onChange={handleChange}
                    />
                </FormGroup>
                {/* TODO: Use react-bootstrap-typeahead for autofill / dropdown */}
                {/* http://ericgio.github.io/react-bootstrap-typeahead/#controlling-selections */}
                {/* <FormGroup controlId="tags">
                    <FormLabel>Tags</FormLabel>
                    <FormControl
                    type="text"
                    name="tags"
                    onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup controlId="title">
                    <FormLabel>Project Title</FormLabel>
                    <FormControl
                    type="text"
                    name="title"
                    onChange={handleChange}
                    />
                </FormGroup> */}
                <br />
                <hr />
                <br />
                <Editor
                    usageStatistics={false}
                    initialValue="> I'm a sample project!"
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

            {/* <Form onSubmit={handleSubmit} layout="inline">
                <Form.Item label="Project Title">
                    {getFieldDecorator("title", {
                        rules: [{ required: true, message: "Enter a title!" }]
                    })(<Input placeholder="Title" />)}
                </Form.Item>

                <Form.Item label="Summary">
                    {getFieldDecorator("summary", {
                        rules: [
                            {
                                required: true,
                                message: "Enter a project sumary!"
                            }
                        ]
                    })(
                        <Input.TextArea
                            placeholder="Enter a one or two sentence summary for your project"
                            style={{ width: "100%", minWidth: "256px" }}
                        />
                    )}
                </Form.Item>

                <Form.Item label="Tags">
                    <Mention
                        placeholder="@tag"
                        suggestions={allTags}
                        onChange={handleAddTag}
                        style={{ width: "100%", minWidth: "128px" }}
                    />
                </Form.Item>
                <Form.Item label="Collaborators">
                    <Mention
                        placeholder="@collaborator"
                        suggestions={allCollaborators}
                        onChange={handleAddCollaborator}
                        style={{ width: "100%", minWidth: "512px" }}
                    />
                </Form.Item>

                <br />
                <hr />
                <br />
                <Editor
                    usageStatistics={false}
                    initialValue="> I'm a sample project!"
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
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form> */}
        </div>
    );
};

// const ProjectCreate = Form.create()(CreateProject);
const ProjectCreate = CreateProject;

export default ProjectCreate;
