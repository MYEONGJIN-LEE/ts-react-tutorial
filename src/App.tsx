import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import { SampleProvider } from "./SampleContext";
import ReducerSample from "./ReducerSample";

const App: React.FC = () => {
    // const onClick = (name: string) => {
    //     console.log(`${name} says hello`);
    // }
    // return <Greetings name="Hello" mark="mark" onClick={onClick}/>;

    //return <Counter />

    // const onSubmit = (form: { name: string; description: string }) => {
    //     console.log(form);
    //  };

    // return <MyForm onSubmit={onSubmit} />;
    return (
        <SampleProvider>
            <ReducerSample />
        </SampleProvider>
    );
};

export default App;
