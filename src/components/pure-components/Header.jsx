import React, {PureComponent} from 'react'

class Header extends PureComponent {
    render() {
        return (
            <section className={this.props.className}>
                <div className="header-item">Johan Godínez</div>
                {/* <div className="header-item">Ico</div>
                <div className="header-item">Ico</div>
                <div className="header-item">Ico</div> */}
            </section>
        )
    }
}


export default Header;