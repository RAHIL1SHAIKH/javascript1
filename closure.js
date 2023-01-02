function download(url ,fn){
    console.log("fetching data to download");
    setTimeout(function fetch( ) {
        console.log("started download data");
        let data="this is microsoft data tankyou to all of the imployee who are working in microsoft ."
        
        fn (data)

        
    }, 5000);
}
function writting(data,fun){
    console.log("stated writing data in file ");
    setTimeout(function write(){
        wr="dammy data"+ data
        console.log("writing completed")
        fun(wr)


    },4000 )
}
function uploading(url,func){
    console.log("started uploading data")
    setTimeout(() => {
        up="all data"
        func(up)
        
    }, 6000);
}
console.log("stared preparation for downloading data");
x=download("www.microsoft.com",function fn(data){
    console.log("the downloaded data is : ",data)
    writting(data,function hex(wr){ 
        console.log(wr)
        uploading(wr,function uploading(val){
            console.log(val)
        })

    })
})
console.log("end")