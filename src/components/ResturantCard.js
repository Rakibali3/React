import { Link } from "react-router-dom";
import { CDN_LINK } from "../utils/constants";
//Resturant Card
const ResturantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;

    return (

        <Link to={"/resturants/" + resData.info.id} className="h-full"><div className="flex flex-col p-2  ease-in hover:scale-95 ">
            <div className="w-72 p-2 m-5 ">
                <img className="h-44 w-full rounded-3xl" src={CDN_LINK + cloudinaryImageId} />
                <div className="p-3 flex flex-col gap-px">
                    <h3 className="overflow-hidden whitespace-nowrap text-ellipsis text-lg">{name}</h3>
                    <div className="span">
                        <span>⭐ {avgRating}</span>
                        <span> •  </span>
                        <span>  {sla.deliveryTime} mins</span>
                    </div>
                    <h4 className="text-sm">{costForTwo}</h4>
                    <p className="overflow-hidden whitespace-nowrap text-ellipsis w-full text-sm text-zinc-500 ">{cuisines.join(", ")}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

//Higher order component
export const ResturantCardWithPromoted = (ResturantCard)=>{
  return (props)=>{
    return (
        <div className="relative bottom-7">
            <div className="relative top-14 left-7">
            <label className=" bg-black text-white p-1 left-10 rounded-tl-lg">Pomoted</label>
            </div>
            <ResturantCard {...props}/>
        </div>
    )
  }
}

export default ResturantCard;