import {Movie} from "../movie/movie.model"

export class PersonMovie {
    id: Number;
    personId: Number;
    firstName: String;
    lastName: String;
    subscriptionType: String;
    age: String;
    movie:Movie[];
}