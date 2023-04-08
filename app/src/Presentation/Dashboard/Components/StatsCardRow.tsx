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
      options? : StatCardData[]
 }

 let opt : StatCardData[] = [
    {
      title : "Subscribers",
      number : "2M",
      options : ["Total", "Total2"],
      increase : "1.5%",
      upIncrease : true,
      selectedItem : "Total"
    },
    {
      title : "Artists",
      number : "500K",
      options : ["Total", "Total2"],
      increase : "-1.6%",
      upIncrease : false,
      selectedItem : "Total"
  },
  {
    title : "Subscribers",
    number : "500K",
    options : ["Total", "Total2"],
    increase : "10.6%",
    upIncrease : true,
    selectedItem : "Total"
  },
  {
    title : "Tracks",
    number : "500K",
    options : ["Total", "Total2"],
    increase : "1.6%",
    upIncrease : true,
    selectedItem : "Total"
  }
]

export const StatsCardRow = ({options = opt} : StatsCardRowProps) => {
    return (
        <>
          <div className="flex flex-row gap-6">
             {options.map(o =>  <StatCard title={o.title} number={o.number} increase={o.increase} options={o.options} selectedItem={o.selectedItem} upIncrease={o.upIncrease} onSelect={o.onSelect} /> )}
            
          </div>
        </>
    )
}