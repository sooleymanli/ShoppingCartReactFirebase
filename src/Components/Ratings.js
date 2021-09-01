import React, { Component } from 'react'

class Ratings extends Component {
    render() {
        return (
            <div>

{
    (()=>{
        if(this.props.number==="5"){
            return(<div>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>

</div>)
        }
else if (this.props.number ==="4"){
    return(
        <div>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked"></span>

</div>
    )
}

else if (this.props.number ==="3"){
    return(
        <div>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>

</div>
    )
}

else if (this.props.number ==="2"){
    return(
        <div>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>

</div>
    )
}

else if (this.props.number ==="1"){
    return(
        <div>
                             <span className="fa fa-star checked" style={{color:"rgb(221, 207, 12)"}}></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>

</div>
    )
}

else if (this.props.number ==="10"){
    return(
        <div>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>
                             <span className="fa fa-star checked"></span>

</div>
    )
}

    })
    ()





}
  

            </div>



        )
    }
}

export default Ratings;
