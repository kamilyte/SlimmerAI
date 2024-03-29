import React from 'react'

async function FetchUniqueFiltersRequest(setUniqueFilterList){
    const myHeaders = new Headers();

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    }

    myHeaders.append("accept", "application/json");
    await fetch("http://127.0.0.1:5000/v1/leads/filter-values", requestOptions)
        .then(response => response.json())
        .then(body => {
            if (body.response != null) {
                const data = body.response
                setUniqueFilterList(data)
            } else {
                console.log("There is no response body")
                console.log(body.response)
            }
        })
        .catch(error => console.log("Failed To Retrieve", error));
}
export default FetchUniqueFiltersRequest