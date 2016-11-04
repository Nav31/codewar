function formatDuration (seconds) {
    if (seconds === 0) return "now";
	  let ans = "", count = 0;
    let map = {"year": 0, "day": 0, "hour": 0, "minute": 0, "second": 0};
    let secInYear = 31536000, secInDay = 86400, secInHour = 3600, secInMin = 60; 
    while (seconds > 0) {
        if(seconds >= secInYear) {
            map["year"] = Math.floor(seconds / secInYear);
            seconds = seconds % secInYear;
        }
        else if(seconds >= secInDay) {
            map["day"] = Math.floor(seconds / secInDay);
            seconds = seconds % secInDay;
        }
        else if (seconds >= secInHour) {
            map["hour"] = Math.floor(seconds / secInHour);
            seconds = seconds % secInHour;
        }
        else if(seconds >= secInMin) {
            map["minute"] = Math.floor(seconds / secInMin);
            seconds = seconds % secInMin;
        }
        else {
            map["second"] = seconds;
            seconds = 0;
        }
    }
    for(let key in map) {
    	if(map[key] > 0) {
    		map[key] > 1 ? ans += "" + map[key] + " " + key + "s, " : ans += "" + map[key] + " " + key + ", ";
            count++
    	}
    }
    if (count > 1) {
        ans = ans.trim().split(" ");
        ans.splice(ans.length - 2, 0, "and");
        ans = ans.join(" ")
        ans = ans.substring(0, ans.length-1)
        ans = ans.split("")
        let idx = ans.lastIndexOf(",")
        ans.splice(idx, 1)
        ans = ans.join("")
        return ans;
    } else {
    	ans = ans.trim()
    	ans = ans.substring(0, ans.length-1);
    	return ans
    }
}