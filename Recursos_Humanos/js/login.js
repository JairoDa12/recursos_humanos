window.onload = init;

function init() {
   
    document.querySelector('.btn-primary').addEventListener('click', login);

}

function login(){
    var name = document.getElementById('input-name').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/admins/login',
        data: {
            admin_name: name,
            admin_password: pass
        } 
    }).then(function (res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            window.location.href = "middle.html"
        }
        else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function (err) {
        console.log(err);
    })
}