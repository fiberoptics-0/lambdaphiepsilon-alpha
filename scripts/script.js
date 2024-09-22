var banner_image_number = 1
const MAX_BANNER = 4

window.addEventListener('load',() => {
  setInterval(() => {
    $('#banner').css('background-image','url("'+'images/banner/mc_'+banner_image_number+'.jpg'+'")')
    banner_image_number+=1
    if(banner_image_number==MAX_BANNER) banner_image_number=0
  },5000)
})