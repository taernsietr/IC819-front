export interface ItemsData {
    id?: string,
    name: string,
    imageName: string,
    description: string,
    enable?: boolean,
    availableInStock?: number,
    value : number,
    weight: number 
}
  
export interface Menu {
    name: string,
    available?: boolean,
    description : string,
    itemsData: ItemsData[]
}

export interface MenuFilter {
    name: string,
    available?: boolean,
    filter: string,
    description : string,
    itemsData: ItemsData[]
}

export interface ClientDataType {
	name: string,
	cpf?: string,
	email?: string,
	phone?: string,
	passwordHash?: string,
	addressID?: string,
	token?: string
}

export interface PropsFilter {
    filter: string,
}

export interface PropsEvent {
    search: string,
    changeTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ItemModal {
    id?: number,
    name: string,
    imageName: string,
    description: string,
    enable?: boolean,
    value : number,
    availableInStock?: number,
    weight: number 
    show: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>
}