import {ethers} from "ethers";
import {setAccount} from "../store/web3Slice";

export const checkForMetamask = async (navigate, location) => {
    if (typeof window.ethereum !== "undefined") {
        if (location.pathname === "/error/metamask_not_found") {
            setTimeout(
                () => {
                    navigate(new URLSearchParams(location.search).get('next'))
                }, 10
            )
        }
        return true
    } else {
        if (location.pathname !== "/error/metamask_not_found") {
            setTimeout(
                () => {
                    navigate('/error/metamask_not_found?next=/profile')
                }, 10
            )
        }
        return false
    }
}