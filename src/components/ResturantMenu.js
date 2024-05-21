import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_IMG } from "../utils/constants";
import useResMenu from '../utils/useResMenu';

const ResturantMenu = () => {
    const { resId } = useParams();
    const resinfo = useResMenu(resId);
    const resMenu = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    if (resMenu == null) return <Shimmer />
    return (
        <div className="flex flex-col m-auto w-2/4 mt-10 gap-8">
            {resMenu.map((list) => (
                <div className="flex justify-between items-center gap-7 mb-4" key={list.card.info.id}>
                    <div className=" w-4/5 flex flex-col gap-1">
                        <h1 className=" text-3xl">{list.card.info.name}</h1>
                        <h2 className="text-2xl">₹ {list.card.info.price / 100}</h2>
                        <span>⭐ {list.card.info.ratings.aggregatedRating.rating}  ({list.card.info.ratings.aggregatedRating.ratingCount})</span>
                        <p className=" overflow-hidden whitespace-nowrap text-ellipsis ">{list.card.info.description}</p>
                    </div>
                    <div className=" w-40 h-36 relative">
                       {list.card.info.imageId?<img  className=" w-40 h-36 rounded-2xl" src={MENU_IMG + list.card.info.imageId} />:""} 
                        <button className=" h-10 w-5/6 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] absolute bottom-1 left-3 text-xl ">Add</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ResturantMenu;