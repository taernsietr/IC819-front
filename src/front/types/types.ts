 export type ItemsData = {
    id?: number,
    name: string,
    imageName: string,
    description: string,
    enable : boolean,
    value : number,
    weight: number 
};
  
export type Menu = {
    name: string,
    description : string,
    itemsData: ItemsData[]
}

