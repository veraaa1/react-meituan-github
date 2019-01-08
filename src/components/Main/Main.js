import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom';
import ChooseFood from '../ChooseFood/ChooseFood'
import Comments from '../Comments/Comments'
import Seller from '../Seller/Seller'
import Footer from '../Footer/Footer'
import './main.scss'
class Main extends Component {
    render() {
        return (
            <main>
            <div className="main-con">
                <Switch>
                <Route component={Comments} path="/comments"/>
                <Route component={Seller} path="/seller"/>
                <Route component={ChooseFood} path="/"/>
                </Switch>
            </div>
            <Route component={Footer} path="/" exact/>
            </main>
        );
    }
}

export default Main;