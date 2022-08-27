
function getDictionary(arr,inp){
    arr.forEach(n=>{
        inp.forEach(inp=>{
            sum=inp/n
            out=inp%n
        
            if(out==0){
                console.log(arr[n-1]+':'+sum);
            }
        })
        })
}
getDictionary([1,2,3,4,5,6,7,8,9],[1,2,8,9,12,46,76,82,15,20,30])