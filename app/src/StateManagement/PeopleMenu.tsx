export const enum PeopleMenuType{
    Accounts,
    Subscribers
}

export type PeopleMenu = {
    title : string,
    isSelected?:boolean,
    route : string,
    type : PeopleMenuType,
    action? : () => void
}

export const peopleMenuItems : PeopleMenu [] = [
    {
        title : "Accounts",
        route: "/people/accounts",
        type: PeopleMenuType.Accounts
    },
    {
        title : "Subscribers",
        route: "/people/subscribers",
        type: PeopleMenuType.Subscribers
    }

]