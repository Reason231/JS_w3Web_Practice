function HTTP_Request(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url); // Await the fetch call

            if (response.ok) {
                const data = await response.json(); // allows you to parse and return the actual data fetched from the API.
                resolve(data);  
            } else {
                reject("The data isn't fetched");  
            }
        } catch (e) {
            reject(`Error: ${e.message}`);  
        }
    });
}

HTTP_Request("https://localhost:5500/admin")
    .then(res => {
        console.log("Data:", res);  // Log the fetched data
    })
    .catch(rej => {
        console.log(rej);  // Log any error that occurred
    });
