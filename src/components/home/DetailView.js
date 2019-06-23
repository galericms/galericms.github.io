import React from "react";
import { withRouter } from "react-router";

import { Card, Row, Col } from "react-bootstrap";

const DetailView = props => {
    const cards = props.projects.map(project => {
        return (
            <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                key={project.id}
                style={{ marginBottom: "16px" }}
            >
                <Card
                    onClick={() =>
                        props.history.push(`/projects/${project.id}`)
                    }
                >
                    <Card.Header>{project.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>{project.summary}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        - {project.creator}
                    </Card.Footer>
                </Card>
            </Col>
        );
    });

    return (
        <div>
            <Row>{cards}</Row>
        </div>
    );
};
export default withRouter(DetailView);
