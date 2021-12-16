class Helper {

    static DateAgo(date) {

        return Math.floor((Date.now() - date.getTime()) / (1000 * 3600 * 24));
    }

    static OnlyYearAndMonth(date) {
        const d = new Date(date)//date= yyyy-MM-dd
        if (Helper.isValidDate(d)) {
            const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
            let dateValues = date.split('-')
            return (months[parseInt(dateValues[1])] + " " + dateValues[0])
        }
        return undefined
    }

    static DateEditing(date) {
        const d =new Date(date)
        if(Helper.isValidDate(d)){

            const [year, month, day] = date.split('-')
            // dd/mm/yyyy
            return(`${day}-${month}-${year}`)
        }

        return undefined
    }

    static isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }

    static IsBlank(str) {
        if (!str || str?.length === 0) {
            return null;
        }
        return str;
    }

    static StrToArray(str) {
        if (this.IsBlank(str) == null) {
            return null;
        }
        return str?.split(",")?.map((val) => { return parseInt(val) })
    }

    static async setMyCallBack(mainFunc) {
        await mainFunc()
    }
}
export default Helper