import React, {useCallback, useEffect, useReducer} from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import {actions, initialState, reducer} from "./state";
import {checkForMetamask} from "../../utils";
import {useLocation, useNavigate} from "react-router-dom";

function EthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate()
    const location = useLocation()

    const init = useCallback(
        async artifact => {
            if (artifact) {
                const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:9545/");
                const accounts = await web3.eth.requestAccounts();
                const networkID = await web3.eth.net.getId();
                const {abi} = artifact;
                let address, contract;
                try {
                    address = artifact.networks[networkID].address;
                    contract = new web3.eth.Contract(abi, address);
                } catch (err) {
                    console.error(err);
                }
                dispatch({
                    type: actions.init,
                    data: {artifact, web3, accounts, networkID, contract}
                });
            }
        }, []);

    useEffect(() => {
        const tryInit = async () => {
            try {
                const artifact = require("../../contracts/Users.json");
                init(artifact);
            } catch (err) {
                console.error(err);
            }
        };

        tryInit();
    }, [init]);

    useEffect(() => {
        const events = ["chainChanged", "accountsChanged"];
        const handleChange = () => {

            init(state.artifact);
        };

        try {
            events.forEach(e => { window.ethereum.on(e, handleChange)});
            return () => {
                events.forEach(e => {window.ethereum.removeListener(e, handleChange)});
            };
        } catch (e) {
            console.error(e)
            checkForMetamask(navigate, location)
        }

    }, [init, state.artifact]);

    return (
        <EthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </EthContext.Provider>
    );
}

export default EthProvider;
