import ServerError from "../../../Assets/svgs/ServerError.svg";

import { PrimaryButton } from "../../Common/buttons";

const Status500Page = () => {
    return (
        <div className="h-screen bg-black">
          <div className="flex flex-col items-center gap-12">
            <div className=" flex flex-col items-center pt-24 justify-between gap-2">
                <div className="flex flex-row gap-2">
                    <p className="text-red-900 font-bold">500</p>
                    <p className="text-white font-bold">Internal Server Error</p>
                </div>
                <div>
                <img src={ServerError} alt="Server Error"/>
                </div>
            </div>
            <div>
              <PrimaryButton title='Contact Support' padY={2} padX={3} height="10" width="40" />
            </div>
         </div>
        </div>
    )
}

export default Status500Page;