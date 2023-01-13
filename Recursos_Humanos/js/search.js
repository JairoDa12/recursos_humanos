window.onload = init;

function init() {
    
    document.querySelector('.btn-primary').addEventListener('click', search);
}

function search(){
    var name = document.getElementById('input-name').value;

    axios({
        method: 'get',
        url: 'http://localhost:3000/user/search',
        data: {
            user_name: name

        } 
    }).then(function (res) {
        console.log(res);
        alert("Busqueda exitosa");
        window.location.href = "middle.html";
    }).catch(function (err) {
        console.log(err);
    })
}