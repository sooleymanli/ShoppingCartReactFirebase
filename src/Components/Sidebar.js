import React, {Component} from 'react'
import './Sidebar.css'
// import {Link} from 'react-router-dom'


class Sidebar extends Component{
   
    constructor(props){
        super(props)
        this.changeClass=this.changeClass.bind(this)
        this.state={electronics:"electronics",jewelery:"jewelery",man:"man",woman:"woman",all:"active1",logout:""}
    }

     changeClass=(e)=>{
this.setState({electronics:"electronics",jewelery:"jewelery",man:"man",woman:"woman",all:"all"})  
this.setState({[e.target.className]:"active1"})    

this.props.changeCategory(e.target.className)
    }
render(){
    return (
        <div className="sidebar  animate__animated animate__zoomInUp animate__delay-0.5s">
            <div className="sidebar-body">
                <div className="sidebar-content">
                    <div className="caption">
                    {/* <i className="fas fa-bars"></i> */}
                    {/* <img src={Shopping} style={{width:"30px"}} alt=""/> */}
                    <div className="icon"><ion-icon name="grid"></ion-icon></div>
                       <div className="catagory-name"> <h2>Bölmələr</h2> </div>
                    </div>
                    <div className="spans">
                    <span className={this.state.electronics}  onClick={this.changeClass.bind(this)}>Elektronika</span>

                    <span className={this.state.jewelery}  onClick={this.changeClass.bind(this)}>Bujiteriya</span>

                    <span className={this.state.man}  onClick={this.changeClass.bind(this)}>Kişi geyim</span>

                    <span className={this.state.woman}  onClick={this.changeClass.bind(this)}>Qadın geyim</span>
                    <hr></hr>
                    <span className={this.state.all}  onClick={this.changeClass.bind(this)}>Hamısı</span>
                    {/* <span className={this.state.logout}  onClick={this.changeClass.bind(this)}><span className="logout"><Link to="/">Çıxış et</Link></span> <i className="fas fa-sign-out-alt"></i> </span> */}


                    </div>
                   
                </div>
            </div>
        </div>
    )
}
}

export default  Sidebar;