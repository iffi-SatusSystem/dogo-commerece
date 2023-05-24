export default (async (event) =>{
//    const  {name}= useQuery(event)
//    const {age} = await useBody(event)
   const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apiKey=Avcazn8C0EV1LaHCnhtjegzcGnB0um4mpCd5RWrY')
    return data
})