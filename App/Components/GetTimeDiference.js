import moment from "moment";


export default getSendTime = (t2) => {
    var date = new Date().toLocaleDateString()
    var time = new Date().toLocaleTimeString()
    var now = date + " " + time
    var ms = moment.utc(moment(now, "MM/DD/YYYY HH:mm:ss").diff(moment(t2, "MM/DD/YYYY HH:mm:ss"))).format('MM:DD:HH:mm:ss');
    var s=ms.split(':')
    if (s[0] === '00') {
        if (s[1] === '00') {
            if (s[2] === '00') {
                if (s[3] === '00')
                {
                    if(s[4]==='00')
                    return 'Just Now'
                    else return parseInt(s[4]) +' seconds ago'
                }
                else return parseInt(s[3])+' minutes ago'
            }
            else return parseInt(s[2])+' hours ago' 
        }
        
        else {
            return parseInt(s[1])+' days ago'
        }
    }
    else return parseInt(s[0])+' months ago'
}