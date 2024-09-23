var banner_image_number = 1
const MAX_BANNER = 4

window.addEventListener('load',function() {
  setInterval(function() {
    $('#banner').css('background-image','url("'+'images/banner/mc_'+banner_image_number+'.jpg'+'")')
    banner_image_number+=1
    if(banner_image_number==MAX_BANNER) banner_image_number=0
  },5000)
  $('.selectable').mouseenter(function() {
    $('.selectable').css('backdrop-filter','blur(5px)')
    $(this).css('backdrop-filter','blur(0px)')
  })
})