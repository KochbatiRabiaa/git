var removeitems=document.getElementsByClassName('remove');

for(i=0; i<removeitems.length ; i++) {
    removeitems[i].addEventListener('click', function Rmv(event) {
      const btn = event.target
      btn.parentElement.parentElement.remove()     
    })
}
   
 var love= document.getElementsByClassName('fa fa-heart')
 for (let i =0 ; i < love.length ; i++) {
     love[i].addEventListener('click' , function Love() {
         
    
    love[i].classList.toggle('heart')
})
     
 }

 function updateprice(e){
 
    var Bigdiv= document.getElementsByClassName('div')[0]
    console.log(Bigdiv= document.getElementsByClassName('div')[0]);
    var firsts=Bigdiv.getElementsByClassName('first')
    var total=0
    for(i=0 ; i<firsts.length ; i++){
        const cartrows=firsts[i]
        const priceEle = cartrows.getElementsByClassName('price')[0]
        const quantityEle= cartrows.getElementsByClassName('quantity')[0]
       const price=parseFloat(priceEle.innerText)
       const quantity=parseFloat(quantityEle.value)
      const totalPartial = price*quantity
      cartrows.getElementsByClassName('total')[0].innerText = totalPartial
        total= total +totalPartial
       
   } 
   
   document.getElementsByClassName('total-price')[0]
   .getElementsByClassName('total')[0].innerText = total + ' $'
   

}


var quantitys= document.getElementsByClassName('quantity')
for (let i =0 ; i < quantitys.length ; i++) {
 
    quantitys[i].addEventListener('change' ,  updateprice)
    
}