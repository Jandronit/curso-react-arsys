import React from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import TableComponent from "./components/TableComponent";

class AppComponent extends React.Component {
    public render(): React.ReactNode {
        const me: AppComponent = this;
        return (
            <div className="App">
                <header className="App-header">
                    <HeaderComponent content={'Hola soy Jandrohen'}> </HeaderComponent>
                    <TableComponent></TableComponent>
                </header>
            </div>
        );
    }
}
export default AppComponent;
