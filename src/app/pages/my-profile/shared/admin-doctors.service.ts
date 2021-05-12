import { Injectable } from '@angular/core';

export class Doctor {
    ID: number;
    FirstName: string;
    LastName: string;
    Patronymic: string;
    Email: string;
    Phone: string;
    UserPic: string;
    //Gender: string;
    Specialization: string;
    Description: string;
    //CarierStart: dateTimeFormat(new Date().toDateString());
}

/*export class State {
    ID: number;
    Name: string;
}*/

let doctors: Doctor[] = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Patronymic": "Robertson",
    "Email": "jhr@mail.ru",
    "Phone": "89000000000",
    "UserPic": "#",
    "Specialization": "Herpetologist",
    "Description": "Text text text text text text text text text text text text text text text text text text text text text text text text text",
}, {
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Patronymic": " ",
    "Email": "olp@mail.ru",
    "Phone": "89000000000",
    "UserPic": "#",
    "Specialization": "Ornithologist",
    "Description": "Text text text text text text text text text text text text text text text text text text text text text text text text text",
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Patronymic": " ",
    "Email": "robre@mail.ru",
    "Phone": "89000000000",
    "UserPic": "#",
    "Specialization": "Veterinarian",
    "Description": "Text text text text text text text text text text text text text text text text text text text text text text text text text",
}];

/*let states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}];*/

@Injectable()
export class Service {
    getDoctors() {
        return doctors;
    }
    /*getStates() {
        return states;
    }*/
}