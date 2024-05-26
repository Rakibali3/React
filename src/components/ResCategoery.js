
import ItemData from "./ItemData";
const ResCategoery = ({ data, showItem, setShowItems }) => {
    console.log(data);
    const itemshow = () => {
        setShowItems();
    }
    return (
        <div className=" w-6/12 mx-auto my-6 ">
            <div key={data?.card?.card?.title} className="p-4 my-4 bg-gray-50  shadow-md" >
                <div className="flex justify-between items-center cursor-pointer " onClick={itemshow} >
                    <span className="font-bold text-md">{data?.title} ({data?.itemCards?.length})</span>
                    <span> <i className="fa-solid fa-angle-up"></i></span>
                </div>

                {showItem && <ItemData items={data?.itemCards} />}
            </div>
        </div>
    )
}
export default ResCategoery;