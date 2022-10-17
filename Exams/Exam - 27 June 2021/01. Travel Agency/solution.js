window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.querySelector("#submitBTN");
  const editBtn = document.querySelector("#editBTN");
  const continueBtn = document.querySelector("#continueBTN");
  
  const fname = document.querySelector("#fname");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const address = document.querySelector("#address");
  const code = document.querySelector("#code");

  const ulInfoPreview = document.querySelector("#infoPreview");
  const div = document.querySelector("#block");

  submitBtn.addEventListener("click", submit);
  
  function submit(e) {
    e.preventDefault();
  
    let fnameValue = fname.value;
    let emailValue = email.value;
    let phoneValue = phone.value
    let addressValue = address.value;
    let codeValue = code.value;

    //Check inputs
    if(!fnameValue || !emailValue) {
      return;
    }
  
    //Factory for html elements
    htmlGenerator("li", `Full Name: ${fnameValue}`, ulInfoPreview);
    htmlGenerator("li", `Email: ${emailValue}`, ulInfoPreview);
    htmlGenerator("li", `Phone Number: ${phoneValue}`, ulInfoPreview);
    htmlGenerator("li", `Address: ${addressValue}`, ulInfoPreview);
    htmlGenerator("li", `Postal Code: ${codeValue}`, ulInfoPreview);
  
    //Disable and enable buttons
    submitBtn.setAttribute("disabled", true);
    editBtn.disabled = false;
    continueBtn.disabled = false;

    //Add events to buttons
    editBtn.addEventListener("click", editInfo);
    continueBtn.addEventListener("click", continueInfo);

    //Clear inputs
    fname.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";

    function editInfo(){
      let listItem = ulInfoPreview.querySelectorAll("li");
    
       fname.value = fnameValue;
       email.value = emailValue;
       phone.value = phoneValue;
       address.value = addressValue;
       code.value = codeValue;
                
       //Disable and enable buttons
       submitBtn.disabled = false;
       editBtn.disabled = true;
       continueBtn.disabled = true;

       Array.from(listItem).forEach(l => l.remove());
     }

     function continueInfo(){
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