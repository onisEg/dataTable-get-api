$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
            $('#myTable').DataTable({
                "data": data,
                columns: [
                    { data: 'userId' },
                    { data: 'id' },
                    { data: 'title' },
                    { data: 'completed' },

                ],
            });
        })
        .catch(error => {
            console.error(error)
        });

});

