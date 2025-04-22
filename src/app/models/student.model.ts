import { IAddres, IStudent } from "../interfaces/students.interface";

export class Student implements IStudent {
    constructor(
        public name = "",
        public email = "",
        public age = null,
        public address: IAddres = {
            city: "",
            state: ""
        }
    ){}
}