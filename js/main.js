// swiper slider

new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true,
      },
});

// Writing utm 2 input field

const utmField = document.querySelector('#utm');
utmField.value = document.location.href;

// AJAX >> google form

!function(exports) {
  exports.submitGoogleForm = submitGoogleForm;

  function submitGoogleForm(form) {
    try {
      var data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : control.value) :
          '';
      }).join('&');
      var xhr = new XMLHttpRequest();

      xhr.open('POST', form.action + '/formResponse', true);
      xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
    } catch(e) {}

    form.parentNode.className += ' submitted';

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);
