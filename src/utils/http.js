import qs from "querystring"

export async function getData(url) {
    const result = await fetch(url);
    const data = await result.json();
    return data;
}
export async function postData(url, data) {
    const result = await fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify(data)
    })
    const datas = await result.json();
    return datas;
}