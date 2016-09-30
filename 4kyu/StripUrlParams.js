function stripUrlParams(url, paramsToStrip){
    if(paramsToStrip) {
        if(url.indexOf('?') !== -1) {
            let urlSplitArr = url.split("?");
            let newArr = urlSplitArr[1].split(paramsToStrip);
            let appendThis = newArr[0].substring(0, newArr[0].length - 1);
            return urlSplitArr[0] + "?" + appendThis;    
        } else return url;
    } else {
        let urlSplitArr = url.split("?");
        let queryParams = urlSplitArr[1].split(/[&]/);
        let holder = [], str = "";
        for(let i = 0; i < queryParams.length; i++) {
            if(holder.indexOf(queryParams[i][0]) === -1) {
                holder.push(queryParams[i][0])
                str += queryParams[i] + "&";
            }
        }
        return urlSplitArr[0]+"?"+str.substring(0, str.length - 1);
    }
}