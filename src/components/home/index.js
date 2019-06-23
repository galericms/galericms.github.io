import React, { useState } from "react";

import CardView from "./CardView";
import DetaiView from "./DetailView";

import { Button, Container } from "react-bootstrap";
import { GridTwoUpIcon, ListIcon } from "react-open-iconic-svg";

const Home = props => {
    const [isCardView, setIsCardView] = useState(true);

    return (
        <Container fluid>
            <div className="clearfix mb-3" />
            <Button
                className="float-right"
                variant="primary"
                style={{
                    fill: "#fff",
                    transform: "scale(1.5)",
                    padding: "2px 12px"
                }}
                onClick={() => setIsCardView(!isCardView)}
            >
                {isCardView ? <ListIcon /> : <GridTwoUpIcon />}
            </Button>
            <h1 className="text-center">Home</h1>
            <div className="clearfix mb-3" />

            {isCardView ? (
                <CardView projects={props.projects} />
            ) : (
                <DetaiView projects={props.projects} />
            )}
        </Container>
    );
};
export default Home;
