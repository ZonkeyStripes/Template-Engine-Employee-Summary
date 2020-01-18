function generate(data){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Main Document</title>
    <style>
        h1 {
            color: white;
            text-align: center;
            padding: 3%;
            background-color: rgb(187, 42, 91);
        }
        table {
            border: solid cornflowerblue;
            text-align: center;
        }
    </style>
</head>
<body>
<header>
    <h1>
        (>^o^)> The Team <(^-^<) 
    </h1>
</header>

<table>
<tr>
    <th>${data.name}</th>
</tr>
<tr>
    <td>${data.id}</td>
</tr>
<tr>
    <td>${data.email}</td>
</tr>
<tr>
    <td>${data.role}</td>
</tr>
<tr>
<td>${data.school}</td>
<td>${data.github}</td>
<td>${data.officeNum}</td>
</tr>
</table>

</body>
</html>
    `
}

module.exports = generate;