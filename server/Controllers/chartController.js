const moment=require('moment')
const genRandomNumber=()=>{
    const timeStamp=moment().format('MMMM Do YYYY, h:mm:ss a');
    const value=Math.floor(Math.random()*10);
    return {timeStamp,value}
}

const randumNumber=(req,res)=>{
    const data=genRandomNumber()
    res.status(200).json(data)
}

module.exports=randumNumber
