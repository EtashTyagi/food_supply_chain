import React from 'react';

const Index = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <a href="https://metamask.io/download/" target="_blank" rel="noreferrer"
               className="d-flex flex-column justify-content-center align-items-center h-100 bg-gradient bg-primary">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png"
                    alt="metamask" width="256px"/>
                <h2 className="mt-2 text-light"> Please Download Metamask</h2>
            </a>
        </div>

    );
};

export default Index;