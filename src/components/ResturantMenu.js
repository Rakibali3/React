import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from '../utils/useResMenu';
import ResCategoery from "./ResCategoery";
import { useState } from "react";

const ResturantMenu = () => {
    const [showItems, setShowItems] = useState(null);

    const { resId } = useParams();
    const resinfo = useResMenu(resId);
    const name = resinfo?.cards[0]?.card?.card?.text;
    const resMenu = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    if (resMenu == null) return <Shimmer />
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">{name}</h1>
            {resMenu.map((data, index) =>
                <ResCategoery key={data?.card?.card?.title} data={data?.card?.card} showItem={index === showItems} setShowItems={() => setShowItems(index === showItems ? null : index)} />
            )}
        </div>
    )
}
export default ResturantMenu;
