'use strict';

const Controller = require('egg').Controller;
let data = {
  code:0,
  data:null,
  success:'true'
}
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, ';
  }
  async user() {
    const { ctx } = this;
    data.data = {
      theme:'theme1',
    }
    ctx.body = data;
  }
  async userPost() {
    const { ctx } = this;
    data.data = {
      type:'post',
      way:'test',
      data:[1,2,3,4,5]
    }
    ctx.body = data;
  }
  async search() {
    const { ctx } = this;
    const type = ctx.query.type;
    const q = ctx.query.q || 'nodejs';

    if (type === 'bing') {
      ctx.redirect(`https://www.bing.com/search?q=${q}`);
    } else {
      ctx.redirect(`https://www.google.com.hk/search?q=${q}`);
    }
  }
}

module.exports = HomeController;
