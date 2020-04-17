/**
 * typescript给第三方插件添加声明type，或者额外添加属性
 */
///<reference path="c_types.d.ts"/>

 /**
  * 给无声明文件的插件添加
  * 直接 import "web-storage-cache" 会显示 any，需要额外加多 type
  */
declare module "web-storage-cache" {
  export default class WebStorageCache {
    /** wsCache.set('username', 'wqteam', {exp : 100}); 时间：秒 */
    set(name: string, value: any, option?: { exp: number }):void
    get: any;
    delete: any;
    clear: any;
  }

  
}


declare module "apicloud"{
  export const api:IApiCloud 
  export const ble:any
  export const baiduYunBos:IBaiduYunBos

  export interface BaiduYunBos extends IBaiduYunBos{} 
  export interface Ble extends IBle{}
  export default api

  export function Upload():void 
}




