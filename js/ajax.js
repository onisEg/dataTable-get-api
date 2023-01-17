$(document).ready(function () {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
            $('#myTable').DataTable({
                "data": data,
                columns: [
                    { data: 'name.official' },
                    { data: 'capital' },
                    { data: 'region' },
                    { data: 'subregion' },
                    { data: 'independent' },
                    { data: 'startOfWeek' },
                ],
            });
        })
        .catch(error => {
            console.error(error)
        });

});

