import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";

class AppComponent extends React.Component {
    public render(): React.ReactNode {
        const me: AppComponent = this;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <HeaderComponent content={'Hola soy Jandrohen'}> </HeaderComponent>
                </header>
            </div>
        );
    }
}
export default AppComponent;
