export interface IAddres {
    city: string;
    state: string;
}

export interface IStudent {
    name: string;
    email: string;
    age: number | null;
    address: IAddres
}