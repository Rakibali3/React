import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";

const useResMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResMenu(json);
    }
    return resMenu?.data;
}
export default useResMenu;