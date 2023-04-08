import StatCard from "./StatCard"

export type StatCardData =   {
    title : string,
    number : string,
    increase : string,
    options: string[],
    upIncrease: boolean,
    onSelect?: (event: any) => void,
    selectedItem : string
 }

 interface StatsCardRowProps{
      options : StatCardData[]
 }

export const StatsCardRow = ({options} : StatsCardRowProps) => {
    return (
        <>
          <div className="flex flex-row gap-6">
             {options.map(o =>  <StatCard title={o.title} number={o.number} increase={o.increase} options={o.options} selectedItem={o.selectedItem} upIncrease={o.upIncrease} onSelect={o.onSelect} /> )}
            
          </div>
        </>
    )
}