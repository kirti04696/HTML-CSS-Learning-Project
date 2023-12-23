function createContact(name,category){
    let parentdiv = document.createElement("div");
    parentdiv.classList.add("contact");

    let img =document.createElement("img");
    img.setAttribute("src","kk.jpg");

    let Name = document.createElement("h5");
    Name.innerHTML = name;

    let categorydiv = document.createElement("div");
    let categoryp = document.createElement("p");
    categoryp.innerHTML = category;

    categorydiv.appendChild(Name);
    categorydiv.appendChild(categoryp);

    parentdiv.appendChild(img);
    parentdiv.appendChild(categorydiv);

    return parentdiv;
}


let conct = document.getElementById("contacts");


async function getContacts() {
    // const response = await fetch("http://localhost:5000/contact");
    // const contacts = await response.json();
    // console.log(contacts);


    let contacts = [
        {
            "contact_number": "8115031074",
            "contact_type": "Family",
            "email_address": "r@gmail.com",
            "id": 1,
            "name": "Ram vijay"
        },
        {
            "contact_number": "8115031075",
            "contact_type": "Family",
            "email_address": "r1@gmail.com",
            "id": 2,
            "name": "Ram sharma"
        },
        {
            "contact_number": "8115031075",
            "contact_type": "Family",
            "email_address": "r1@gmail.com",
            "id": 3,
            "name": "Ram sharma"
        },
        {
            "contact_number": "8115031075",
            "contact_type": "Family",
            "email_address": "r1@gmail.com",
            "id": 4,
            "name": "Raman sharma"
        },
        {
            "contact_number": "45768768",
            "contact_type": "friend",
            "email_address": "raj2@gmail.com",
            "id": 5,
            "name": "raj"
        }
    ];
    contacts.map((contact)=>{
        conct.appendChild(createContact(contact['name'],contact['contact_type']));
    });


    // for(let i=0; i<contacts.length; i++){
    //     conct.appendChild(createContact(contacts[i]['name'],contacts[i]['contact_type']));
    // }

  }
  getContacts();

  async function addContact(){
    console.log("Clicked");
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let type = document.getElementById("contact-type").value;

    console.log(name);
    console.log(mobile);
    console.log(email);
    console.log(type);
    alert("The BE is not hosted so the data will not insert");

    // const response = await fetch("http://localhost:5000/contact",{
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application.json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "name":name,
    //         "contact_number":mobile,
    //         "email_address":email,
    //         "contact_type":type
    //     }),
    //         }
    // );
    // const contact = await response.json();
    // console.log(contact);
  }
