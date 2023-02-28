import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from "App/Models/Student";

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Student.createMany([
      {
        name: 'yuu',
        code: 's21022',
      },
      {
        name: 'seiga',
        code: 's21010',
      },
    ])
  }
}
