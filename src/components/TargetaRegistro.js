import React from "react";
import { Link } from "react-router-dom";

const style = {
  cardImg: {
    minWidth: "170px",
    objectFit: "cover",
    height: "100%",
  },
};
const TargetaRegistro = (props) => {
  const { pic, user, description, link, texto } = props;
  return (
    <div className="card horizontal " style={{ minHeight: "280px" }}>
      <div className="card-image">
        <img src={pic} alt="" style={style.cardImg} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">{user}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <Link to={link} className="waves-effect waves-light btn-small blue-grey darken-4">
            {texto}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TargetaRegistro;
