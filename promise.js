function download(url){
    return new Promise( function strt(resolve,reject)
    {console.log("started fectchimg data from url")
   setTimeout(() => {
    console.log("started downloading data from url")
    let data= "dummy data"
    if (data=="dummy data")
    {
         resolve (data)
    }
    else
    {   
        data="invalid data"
        reject (data)
    }
   
    
   }, 2000);})

}
function write(ex){
    return new Promise( function strt(resolve,reject){
        console.log("preparing file for writing");
        setTimeout(() => {
            let wdata="it is not "+ex;
            resolve(wdata)
        }, 1000);
    })
}
function upload(wv,url){
    return new Promise(function (resolve,reject){
        console.log("started preparation for uploading")
        setTimeout(() => {
            console.log("your data is uploaded on url",url)
            if (url=="www.arham.com"){
                reject (url)
            }
            
            
        },2000);
    })
}

console.log(" program started")
x=download('www.lg.com',);

x.then(function down(value){
    
    y=write(value);
    y.then(function wri(wv){
        console.log(wv)
        console.log("writing of data is completed")
        z=upload(wv,"www.arham.com")
        .catch(function kya(url){
            console.log("invalid url")
        })
    }

    );
    
    

    
    
})
.catch(function er(err){
    console.log("the error is ",err)
})
    



