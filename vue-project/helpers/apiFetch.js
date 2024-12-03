export default async function (method, route, body = null)
{
    const options = {
        method,
        headers: {
            Accept: 'application/json',
        }
    }
    if(localStorage.getItem('user-token'))
    {
        options.headers['Authorization'] = `Bearer ${localStorage.getItem('user-token')}`
    }
    if (body)
    {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)

    }
    const response = await fetch( `http://kosmos/api-kosmos${route}`, options)
    if (response.status === 401)
    {
        localStorage.removeItem('user-token')
        window.location.replace('/auth')
    }
    try{
        return await response.json()
    } catch {
        return null
    }

}