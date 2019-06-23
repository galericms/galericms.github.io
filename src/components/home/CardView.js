import React from "react";
import { withRouter } from "react-router";

import { Card, Row, Col } from "react-bootstrap";

const CardView = props => {
    const cards = props.projects.map(project => {
        return (
            <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
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
export default withRouter(CardView);
