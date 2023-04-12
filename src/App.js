import React from "react";
import './App.css';

import Background from "./components/Background";
import CreditCard from "./components/CreditCard";

const App = () => {
    return (
        <Background>
            <CreditCard/>
        </Background>

    );
}

export default App;
