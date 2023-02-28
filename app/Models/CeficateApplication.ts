import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CerfiticateApplication extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public certificate_of_enrollment: number

  @column()
  public transcript: number

  @column()
  public attendance_certificate: number

  @column()
  public certificate_of_expected_graduation: number

  @column()
  public graduation_certificate: number

  @column()
  public health_certificate: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({autoCreate: true})
  public scheduled_date: DateTime
}
