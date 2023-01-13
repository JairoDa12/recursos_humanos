window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        button();
    }
    else {
        window.location.href = "index.html";
    }
}

function button() {

    document.querySelector('.btn-primary').addEventListener('click', function() {
    window.location.href = "signin.html"
    });
    document.querySelector('.btn-success').addEventListener('click', function() {
    window.location.href = "modify.html"
    });
    document.querySelector('.btn-info').addEventListener('click', function() {
    window.location.href = "search.html"
    });
    document.querySelector('.btn-danger').addEventListener('click', function() {
    window.location.href = "delete.html"
    });
    
    
}