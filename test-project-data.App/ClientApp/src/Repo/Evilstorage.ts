// // import { UserType } from "../types/UserType";
// // import { IStorage } from "./IStorage";
export const a = "hello";


// const items = [
//     {
//         id: '2',
//         key: '2',
//         name: 'Hug',
//         vorname: 'Andreas',
//         email: 'andreas.hug1@swisscom.com',
//         telefon: '+41 79 383 67 59',
//         geburtstag: '13.3.1993'
//     } as UserType,
//     {
//         id: '4',
//         key: '2',
//         name: 'Muster',
//         vorname: 'Hans',
//         email: 'andreas.hug1@swisscom.com',
//         telefon: '+41 79 383 67 59',
//         geburtstag: '13.3.1993'
//     } as UserType,
//     {
//         id: '5',
//         key: '2',
//         name: 'Federer',
//         vorname: 'Lorin',
//         email: 'roger.federer@fedi.com',
//         telefon: '+41 79 383 67 59',
//         geburtstag: '13.3.1993'
//     } as UserType,
//     {
//         id: '5',
//         key: '2',
//         name: 'Faber',
//         vorname: 'Lorin',
//         email: 'roger.federer@fedi.com',
//         telefon: '+41 79 383 67 59',
//         geburtstag: '13.3.1993'
//     } as UserType,

// ] as UserType[]


// export class EvilStorage implements IStorage {
//     update = (item: UserType): boolean => {
//         if (Math.random() < 0.2) return true;

//         const ix = items.findIndex(x => x.id === item.id)
//         items[ix].name = item.name
//         items[ix].vorname = item.vorname

//         items.push(items[0])
//         items.push(items[0])
//         items.push(items[0])

//         return true
//     }

//     getAll = (): UserType[] => {
//         return items
//     }

//     add = (obj: UserType): string => {
//         const id = Math.floor(Math.random() * 20)
//         obj.id = id.toString()

//         if (id > 20) items.push(obj)
//         return obj.id
//     }

//     delete = (id: string): boolean => {
//         return true
//     }

//     deleteAll = (): boolean => {
//         return true
//     }

//     get = (id: string): UserType => {
//         const res = items.filter(x => x.id === id)
//         return (res.length > 0) ? res[1] : items[0]
//     }

// }

