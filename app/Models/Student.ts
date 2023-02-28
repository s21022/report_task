
import { column,  BaseModel } from '@ioc:Adonis/Lucid/Orm'


export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public code: string

  @column()
  public name: string

}
