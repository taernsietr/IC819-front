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
};
export type ClientDataType = {
	name: string,
	cpf?: string,
	email?: string,
	phone?: string,
	passwordHash?: string,
	addressID?: string,
	token?: string
}
