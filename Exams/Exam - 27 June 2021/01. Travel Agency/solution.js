window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.querySelector("#submitBTN");
  const editBtn = document.querySelector("#editBTN");
  const continueBtn = document.querySelector("#continueBTN");
  
  let fname = document.querySelector("#fname")
  let email = document.querySelector("#email")
  let phone = document.querySelector("#phone")
  let address = document.querySelector("#address")
  let code = document.querySelector("#code")
  
  let ulInfoPreview = document.querySelector("#infoPreview");
  
  submitBtn.addEventListener("click", submit)
  
  function submit(e) {
    e.preventDefault();
  
    let fnameValue = fname.value;
    let emailValue = email.value;
    let phoneValue = phone.value
    let addressValue = address.value
    let codeValue = code.value;

    //Check inputs
    if(!fnameValue || !emailValue) {
      return;
    }

    //Disable and enable buttons
    submitBtn.setAttribute("disabled", true);
    editBtn.disabled = false;
    continueBtn.disabled = false;
  
    //Factory for html elements
    htmlGenerator("li", `Full name: ${fnameValue}`, ulInfoPreview)
    htmlGenerator("li", `Email: ${emailValue}`, ulInfoPreview)
    htmlGenerator("li", `Phone number: ${phoneValue}`, ulInfoPreview)
    htmlGenerator("li", `Address: ${addressValue}`, ulInfoPreview)
    htmlGenerator("li", `Postal code: ${codeValue}`, ulInfoPreview)
  
    //Add events to buttons
    editBtn.addEventListener("click", editInfo);
    continueBtn.addEventListener("click", continueInfo);

    //Clear inputs
    fname.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";

    function editInfo(e){
      let listItem = ulInfoPreview.querySelectorAll("li");
    
       fname.value = fnameValue;
       email.value = emailValue;
       phone.value = phoneValue;
       address.value = addressValue;
       code.value = codeValue;
          
       Array.from(listItem).forEach(l => l.remove());
      
       //Disable and enable buttons
       submitBtn.disabled = false;
       editBtn.disabled = true;
       continueBtn.disabled = true;
     }

     function continueInfo(){
      let div = document.querySelector("#block");
      while(div.firstChild){
        div.firstChild.remove()
      }
      htmlGenerator("h3", "Thank you for your reservation!", div)
    }

     function htmlGenerator(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;
  
      if (parent) {
          parent.appendChild(element);
      }
      return element;
    }
  }
}