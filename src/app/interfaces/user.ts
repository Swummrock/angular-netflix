import { Movie } from "./movie";

export interface User {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: number;
    favorite?: Movie[];

}
