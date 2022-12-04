import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {TypedDataField} from "ethers";
import useEth from "../../contexts/EthContext/useEth";
import contract from "../../components/Demo/Contract";

const Index = () => {
    const {state: {contract, accounts}} = useEth();
    const [state, setState] = useState({firstName: "a", lastName: "b"});

    const read = async () => {
        const value = await contract.methods.read().call({from: accounts[0]});
        setState(prev => {})
    };

    const write = async e => {
        if (e.target.tagName === "INPUT") {
            return;
        }
        // const newValue = parseInt(inputValue);
        await contract.methods.registerAsFarmer("etash", "tyagi").send({from: accounts[0]});
    };

    return (
        <>
            <h2 className={"mt-3"}>
                Register
            </h2>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUserType">
                    <Form.Label>User Type</Form.Label>
                    <Form.Select aria-label="formBasicSelect">
                        <option value="0">Farmer</option>
                        <option value="1">Processor</option>
                        <option value="2">Distributor</option>
                        <option value="3">Retailer</option>
                        <option value="4">Consumer</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={write}>
                    Submit
                </Button>
                <Button variant="primary" onClick={read}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Index;