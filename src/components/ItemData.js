import { CDN_LINK } from "../utils/constants"
const ItemData = ({ items }) => {
    return (
        <div>
            {items.map((data) => (
                <div key={data?.card?.info?.id} className="border-gray-300 border-b-2 my-2 p-2 flex justify-between">
                    <div className="flex flex-col gap-1 w-2/3">
                        <span className="text-2xl">{data?.card?.info?.name}</span>
                        <p className="text-lg">₹ {data?.card?.info?.defaultPrice / 100 || data?.card?.info?.price / 100}</p>
                        {data?.card?.info?.ratings?.aggregatedRating?.rating && data?.card?.info?.ratings?.aggregatedRating?.ratingCount ? <span><span className="text-[#1BA672]">★ {data?.card?.info?.ratings?.aggregatedRating?.rating}</span>  <span>({data?.card?.info?.ratings?.aggregatedRating?.ratingCount})</span></span> : ""}
                        <p className=" overflow-hidden whitespace-nowrap text-ellipsis text-wrap text-sm">{data?.card?.info?.description}</p>
                    </div>
                    <div className="1/3 my-2">
                        {data?.card?.info?.imageId ? (
                            <>
                                <button className="h-10 w-32 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] text-xl absolute mx-4 my-24">
                                    Add
                                </button>
                                <img src={CDN_LINK + data?.card?.info?.imageId} className="w-40 h-32 rounded-2xl" />
                            </>
                        ) : (
                            <div className="my-9 mx-4">
                                <button className="h-10 w-32 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] text-xl my-auto">
                                    Add
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemData;


// <div className="flex flex-col m-auto w-2/4 mt-10 gap-8">
//     {props.map((list) => (
//         <div className="flex justify-between items-center gap-7 mb-4" key={list.card.info.id}>
//             <div className=" w-4/5 flex flex-col gap-1">
//                 <h1 className=" text-3xl">{list.card.info.name}</h1>
//                 <h2 className="text-2xl">₹ {list.card.info.price / 100}</h2>
//                 <span>⭐ {list.card.info.ratings.aggregatedRating.rating}  ({list.card.info.ratings.aggregatedRating.ratingCount})</span>
//                 <p className=" overflow-hidden whitespace-nowrap text-ellipsis ">{list.card.info.description}</p>
//             </div>
//             <div className=" w-40 h-36 relative">
//                 {list.card.info.imageId ? <img className=" w-40 h-36 rounded-2xl" src={MENU_IMG + list.card.info.imageId} /> : ""}
//                 <button className=" h-10 w-5/6 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] absolute bottom-1 left-3 text-xl ">Add</button>
//             </div>
//         </div>
//     ))}
// </div>