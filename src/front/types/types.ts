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

export type MenuFilter = {
    name: string,
    filter: string,
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

export type PropsFilter = {
    filter: string,
}

export type PropsEvent = {
    search: string,
    changeTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
  };

export type ItemModal = {
    itemsData: ItemsData,
    clickButton: React.MouseEventHandler<HTMLButtonElement>;
}