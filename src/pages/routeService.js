import HttpService from '../utils/httpService';

import {routes} from './routes'

class RouteService extends HttpService{

    async getRoutes() {
        try{
            let result = routes;
            if ((result instanceof Object)) {
                return result || []
            } else {
                console.log('获取路由失败！');
                return  {
                    tip: '获取路由失败！',
                    response: result,
                }
            }
        } catch(err){
            throw err
        }
    }

    // async getRoutes() {
    //     try{
    //         let result = await this.request('post', '/v1/captchas', {})
    //         if (result.status === 1 && (result instanceof Object)) {
    //             return result || []
    //         } else {
    //             let err = {
    //                 tip: '获取验证码失败',
    //                 response: result,
    //             }
    //             throw err
    //         }
    //     } catch(err){
    //         throw err
    //     }
    // }

}

export default new RouteService()