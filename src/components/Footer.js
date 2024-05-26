
const Footer = () => {
    return (
        <div className=" bg-slate-950  ">
            <div className="flex justify-center items-center gap-20 p-8" >
                <div className="text-gray-400">
                    <h1 className="text-white text-xl">Good Food</h1>
                    <h3>© 2024 Bundl Technologies Pvt. Ltd</h3>
                </div>
                <div className=" text-gray-400 flex flex-col gap-2">
                    <h1 className="text-white text-xl">Company</h1>
                    <p className="cursor-pointer hover:underline">About</p>
                    <p className="cursor-pointer hover:underline">Career</p>
                    <p className="cursor-pointer hover:underline">Teams</p>
                    <p className="cursor-pointer hover:underline">Groceries</p>
                    <p className="cursor-pointer hover:underline">Contact Us</p>
                    <p className="cursor-pointer hover:underline">Help</p>
                </div>
                <div className="flex flex-col gap-7 text-gray-400">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-xl">Contact Us</h1>
                        <p className="cursor-pointer hover:underline">Help & Support</p>
                        <p className="cursor-pointer hover:underline">Partner with us</p>
                        <p className="cursor-pointer hover:underline">Ride with us</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-xl">Legal</h1>
                        <p className="cursor-pointer hover:underline">Terms & Conditions</p>
                        <p className="cursor-pointer hover:underline">Cookie Policy</p>
                        <p className="cursor-pointer hover:underline">Privacy Policy</p>
                        <p className="cursor-pointer hover:underline">Investor Relations</p>
                    </div>
                </div>
                <div className="text-gray-400 flex flex-col gap-2 "> 
                    <h1 className="text-white text-xl">We deliver to:</h1>
                    <p className=" cursor-pointer hover:underline">Bangalore</p>
                    <p className=" cursor-pointer hover:underline">Gurgaon</p>
                    <p className=" cursor-pointer hover:underline">Hyderabad</p>
                    <p className=" cursor-pointer hover:underline">Delhi</p>
                    <p className=" cursor-pointer hover:underline">Mumbai</p>
                    <p className=" cursor-pointer hover:underline">Pune</p>
                    <p className=" cursor-pointer hover:underline">589 cities more ...</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;