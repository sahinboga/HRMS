class Helper {

    static DateAgo(date) {

        return Math.floor((Date.now() - date.getTime()) / (1000 * 3600 * 24));
    }

    static IsBlank(str){
        if(!str || str?.length===0)
        {
            return null;
        }
        return str;
    }

    static StrToArray(str){
        if(this.IsBlank(str)==null){
            return null;
        }
        return str?.split(",")?.map((val)=>{return parseInt(val)})
    }
}
export default Helper