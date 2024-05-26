import { CDN_LINK } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const ItemData = ({ items }) => {
    const dispatch = useDispatch();

    const addItems = (data) => {
        dispatch(addItem(data));
    }

    return (
        <div>
            {items.map((data) => (
                <div key={data?.card?.info?.id} className="border-gray-300 border-b-2 my-2 p-2 flex justify-between" data-testid="item-data">

                    <div className="flex flex-col gap-1 w-2/3">
                        <span className="text-2xl">{data?.card?.info?.name}</span>
                        <p className="text-lg">₹ {data?.card?.info?.defaultPrice / 100 || data?.card?.info?.price / 100}</p>
                        {data?.card?.info?.ratings?.aggregatedRating?.rating && data?.card?.info?.ratings?.aggregatedRating?.ratingCount ? <span><span className="text-[#1BA672]">★ {data?.card?.info?.ratings?.aggregatedRating?.rating}</span>  <span>({data?.card?.info?.ratings?.aggregatedRating?.ratingCount})</span></span> : ""}
                        <p className=" overflow-hidden whitespace-nowrap text-ellipsis text-wrap text-sm">{data?.card?.info?.description}</p>
                    </div>
                    <div className="1/3 my-2">
                        {data?.card?.info?.imageId ? (
                            <>
                                <button className="h-10 w-32 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] text-xl absolute mx-4 my-24" onClick={() => addItems(data)}>
                                    Add
                                </button>
                                <img src={CDN_LINK + data?.card?.info?.imageId} className="w-40 h-32 rounded-2xl" />
                            </>
                        ) : (
                            <div className="my-9 mx-4">
                                <button className="h-10 w-32 rounded-md border-1 font-medium bg-white shadow-xl text-[#1ba672] text-xl my-auto" onClick={() => addItems(data)}>
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

