
type Callback = (ret:any, err:any)=>void


interface IApiCloud{
  require(moduleName:string):any
  openWin():void
}

interface IBle{

}

interface IBaiduYunBos{
  init(param?:{accessKey?:string, secretKey?:string, endpoint?:string, token?:string, type?:string}, callback?:Callback):void
  putObject(param:{bucket:string,objectKey:string,filePath:string}, callback:Callback)
}


