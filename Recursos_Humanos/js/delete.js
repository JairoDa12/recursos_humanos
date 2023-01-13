window.onload = init;

function init() {
    
    document.querySelector('.btn-danger').addEventListener('click', deletep);
}

function deletep(){
    var id = document.getElementById('input-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/user/delete',
        data: {
            user_id: id
        } 
    }).then(function (res) {
        console.log(res);
        alert("Empleado borrado exitosamente");
        window.location.href = "middle.html";
    }).catch(function (err) {
        console.log(err);
    })
}