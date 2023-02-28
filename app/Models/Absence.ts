import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Absence extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public student_name: string

  @column()
  public student_id: string

  @column()
  public kind: number

  @column()
  public reason: string

  @column()
  public start_date: DateTime

  @column()
  public end_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
