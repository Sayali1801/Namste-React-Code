import MenuCard from "./MenuCard";
import { useState } from 'react';
import '../styles/Menus.css';
import loading from "../assets/loading.gif"
function Menus() {
    const [restoList, setRestoList] = useState([]);
    fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING`)
    .then(response=>response.json())
    .then((apiData)=>{
        // console.log(apiData)
        setRestoList(apiData?.data?.cards[2]?.data?.data?.cards)
        // console.log(apiData.data.cards[2].data.data.cards)
    })
    if (restoList.length===0){
        return(
                <img src={loading} alt="loading" id="loading_img"/>
            )
    }

    return (
        <>
        <div className="menus">
             {restoList.map((item) => {
                 return (
    <section>
    <MenuCard
        imageId={item.data.cloudinaryImageId}
        name={item.data.name}
        address={item.data.address}
        rating={item.data.avgRating}
        costForTwo={item.data.costForTwoString}
        delivery={item.data.deliveryTime}
    />
</section>
)
            })}
        </div>
        </>
    )
}
export default Menus;


