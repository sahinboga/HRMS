import { toast } from "react-toastify";

export const CallBack= async(call,dispatch,mainMethod)=>{

    return await call
    .then(result=>{
        if(result.data.success){
            toast.success(result.data.message);
        }
        else{
            toast.error(result.data.message);
        }
        
            dispatch(mainMethod)
        
    })
    .catch(errorResult=>{
        console.log(errorResult)
    })
}