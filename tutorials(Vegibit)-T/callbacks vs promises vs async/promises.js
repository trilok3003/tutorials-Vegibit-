const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let res=1;
        if(res==1){
            resolve("it worked");
        }
        else{
            reject(new Error("Something went wrong"));
        }
    },1000);
});
promise.then(result=>{
    console.log("Result",result)
}).catch(err=>{
  console.log("Error",err.message);
})