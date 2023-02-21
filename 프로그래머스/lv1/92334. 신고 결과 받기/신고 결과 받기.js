function solution(id_list, report, k) {
    const result = new Array(id_list.length).fill(0)
    const report_obj = {} 
    
    id_list.map((user)=>{
        report_obj[user] = [] 
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_obj[report_id].includes(user_id)){
            report_obj[report_id].push(user_id)
        }        
    })
    
    for(const key in report_obj){
        if(report_obj[key].length >= k){
            report_obj[key].map((user)=>{
                result[id_list.indexOf(user)] += 1
            })
        }
    }
    return result
}