import React, {PureComponent} from 'react'

class PanelLeft extends PureComponent {
    render() {
        return (
            <section className={this.props.className}>
                <ul className="menu">
                    <li><p>Portfolio</p></li>
                    <li><p>Pages</p></li>
                    <li><p>Design</p></li>
                    <li><p>Social Networks</p></li>
                </ul>
            </section>
        )
    }
}


export default PanelLeft;