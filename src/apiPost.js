function apiPost() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Post Todo' })
    };
    fetch('https://gsym8ugyub.execute-api.eu-central-1.amazonaws.com/dev/todo_list', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ Id: data.id, Text: data.text }));
    }

export default apiPost();