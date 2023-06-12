import React from 'react'

async function FetchLeadsRequest(setLeadList){
    const myHeaders = new Headers();

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    }

    myHeaders.append("accept", "application/json");
    await fetch("http://127.0.0.1:5000/v1/leads/list", requestOptions)
        .then(response => response.json())
        .then(body => {
            const data = body.response
            console.log(body)
            setLeadList(data)
        })
        .catch(error => console.log("Failed To Retrieve", error));
}
export default FetchLeadsRequest