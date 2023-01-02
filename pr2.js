function download(url ,fn){
    console.log("started downing from ",url)
    setTimeout(() => {
        data="jonny jonny yess papa,"
        fn (data)
        
    }, 5000);
}
function writing(val){
    return new Promise(function wri(resolve,reject){
        setTimeout(() => {
            wv=val+"eating sugar no papa,"
            resolve(wv)
            
        }, 5000);

    })
}
function uploading(val,x){
    return new Promise(function up(resolve,reject){
        setTimeout(() => {
            if (val=="www.banni.com"){
                console.log("file is uploaded on url "+val+" and your data is "+x, )
                resolve(x)
            }
            else{
                reject(val)
            }
        }, 4000);
    })
}

x=download("www.macos.com",function fn(value){
    console.log(value);
    console.log("downloading completed")
    z=write(value)
    async function write(value){
        try{
           console.log("started wrting")
        let y=await writing (value)
        console.log("preparing for uploading data")
        let a=await uploading ("www.banni.com",wv) 
        }
        catch (e){

            console.log("your err is",e)
        }
        
    }


})
console.log("end")