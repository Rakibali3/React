import ResturantCard, { ResturantCardWithPromoted } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

//body component
const Body = () => {
    const [list, setList] = useState([]);
    const [search, setsearch] = useState("");
    const [filteredRes, setfilteredRes] = useState([]);

    const Withlabel = ResturantCardWithPromoted(ResturantCard);

    //filter function
    function Filter() {
        const newlist = list.filter(
            (res) => res.info.avgRating > 4
        )
        setfilteredRes(newlist);
    }

    useEffect(() => {
        effect();
    }, []);


    const effect = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.406498&lng=78.47724389999999");
        const json = await data.json();
        setList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRes(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    //online connectivity
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like your offline please check your internet and try again!!</h1>;
    }


    const handleSearch = (e) => {
        const searchtext = e.target.value;
        setsearch(searchtext);
        if (searchtext == "") {
            setfilteredRes(list);
        } else {
            const filterdata = list.filter(res =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setfilteredRes(filterdata);
        }
    }
    
    if(list.length===0){
        return <Shimmer />
    }
    return  (
        <div className="body">
            <div className="mb-4 mt-4 flex justify-center gap-4">
                <input className="p-1 h-10 w-3/12 border-2 border-black rounded-md" type="text" placeholder="Search for products..." value={search} onChange={handleSearch} />
                <button className="bg-blue-800 h-9 w-20 rounded-md text-white " ><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
                <button className="bg-blue-800 h-9 w-44 text-white rounded-md" onClick={Filter}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {filteredRes.map((res) => (
                    res.info.promoted ? <Withlabel key={res.info.id} resData={res} /> : <ResturantCard key={res.info.id} resData={res} />
                ))}
            </div>
        </div>
    )
}
export default Body;