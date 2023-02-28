// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import { schema, rules} from '@ioc:Adonis/Core/Validator';
import Student from "App/Models/Student";

export default class AuthController {
  public async registerShow({view}: HttpContextContract) {
    return view.render('auth/register')
  }

  public async loginShow({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  public async register({ request, response, }: HttpContextContract) {
    console.log('register')
    const StudentSchema = schema.create({
      name: schema.string({trim: true}),
      code: schema.string({trim: true}, [
        rules.unique({table: 'students', column:'code'})
      ]),
    })

    const data = await request.validate({
      schema: StudentSchema,
    })
    console.log(data)

    const user = await Student.create(data)

    //await auth.login(user)

    return response.redirect().toPath('/')
  }

  public async login({request, response, session}: HttpContextContract) {
    const {code} = request.only(['code'])
    console.log(code)
    session.put('code', code)

    return response.redirect().toPath('/')
  }
  public async logout({response, session}: HttpContextContract) {
    session.forget('code')

    return response.redirect().toRoute('/')
  }
}
