import React from 'react'
import { Link } from "react-router-dom";

const style = {
  cardImg: {
    
    minWidth: "170px",
    objectFit: "cover",
    height: "300px",
  },
};
 
//const {user, description, link, pic} = props


const TargetaRegistro = (props) => {
return(            
<div className="col s12 m6 l6 center" >    
 <div className="card horizontal " style={{minWidth:"400px"}}>
            <div className="card-image" >
              <img
                src={props.pic}
                alt=""
                style={style.cardImg}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content" style={{minWidth:"230px"}}
              >
                <span className="card-title">{props.user}</span>
                <p>
                  {props.description}
                </p>
              </div>
              <div className="card-action" >
                <Link
                  to={props.link} 
                  className="waves-effect waves-light btn-small">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </div>
);
//delgadillo es gai
}
export default TargetaRegistro;