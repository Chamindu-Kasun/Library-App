export interface IAuthor {
    name: string;
}

export interface IBook {
    name: string;
    price: string;
    author: IAuthor | null;
}

export interface selectorOptionType {
    label: string
    value: IAuthor
}