import ConnectError from "../../../Assets/svgs/ConnectError.svg";

import { PrimaryButton } from "../../Common/buttons";

const Status400Page = () => {
    return (
        <div className="h-screen bg-black">
          <div className="flex flex-col items-center gap-12">
            <div className=" flex flex-col items-center pt-24 justify-between gap-2">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-white text-3xl font-bold">404</p>
                    <p className="text-white ">Page Not Found</p>
                </div>
                <div>
                <img src={ConnectError} alt="Not Found Error"/>
                </div>
            </div>
            <div>
              <PrimaryButton title='Go To Overview' padY={2} padX={4} height="10" width="48" />
            </div>
         </div>
        </div>
    )
}

export default Status400Page;