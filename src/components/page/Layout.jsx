import React, {Component} from 'react';
import Header from '../pure-components/Header';
import PanelLeft from '../pure-components/PanelLeft';
import Contend from '../pure-components/Cotend';
import '../../styles/Layout.scss';

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <PanelLeft className="item panel-left"></PanelLeft>
                <section className="item panel-right">
                    <Header className="sub-item header"></Header>
                    <Contend className="sub-item contend"></Contend>
                </section>
            </div>
        )
    }
}

export default Layout;