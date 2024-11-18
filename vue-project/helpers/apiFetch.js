export default async function (method, route, body = null)
{
    const options = {
        method,
        headers: {
            Accept: 'application/json',
        }
    }
    if (body)
    {
        options.body = JSON.stringify(body)
    }
    const response = await fetch( `https://kosmos/api-kosmos${route}`, options)
    return await response.json()
}