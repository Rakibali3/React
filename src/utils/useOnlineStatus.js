import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const[onlineStatus,setonlineStatus] = useState(true);
    useEffect(()=>{
        Status();
    },[]);

    const Status = ()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setonlineStatus(true)
        });
    }
    return onlineStatus;
}

export default useOnlineStatus;