function sendMail(){
    var params={
        name:document.getElementById("name").Value,
        email:document.getElementById("email").value,
        message:document.getElementById("msg").value,
    };
    const serviceID = "service_6z9tojl";
    const templateID = "template_7r1shwa"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("msg").value="";
        console.log(res);
        alert("your message send SUCCESFULLY")
    }
)
.catch((err) => console.log(err));
}

