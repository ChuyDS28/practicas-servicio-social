import React from 'react'
import { Link } from "react-router-dom";


const style = {
  cardImg: {
    
    minWidth: "170px",
    objectFit: "cover",
    height: "300px",
  },
};
 



const TargetaRegistro = (props) => {
const { pic, user, description, link } = props;
return(            
<div className="col s12 m6 l6 center" >    
 <div className="card horizontal " style={{minWidth:"400px"}}>
            <div className="card-image" >
              <img
                src={pic}
                alt=""
                style={style.cardImg}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content" style={{minWidth:"230px"}}
              >
                <span className="card-title">{user}</span>
                <p>
                  {description}
                </p>
              </div>
              <div className="card-action" >
                <Link
                  to={link} 
                  className="waves-effect waves-light btn-small">
                  {props.texto}
                </Link>
              </div>
            </div>
          </div>
        </div>
);

}
export default TargetaRegistro;