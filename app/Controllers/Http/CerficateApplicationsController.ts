import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CerfiticateApplication from 'App/Models/CerfiticateApplication';

export default class CerfiticateApplicationsController {
  public async index(ctx: HttpContextContract) {
    const cerfiticate = await CerfiticateApplication.all()
    const date = {
      title: '証明書一覧',
      data: cerfiticate
    }
    return ctx.view.render('cerfiticate_applications/index', date)
  }

  public async add(ctx: HttpContextContract) {
    const data = {
      title: '証明書一覧',
      message: '証明書一覧'
    }
    return ctx.view.render('cerfiticate_applications/add', data)
  }

  public async add_posted(ctx: HttpContextContract) {
    await CerfiticateApplication.create(ctx.request.body())
    return ctx.response.redirect('/cerfiticate')
  }
}
