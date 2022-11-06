export default interface IDbRepository {
    getAll(): Promise<Array<Object>>
    getById<T>(id:string): Promise<T>
    save(item:Object): Promise<boolean>
    edit(id:string, item:Object): Object
    deleteById(id:string): void
    deleteAll(): void
}