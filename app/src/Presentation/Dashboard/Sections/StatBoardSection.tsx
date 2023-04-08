import { CreatorRevenueStatBoard, TrendsBoard,GeoBoard } from "../Components/StatBoards"



const StatBoardSection = () => {
    return (
        <div className="h-5/6 items-center  gap-x-24 flex flex-row mx-auto bg-black justify-center">
                <CreatorRevenueStatBoard/>
                
                <TrendsBoard />

                <GeoBoard/>
        </div>
    )
}

export default StatBoardSection