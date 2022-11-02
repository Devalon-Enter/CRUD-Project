import { UserType } from "../types/UserType"
import { IStorage, LocalStorage } from "./IStorage"

const storage = new LocalStorage() as IStorage

const item = {
    id: '2',
    key: '2',
    name: 'Hug',
    vorname: 'Andreas',
    email: 'andreas.hug1@swisscom.com',
    telefon: '+41 79 383 67 59',
    geburtstag: '13.3.1993'
} as UserType


// getAll
test('getAll() should not fail', () => {
    expect(() => storage.getAll()).not.toThrowError();
})




// add
test('item gets successfully added', () => {  
    const prevCount = storage.getAll().length
    storage.add(item)
    const afterCount = storage.getAll().length
    expect(prevCount + 1).toBe(afterCount)
})

test('add should return the id of the newly item. The newly added item should be retrievable with "get"', () => {
    const prevItems = storage.getAll().length
    const dummyItem = { ...item, id: 'youlearncode' }
    expect(() => storage.add(dummyItem)).toBe(prevItems + 1);
})




// delete
test('delete should remove one item', () => {
    const prevCount = storage.getAll().length
    storage.delete(item.id);
    const afterCount = storage.getAll().length
    expect(prevCount - 1).toBe(afterCount)
})

test('delete should remove the correct item', () => {
    storage.delete(item.id);
    const afterItems = storage.getAll();

    expect(afterItems.filter(x => x.id === item.id)).toEqual([])
})

test('what happens if delete an item that is not present',() => {

    const currentItems = storage.getAll();
    const dummyItem = { ...item, id: 'blalbalal' };
    expect(currentItems.filter(x => x.id === dummyItem.id)).toEqual([]) // um sicher zu stellen, dass dummyItem auch wirklich nicht vorhanden ist

    storage.delete(item.id); // expected behaviour: to throw an error
    expect(() => storage.delete(item.id)).toThrowError();
})

test('delete all items', () => {
    const prevCount = storage.getAll().length
    storage.deleteAll()
    const afterCount = storage.getAll().length
    expect(prevCount - prevCount).toBe(afterCount)
})




// get function
test('get with valid id should return item with given id', () => {
    const returnedItem = storage.get(item.id)
    expect(returnedItem.id).toBe(item.id)
})

test('get with invalid id should throw an error', () => {
    
})




// update
test('update should successfully update', () => {
    const prevItems = storage.getAll();
    let tmp = prevItems[0];
    tmp.name = tmp.name + '_dummy'
    const res = storage.update(tmp);
    expect(res).toBe(true)
})


//TODO expect to be updated
test('update should successfully update the item and changes should be persisted', () => {
    const prevItems = storage.getAll();
    let tmp = prevItems[0];
    tmp.name = tmp.name + '_dummy';
    const res = storage.update(tmp)
    expect(res).toBeDefined();
})

test('update should not change the total item count', () => {
    const prevItems = storage.getAll().length;
    let tmp = storage.getAll()[0];
    tmp.name = tmp.name + '_dummy';
    storage.update(tmp)
    expect(prevItems).not.toBe(prevItems + 1)
})
