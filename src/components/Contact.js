const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl text-center m-3 p-2 ">Contact Us Page</h1>
            <form>
                <div className="flex flex-col items-center justify-center m-3 p-2 gap-2">
                    <input type="text" placeholder="name" className="p-1 h-10 w-3/12 border-2 border-black rounded-md"/>
                    <input type="text" placeholder="email" className="p-1 h-10 w-3/12 border-2 border-black rounded-md"/>
                    <textarea placeholder="message"  rows="3" cols="47" className="p-1  border-2 border-black rounded-md" />
                    <button className="bg-blue-800 text-white w-3/12 rounded-lg p-2 hover:bg-blue-700">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;