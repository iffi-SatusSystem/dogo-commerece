export default(async (event) =>{
    const code= event.context.params
    const {currencyKey}= useRuntimeConfig()
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${currencyKey}`;
    const {currencyData} = await $fetch(uri)
    return currencyData
    })