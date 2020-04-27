export default function ApiCall(data, callback) {
    fetch('http://localhost:3001/settings', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
    ).then(response => {
        if (!response.ok) {
            response.json().then(json => {
                callback(json);
            });
        } else {
            callback();
        }
    }).catch(error => {
        console.log('There is some error:' + error);
    })
}