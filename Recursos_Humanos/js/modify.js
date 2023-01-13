window.onload = init;

function init() {
    
    document.querySelector('.btn-warning').addEventListener('click', modify);
}

function modify(){
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var dir = document.getElementById('input-dir').value;

    axios({
        method: 'put',
        url: 'http://localhost:3000/user/modify',
        data: {
            user_id: id,
            user_name: name,
            user_lastname: lastname,
            user_phone: phone,
            user_mail: mail,
            user_dir: dir
        } 
    }).then(function (res) {
        console.log(res);
        alert("Empleado modificado exitosamente");
        window.location.href = "middle.html";
    }).catch(function (err) {
        console.log(err);
    })
}