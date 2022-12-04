import {EthProvider} from "./contexts/EthContext";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MetaMaskNotFound from "./pages/Error/MetaMaskNotFound";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import {useDispatch} from "react-redux";
import Demo from "./components/Demo";
import {checkForMetamask} from "./utils";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect( () => {checkForMetamask(navigate, location)}, [])

    return (
            <div className={"w-100 h-100 d-flex flex-column position-absolute"}>
                {location.pathname !== "/error/metamask_not_found" ?
                    <EthProvider>
                        <Header/>
                        <Container className={"mt-2"}>
                            <MyRoutes/>
                        </Container>
                    </EthProvider>
                        :
                    <MyRoutes/>
                }
            </div>

    );
}

const MyRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>} index={true}></Route>
        <Route path="/profile" element={<Profile/>} index={true}></Route>
        <Route path="/error/metamask_not_found" element={<MetaMaskNotFound/>} index={true}/>
    </Routes>
)

export default App;
