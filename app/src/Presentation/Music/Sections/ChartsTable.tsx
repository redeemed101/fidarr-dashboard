import { useDispatch } from "react-redux";
import { Chart } from "../../../Domain/Model/Music/Chart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { setChart } from "../../../StateManagement/redux/musicReduer";


export type ChartCardProps = {
    imgSrc : string,
    name : string,
  
}
export const ChartCard = ({imgSrc,name} : ChartCardProps) => {
    return (
        <div className="w-16 h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>               
            </div>
        </div>
        </div>
    )
}

type ChartsTableProps = {
    rows: Chart[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void, 
    deleteItem: (id: string) =>  void,  
    selectedCharts: Chart[],
    selectChart: (Chart: Chart) => void,
    unSelectChart: (Chart: Chart) => void

}

export const ChartsTable = ({rows, currentPage, totalCount, selectedCharts,deleteItem, selectChart, unSelectChart , loadMore, refresh}: ChartsTableProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allSelected, setAllSelected] = useState<boolean>(false)
    const checkSelectAll = (checked: boolean) => {
        console.log("within")
        setAllSelected(checked)
        if(checked){
            
            selectAll()
        }
        else{
            
            unSelectAll()
        }
    }
    const checkChartSelected = (checked: boolean, Chart: Chart) => {
      
          if(checked){
             
             selectChart(Chart)
          }
          else{
            unSelectChart(Chart)
          }
    }
    const selectAll = () => {
        rows.forEach(Chart => {
            
            if(selectedCharts.find(p => p.id == Chart.id) == null){
                console.log(Chart)
                 selectChart(Chart)
            }
            
        })
    }
    const unSelectAll = () => {
        rows.forEach(Chart => {
            if(selectedCharts.find(p => p.id == Chart.id) == null)
                 unSelectChart(Chart)
            
        })
    }
    const deleteChart = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this  Chart?</p>
                  <div className="flex flex-row gap-2 justify-center mt-8">
                        <button className="bg-red-700 w-24 h-10 text-white font-bold rounded-lg" onClick={onClose}>No</button>
                        <button className="bg-white w-24 h-10 text-red-700 rounded-lg"
                            onClick={() => {
                            deleteItem(id)
                            onClose();
                            }}
                        >
                            Yes
                        </button>
                  </div>
                
                </div>
              );
            }
          });
       
      }
    return (
        <div className="flex flex-col w-full">
              <InfiniteScroll
                        dataLength={rows?.length}
                        next={() => loadMore()}
                        hasMore={totalCount/(currentPage * PAGE_SIZE) > 1}
                        loader={<h4 className="text-white text-bold mx-auto">Loading more items...</h4>}
                        refreshFunction={refresh}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        pullDownToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    } 
                >
                <table className="table-auto ml-24 text-white w-11/12 self-end">
                    <thead className="text-left">
                        <tr>
                            <th className="pr-12">
                                   <div className="flex">
                                            <input 
                                            type="checkbox" 
                                            checked={allSelected}
                                            onChange={(e) => checkSelectAll(e.target.checked)}
                                            className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                                    </div>
                            </th>
                            <th>Chart</th>
                            <th>Songs</th>
                            <th>Last Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                        rows.map( chart => 
                        <tr className="text-left">
                        <td className="pr-12">
                        <div className="flex">
                                <input
                                 type="checkbox"
                                 checked={selectedCharts.find(p => p.id == chart.id) != null}                                 
                                          onChange={(e) => checkChartSelected(e.target.checked, chart)}
                                 className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                            </div>
                        </td>
                        <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                            <div >
                            <ChartCard name={chart.name} imgSrc={chart.imgPath} />
                            </div>
                        </td>
                        <td ><p>{chart.positions.length}</p></td>
                        <td><p>{chart.lastUpdated}</p></td>
                        <td>
                            <div className="flex flex-row gap-2">
                                <div className="cursor-pointer">
                                <img src={SettingsIcon} />
                                </div>
                                <div className="cursor-pointer">
                                    <img onClick={() => {
                                            dispatch(setChart(chart))
                                            navigate(`/music/charts/edit/${chart.id}`)
                                        }} src={EditIcon} />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={DeleteIcon} onClick={() => {
                                    
                                        deleteChart(chart.id)
                                    }} />
                                </div>
                            </div>
                        
                        </td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </InfiniteScroll>
        </div>
    )
}