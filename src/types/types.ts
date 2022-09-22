// Items

export interface ItemsData {
    id: string,
    name: string,
    imageName: string,
    description: string,
    enable?: boolean,
    availableInStock?: number,
    value : number,
    weight: number 
}

export interface ItemModal {
    id: string,
    name: string,
    imageName: string,
    description: string,
    enable?: boolean,
    value : number,
    availableInStock?: number,
    weight: number 
    show: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    onKeyPress: any,
}

// Menu

export interface MenuType {
    name: string,
    available?: boolean,
    description : string,
    itemsData: ItemsData[]
}

// Cart

export interface CartItem {
    item: ItemsData;
    quantity: number;
}

// Filter

export interface PropsEvent {
    search: string,
    changeTerm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface MenuFilter {
    name: string,
    available?: boolean,
    description : string,
    filter: string,
    itemsData: ItemsData[]
}

export interface PropsFilter {
    filter: string,
}

// Client

export interface ClientDataType {
	name: string,
	cpf: string,
	email: string,
	phone: string,
	passwordHash: string,
	addressID?: string,
	token?: string
}

export interface ClientDataInput {
	name: boolean,
	cpf: boolean,
	email: boolean,
	phone: boolean,
	passwordHash: boolean
}
