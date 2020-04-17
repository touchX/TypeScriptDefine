import WebStorageCache from "web-storage-cache"
import {api, baiduYunBos, BaiduYunBos, Upload} from "apicloud"
//import window from 'window'

let webStorage:WebStorageCache

webStorage.set('touchx',12)


api.require('ble')
api.openWin()
baiduYunBos.init()

let bos = api.require('baiduYunBos') as BaiduYunBos
bos.putObject({bucket:'bucket',objectKey:'objectKey',filePath:'filePath'},()=>{})


/**
 * 给第三方插件额外添加
 */

declare module "web-storage-cache"{
  export const TreeTable: any;
  export const TreeTableColumn: any;
} 

/**
 * 给第三方 interface 添加属性 
 */
declare module "apicloud"{
  export interface BaiduYunBos{
    onSuccess:Function
  } 

  
}

bos.onSuccess = function(){}

/**
 * 给window添加属性
 */
export type IWindow = typeof window & {myTag:string}
let myWin:IWindow

myWin.myTag = 'aaaa'







