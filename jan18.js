
function createProfile(user_iMG,user_name,user_Age,user_mobNumber,user_address,user_bio)
{
   document.write(`<div style="margin: auto;width: 300px; height: 300px; border: 1px solid black;">
        <img src="${user_iMG}" alt="missing">
        <div>
            <span>Name: ${user_name}</span>
            <br>
            <span>Age: ${user_Age}</span>
            <br>
            <span>Contact: ${user_mobNumber}</span>
            <br>
            <span>Address: ${user_address}</span>
            <br>
            <span>Bio: ${user_bio}</span>
            <br>
            <button>Follow</button>
            <button>Edit</button>
        </div>
    </div>`)
}
let user_iMG=prompt("enter your image location")
let user_name=prompt("enter your name")
let user_Age=prompt("enter your age")
let user_mobNumber=prompt("enter your Mobile number")
let user_address=prompt("enter your address")
let user_bio=prompt("enter your bio")
createProfile(user_iMG,user_name,user_Age,user_mobNumber,user_address,user_bio)