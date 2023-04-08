import ForbiddenError from "../../../Assets/svgs/ForbiddenError.svg";

const Status403Page = () => {
    return (
        <div className="h-screen bg-black">
          <div className="flex flex-col items-center pt-32 gap-12">
            <div className=" flex flex-col items-center pt-24 justify-between gap-2">
               
                <div>
                <img src={ForbiddenError} alt="Not Found Error"/>
                </div>
            </div>
            <div>
            <p className="text-white text-xl font-bold">You don't have permission to access this</p>
            </div>
         </div>
        </div>
    )
}

export default Status403Page;