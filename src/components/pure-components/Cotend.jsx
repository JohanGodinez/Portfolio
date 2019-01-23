import React, {Component} from 'react'

class Contend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            about : false,
            design : false,
            socialNetwork : false,
            galery : false,
            project : false,
            other : false,
        }
    }

    show(name, colS, colE, rowS, rowE) {
        this.setState({[name]: !this.state[name]}, () =>{
            if(this.state[name]) {
                document.getElementById([name]).style.gridColumn  = "1 / 4";
                document.getElementById([name]).style.gridRow  = "1 / 4";
                for(const obj in this.state){
                    if(obj != name){
                        document.getElementById(obj).style.display = "none";
                    }
                }
            }else{
                document.getElementById([name]).style.gridColumn  = `${colS} / ${colE}`;
                document.getElementById([name]).style.gridRow  = `${rowS} / ${rowE}`;
                for(const obj in this.state){
                    if(obj != name){
                        document.getElementById(obj).style.display = "grid";
                    }
                }
            } 
        })
    }

    render() {
        let {about, design, socialNetwork} = this.state;
        return (
            <section className={this.props.className}>
                <div onClick={this.show.bind(this, 'about', 1, 2, 1, 2)} id="about">
                    <p>About Me</p>
                    {about && <p>
                        Soy un joven programador web y fanático de UX/UI con un gran deseo de triunfar en la industria de la tecnología.
                        Mi meta a medio - largo plazo es constituir mi propia empresa encargada del desarrollo de las mejores y mas innovadoras aplicaciones del mercado,
                        y por dicho motivo trato de mantenerme actualizado y en constante crecimiento.
                    </p>}
                </div>
                <div onClick={this.show.bind(this, 'design', 2, 3, 1, 2)} id="design">
                    <p>Design</p>
                    {design && 
                    <p>
                        
                    </p>}
                </div>
                <div onClick={this.show.bind(this, 'socialNetwork', 3, 4, 1, 2)} id="socialNetwork">
                    <p>Social Networks</p>
                    {socialNetwork && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quod maiores delectus, pariatur quasi eius totam aut commodi soluta libero fugit? Labore sit odit esse, cupiditate temporibus exercitationem quos eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi in laboriosam tenetur vitae? Optio corrupti beatae culpa voluptatem ipsa voluptas ipsum, dicta voluptatum. Dolor molestiae culpa illum error iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente quod molestias nam ducimus molestiae dolores. Temporibus voluptatibus illum amet porro obcaecati aliquid, aperiam neque necessitatibus quo, totam minima itaque?</p>}
                </div>
                <div id="galery"><p>Galery</p></div>
                <div id="project"><p>Projects</p></div>
                <div id="other"><p>Other</p></div>
            </section>
        )
    }
}


export default Contend;