// let selector = document.querySelectorAll("input[type=tel]");
// let ins = new Inputmask("+38 (999) 999 99 99");
// ins.mask(selector);

$(function ($) {
  $('[name="phone"]').mask("+38 (999) 999 99 99");
});

let validateForms = function (selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("sent");
          }
        }
      };
      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      form.reset();
      // window.location = "/index.html";
    },
  });
};

validateForms(".slider-form", {
  name: { required: true },
  phone: { required: true },
});
