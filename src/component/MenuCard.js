import {Data} from '../Data';
import '../styles/MenuCard.css';
function MenuCard(){
  return(
        <div className="card-main">
          {Data.map((item)=>{
            return(
                    <div className="card">
                      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.data.cloudinaryImageId}
                        alt="resto_image"
                      />
                      <h1 className="menu-name">{item.data.name}</h1>
                      <p className="resto-address">{item.data.address}</p>
                      <div className="menu-details">
                      <p className="resto-rating">✰{item.data.avgRating}</p>
                      <p className="menu-people">{item.data.costForTwoString}</p>
                      <p className="mune-deliver-time">{item.data.deliveryTime} Minutes</p>
                    </div>
                    </div>

            )
          })}
        </div>
    )
}
export default MenuCard;