import MenuCard from "./MenuCard";
import { Data } from "../Data";
import { useState } from 'react';
import '../styles/Menus.css';
function Menus() {
    const [restoList, setRestoList] = useState(Data);
    function sortData(){
        const newRestoList=restoList.filter((res)=>res.data.avgRating>4);
        setRestoList(newRestoList);
        console.log("button clicked")
    }
    return (
        <>
           <button onClick={sortData}>Filter</button>

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