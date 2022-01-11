import React, {useEffect} from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "../components/pages/navbar/NavbarContainer";
import {viewMethods} from "../business-logic/near2/near/contract-parser/view-code";

export default function App() {

    useEffect(() => {
        viewMethods('mjol.near') //nuniversity.mintbase1.near
            .then(x => console.log(x))
            .catch(() => console.log("VIEW FAILURE"))
    }, [])

    return (
        <div>
            <NavbarContainer/>
            <AppRouter/>
            {/*<FooterPage/>*/}
        </div>
    )
}