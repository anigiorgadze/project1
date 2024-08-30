const title = document.getElementsByClassName('titles')
const manu = document.getElementById('manu')


let log = true 
manu.addEventListener('click',() =>{
   
   if(log == true){
        title[0].style.display = 'flex'
        title[0].classList.add('titl')
    }else{title[0].style.display = 'none'}
   log =! log
})

const navbar = document.getElementsByClassName('navbar')


let descriptionAchara = document.getElementById("description-achara")
const whyAdjara = document.getElementById('whyAdjara')
const maintitle = document.getElementById('main-title')
const header = document.getElementsByTagName('header')

whyAdjara.addEventListener('click', function(){
    header[0].style.backgroundImage = 'url(/img/batumi-3.jpg)'
    header[0].style.height= '100vh'
    header[0].style.display = 'flex'
    aboutAchara.style.display = 'flex'
    aboutHotels.style.display = 'none'
    hotelDescription.style.display = 'none'
    adventuresSection.style.display = 'none'
    adventuresDescriptionSection.style.display = 'none'
    form1.style.display ='none'
    form2.style.display ='none'
    whyAdjara.querySelector('a').href = "#Adjara"
    console.log('1')

    for(let i=0;i<descriptionAchara.children.length;i++){
        descriptionAchara.style.display = 'none'
        descriptionAchara.children[i].style.display = "none"
       
    }
    
   
})

// ---------------------------------------------
// whyadjara
// ---------------------------------------------


let aboutAchara = document.getElementById("about-achara")


let divAchara = document.getElementsByClassName("div-achara")

////
let div1 = document.getElementById("div1")
let div1P = document.getElementById("div1-p")
let div1Image = document.getElementById("div1-image")

 
let image1 = document.getElementById("image1")


let castleImage = document.getElementById("petra-gonio")


let whyAdjaraArr= [ ['img/gonio1.webp','img/gonio3.webp','img/petra5.jpg','img/petra1.jpg','img/petra4.jpg'],
    ['/img/kulinaria2.jpg',"/img/kulinaria3.jpg","/img/kulinaria4.jpg","/img/kulinaria5.jpg","/img/kulinaria6.jpg"],
    ['/img/trip1.jpg',"/img/trip2.jpg","/img/trip3.png","/img/trip4.jpg","/img/trip5.jpg"],
    ['/img/mountain1.jpg','/img/mountain2.webp','/img/mountain3.jpg','/img/mountain4.jpg',"/img/mountain5.webp"],
    ['/img/night1.jpg','/img/night2.jpg','/img/night3.jpg','/img/night4.jpg','/img/night5.jpg']]

    let whyAdjaraArr2= [ ["url('img/gonio1.webp')","url('img/gonio3.webp')","url('img/petra5.jpg')","url('img/petra1.jpg')","url('img/petra4.jpg')"],
    ["url('/img/kulinaria2.jpg')","url('/img/kulinaria3.jpg')","url('/img/kulinaria4.jpg')","url('/img/kulinaria5.jpg')","url('/img/kulinaria6.jpg')"],
    ["url('/img/trip1.jpg')","url('/img/trip2.jpg')","url('/img/trip3.png')","url('/img/trip4.jpg')","url('/img/trip5.jpg')"],
    ["url('/img/mountain1.jpg')","url('/img/mountain2.webp')","url('/img/mountain3.jpg')","url('/img/mountain4.jpg')","url('/img/mountain5.webp')"],
    ["url('/img/night1.jpg')","url('/img/night2.jpg')","url('/img/night3.jpg')","url('/img/night4.jpg')","url('/img/night5.jpg')"]]

let whyAdjaraImg = document.getElementsByClassName('p-image')
let whyAdjaraImg2 = document.getElementsByClassName('description-achara-img')
let moreInfro = document.getElementsByClassName('about')
// divAchara[0].style.backgroundImage = 'url("/img/night1.jpg")'
// divAchara[1].style.backgroundImage = whyAdjaraArr2[1][1]



for(let i=0; i < divAchara.length;i++){
        divAchara[i].addEventListener("click",function(){

            aboutAchara.style.display = "none"
            descriptionAchara.style.display = 'flex'
            descriptionAchara.children[i].style.display = "flex"
            maintitle.style.display = 'none'
            header[0].style.backgroundImage = 'none'
            header[0].style.backgroundColor = '#40E0D0'
            header[0].style.boxShadow = '0px 0px 10px black'
            header[0].style.height = '100%'
            navbar[0].style.color= 'black'
        
        // console.log(whyAdjaraArr2[i].length)
        let x = -1
        scrollImg = () => {
            if(x == whyAdjaraArr2[i].length-1){
                x = 0
                whyAdjaraImg2[i].style.backgroundImage = whyAdjaraArr2[i][x]
                // console.log(x)
                // whyAdjaraImg2[i].src = whyAdjaraArr[i][x]
            }
                x++
                whyAdjaraImg2[i].style.backgroundImage = whyAdjaraArr2[i][x]
                // console.log(x)
            // whyAdjaraImg2[i].src = whyAdjaraArr[i][x]
        }
        setInterval(scrollImg,2000)
     })

     divAchara[i].addEventListener('mouseover',() =>{
        moreInfro[i].style.visibility = 'visible'
     })

     divAchara[i].addEventListener('mouseout',() =>{
        moreInfro[i].style.visibility = 'hidden'
     })
    }


// console.log(whyAdjaraArr2[0].length)



let index = -1
const imgScroll = () => {
    for(let i=0; i<divAchara.length;i++){
        
        if(index == whyAdjaraArr2[i].length-1){
            index= 0
                divAchara[i].style.backgroundImage = whyAdjaraArr2[i][index]
            // whyAdjaraImg[i].querySelector('img').src = whyAdjaraArr[i][index]
         }
            index++
            divAchara[i].style.backgroundImage = whyAdjaraArr2[i][index]
           
        
            
           
            // whyAdjaraImg[i].querySelector('img').src = whyAdjaraArr[i][index]
            }
}
   
setInterval(imgScroll,2000)



// ---------------------------------------------------------
// Hotels
// ---------------------------------------------------------
let form1 = document.getElementById("form-account")
let form2 = document.getElementById("form-cardaccount")

let hotelDescription = document.getElementById("hotel-description")
let hotelBtn= document.getElementById('hotels')
let aboutHotels = document.getElementById('about-Hotels')
hotelBtn.addEventListener('click', () => {
    aboutAchara.style.display = "none"
    maintitle.style.display = 'none'
    header[0].style.backgroundImage = 'none'
    header[0].style.backgroundColor = '#40E0D0'
    header[0].style.boxShadow = '0px 0px 10px black'
    header[0].style.height = '100%'
    navbar[0].style.color= 'black'
    aboutHotels.style.display = 'flex'
    hotelDescription.style.display = 'none'
    form1.style.display ='none'
    form2.style.display ='none'
    adventuresSection.style.display = 'none'
    adventuresDescriptionSection.style.display = 'none'
    // footer[0].style.display = 'none'
    hotelDescription.style.display = 'none'
    descriptionAchara.style.display = 'none'
    sumofpriseArr = [0]
    // sumreservePrice.innerHTML = sumofpriseArr[sumofpriseArr.length-1]
    // hotelDescription.querySelector("#priseofhotel-aside").innerHTML = '0'
})



let holet1Image = document.getElementById("hotel-div1")

let btnR = document.getElementsByClassName("btnR-hotel")
let btnL = document.getElementsByClassName("btnL-hotel")


let arrOfhotelsrc = [["/img/image-hotel/div1n-1.webp","/img/image-hotel/div1n-2.webp","/img/image-hotel/div1n-3.webp","/img/image-hotel/div1n-4.webp","/img/image-hotel/div1n-5.webp"],
                    ["/img/image-hotel/4_Star_Hotel_Boulevardside1.webp","/img/image-hotel/4_Star_Hotel_Boulevardside2.webp","/img/image-hotel/4_Star_Hotel_Boulevardside3.webp","/img/image-hotel/4_Star_Hotel_Boulevardside4.webp","/img/image-hotel/4_Star_Hotel_Boulevardside5.jpg"],
                    ["/img/image-hotel/ASMR_Seaview_apartment1.webp","/img/image-hotel/ASMR_Seaview_apartment2.jpg","/img/image-hotel/ASMR_Seaview_apartment3.webp","/img/image-hotel/ASMR_Seaview_apartment4.webp","/img/image-hotel/ASMR_Seaview_apartment5.webp"],
                    ["/img/image-hotel/cabin2.webp","/img/image-hotel/cabin3.webp","/img/image-hotel/cabin4.webp","/img/image-hotel/cabin5.webp","/img/image-hotel/cabin6.webp","/img/image-hotel/cabin7.webp"],
                    ["/img/image-hotel/DIDVELI-1.jpg","/img/image-hotel/DIDVELI-2.jpg","/img/image-hotel/DIDVELI-3.jpg","/img/image-hotel/DIDVELI-4.jpg","/img/image-hotel/DIDVELI-5.jpg"],
                    ["/img/image-hotel/Geverse_Apartment1.jpg","/img/image-hotel/Geverse_Apartment2.jpg","/img/image-hotel/Geverse_Apartment3.webp","/img/image-hotel/Geverse_Apartment4.jpg","/img/image-hotel/Geverse_Apartment5.jpg"],
                    ["/img/image-hotel/GreenLand_Pheria1 (1).webp","/img/image-hotel/GreenLand_Pheria1 (2).webp","/img/image-hotel/GreenLand_Pheria1 (3).webp","/img/image-hotel/GreenLand_Pheria1 (4).webp","/img/image-hotel/GreenLand_Pheria1 (5).webp"],
                    ["/img/image-hotel/HOTEL20AGAVA5.jpg","/img/image-hotel/HOTEL20AGAVA4.jpg","/img/image-hotel/HOTEL20AGAVA3.jpg","/img/image-hotel/HOTEL20AGAVA2.jpg","/img/image-hotel/HOTEL20AGAVA4.jpg"],
                    ["/img/image-hotel/FWOODSIDE20COTTAGE1.jpg","/img/image-hotel/FWOODSIDE20COTTAGE2.jpg","/img/image-hotel/FWOODSIDE20COTTAGE3.jpg","/img/image-hotel/FWOODSIDE20COTTAGE4.jpg","/img/image-hotel/FWOODSIDE20COTTAGE5.jpg"],
                    ["/img/image-hotel/Tropical_garden_apartments1.webp","/img/image-hotel/Tropical_garden_apartments2.webp","/img/image-hotel/Tropical_garden_apartments3.webp","/img/image-hotel/Tropical_garden_apartments4.webp","/img/image-hotel/Tropical_garden_apartments5.webp"],
                    ["/img/image-hotel/WOODHIDE1.jpg","/img/image-hotel/WOODHIDE2.jpg","/img/image-hotel/WOODHIDE3.jpg","/img/image-hotel/WOODHIDE4.jpg","/img/image-hotel/WOODHIDE5.jpg"],
                    ["/img/image-hotel/FWOODSIDE20COTTAGE1.jpg","/img/image-hotel/FWOODSIDE20COTTAGE2.jpg","/img/image-hotel/FWOODSIDE20COTTAGE3.jpg","/img/image-hotel/FWOODSIDE20COTTAGE4.jpg","/img/image-hotel/FWOODSIDE20COTTAGE5.jpg"]
                ]
                    
let n = 0    
for(let i =0;i < btnR.length;i++){
    btnR[i].addEventListener("click",() =>{
        // console.log(i)
        
        if(n >= arrOfhotelsrc[i].length-1){
            // console.log(i)
            n = 0
            btnR[i].parentNode.querySelector("img").src = arrOfhotelsrc[i][n]
            
        }else{
        //    console.log(i)
            n +=1 
            btnR[i].parentNode.querySelector("img").src = arrOfhotelsrc[i][n]
        }
        
    })
}

for(let i =0;i < btnL.length;i++){
    btnL[i].addEventListener("click",() =>{
        
        
        if(n == 0){
            console.log(n)
            n = arrOfhotelsrc[i].length-1
            btnL[i].parentNode.querySelector("img").src = arrOfhotelsrc[i][n]
            
        }else{
        //    console.log(i)
            console.log(n)
            n -=1 
            btnL[i].parentNode.querySelector("img").src = arrOfhotelsrc[i][n]
        }
        
    })
}


// description of Hotel
let divHotel = document.getElementsByClassName("about-hotel")

let descriptionImageofhotel1 = document.getElementById("description-imageofhotel").parentNode
let descriptionImageofhotel = document.getElementById("description-imageofhotel").children
 
// aside button//*/*/*/
let AsideButtonPlus = document.getElementById("Asidbut-ofplus")
let asideButtonMinus = document.getElementById("asidbut-ofminus")
let asideumberofday = document.getElementById("aside-numberofday")
let asideSumofprise = document.getElementById("aside-sumofprise")
let sumofpriseArr = [0]
let sumOfprise = 0
let numOfday = 0
let roomDetail = document.getElementsByClassName('room-detail-inner')

AsideButtonPlus.addEventListener("click", function (){
    numOfday += 1
    sumOfprise += Number(hotelDescription.querySelector("#priseofhotel-aside").innerHTML)
    asideumberofday.innerHTML = numOfday
    asideSumofprise.innerHTML = sumOfprise
    sumofpriseArr.push(sumOfprise)
    
})

asideButtonMinus.addEventListener("click", function (){
    if(numOfday >0){
        numOfday -= 1
        sumOfprise -= Number(hotelDescription.querySelector("#priseofhotel-aside").innerHTML)
        asideumberofday.innerHTML = numOfday
        asideSumofprise.innerHTML = sumOfprise
        sumofpriseArr.push(sumOfprise)
    }
   
})


let addinfoArr = [
    [true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,true,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,false,true,true,true,true,false,true,true],
    [true,true,true,true,true,true,false,true,true],
    [true,true,true,true,true,true,false,true,true]
]

let littleDescriptionArr = [
    ['ქედა','ქირავდება დღიურად 2 ოთახიანი აგარაკი ქედაში'],
    ['გონიო','ქირავდება გონიოში ბინა ზღვის ხედით'],
    ['გონიო','ქირავდება გონიოში ბინა ზღვის ხედით'],
    ['შუახევი','ქირავდება დღიურად კოტეჯი შუახევში'],
    ['კობალაძე.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
    ['კობალაძე.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
    ['შუახევი','ქირავდება დღიურად კოტეჯი შუახევში'],
    ['ინასარიძე.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
    ['ხიმშიაშვილის.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
    ['კობალაძე.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
    ['შუახევი','ქირავდება დღიურად კოტეჯი შუახევში'],
    ['კობალაძე.ქ','ქირავდება ბათუმში ბინა ზღვის ხედით'],
]

let littleDescription = document.getElementById('little-descr-info')
let adressHotel = document.getElementById('hotel-adress')

for(let x = 0;x <divHotel.length;x++){
    divHotel[x].addEventListener("click", () =>{
        // aboutAchara.style.display = "none"
        aboutHotels.style.display = "none"

        hotelDescription.style.display = "grid"

        // descriptionImageofhotel1.querySelector(".description-nameofhotel").innerHTML
        
        descriptionImageofhotel1.querySelector(".description-nameofhotel").innerHTML = divHotel[x].querySelector(".name-ofhotel").innerHTML

        // console.log(hotelDescription.querySelector("#description-aside").querySelector("#priseofhotel-aside").innerHTML)
        hotelDescription.querySelector("#priseofhotel-aside").innerHTML = divHotel[x].querySelector(".prise-ofhotel").innerHTML
        // console.log(hotelDescription.querySelector("#priseofhotel-aside").innerHTML) 
        littleDescription.innerHTML = littleDescriptionArr[x][1]
        adressHotel.innerHTML = littleDescriptionArr[x][0]


        for(let i = 0;i < descriptionImageofhotel.length;i++){
            // console.log(arrOfhotelsrc[x][i])
            descriptionImageofhotel[i].src = arrOfhotelsrc[x][i]
        }

        // console.log( roomDetail[0])
    
      
        for(let n=0; n<roomDetail.length; n++){
            roomDetail[n].style.textDecoration = 'none'

            if(addinfoArr[x][n] == false){
                roomDetail[n].style.textDecoration = 'line-through'
                // console.log( roomDetail[n])
                // console.log(m)
                // console.log(addinfoArr[m][n] )
            }
        
        }

        
    })
}



// heart button

let mainHeartBtn = document.getElementById('heart-btn')
let heartBtns = document.getElementsByClassName('icon')
let heartDiv= document.getElementById('heart-div')
let parentheartDiv = document.getElementById('heart-parent-div')
let isTrue= true
let totalPrice = document.getElementById('total-price')
let counter = document.getElementById('counter')

mainHeartBtn.addEventListener('click',()=>{
    isTrue =!isTrue
    if(isTrue == true){
        
        parentheartDiv.style.display = 'none'
    }else{
        parentheartDiv.style.display = 'flex'
    }

})

let hotelArr =[]
let sum = 0
let counthotels = 0
for(let i=0; i< heartBtns.length;i++){
   heartBtns[i].addEventListener('click',() => {
        let div = document.createElement('div')
        div.classList.add('heart-hotel')
        let img = document.createElement('img')
        img.classList.add('heart-div-img')
        let hearttitle = document.createElement('p')
        hearttitle.classList.add('heart-div-title')
        let heartprise1 = document.createElement('p')
        heartprise1.classList.add('heart-div-prise1')
        let heartprise2= document.createElement('span')
        let delIcon= document.createElement('p')
    
        delIcon.classList.add('delicon')
        heartprise1.appendChild(heartprise2)

        let divContainer = heartBtns[i].parentNode
        img.src = divContainer.querySelector('img').src
        hearttitle.innerHTML = divContainer.parentNode.querySelector('.name-ofhotel').innerHTML
        heartprise2.innerHTML = divContainer.parentNode.querySelector('.prise-ofhotel').innerHTML 
        heartprise1.innerHTML = heartprise2.innerHTML + "$"
        delIcon.innerHTML = "X"

        // console.log(Number(totalPrice.innerHTML))
        

        div.appendChild(img)
        div.appendChild(hearttitle)
        div.appendChild(heartprise1)
        div.appendChild(delIcon) 
        heartDiv.appendChild(div) 
        sum += Number(heartprise2.innerHTML)
        totalPrice.innerHTML = sum
        counthotels+=1
        counter.innerHTML= counthotels 
        // console.log(sum)

        let help = document.getElementsByClassName('heart-hotel')
        // console.log(help.length)
        let index = help.length-1
        for(let x=0;x<help.length-1;x++){
           if(help[x].querySelector('.heart-div-title').innerHTML == help[index].querySelector('.heart-div-title'). innerHTML){           
            sum = sum - Number(help[index].querySelector('.heart-div-prise1').innerHTML.slice(0,-1))
            console.log(Number(help[index].querySelector('.heart-div-prise1').innerHTML.slice(0,-1)))
            heartDiv.removeChild(help[index])
            totalPrice.innerHTML = sum
            counthotels-=1
            counter.innerHTML= counthotels 
           }
        }
       
        delIcon.addEventListener('click', () => {
            heartDiv.removeChild(delIcon.parentNode)
            sum = sum - Number(delIcon.parentNode.querySelector('.heart-div-prise1').innerHTML.slice(0,-1))
            //  console.log(sum)
             totalPrice.innerHTML = sum
             counthotels-=1
             counter.innerHTML= counthotels 

        })
   }) 
}


// logo


let logo = document.getElementById('logo')

logo.addEventListener('click',() =>{
    // header[0].style.display = 'flex'
    // aboutAchara.style.display = "flex"
    // maintitle.style.display = 'flex'
    // aboutHotels.style.display= 'none'
    location.reload(true);


})




// ---------------------------------------------

// form/**** */



// form1
let inputValue1 = document.getElementById("input-name")
let inputValue2 = document.getElementById("input-surname")
let inputValue3  = document.getElementById("input-email")


// form 2
let form2Namevalue = document.getElementById("input-name2")
let form2Surnamevalue = document.getElementById("input-surname2")
let form2Emailvalue = document.getElementById("input-email2")



let sumreservePrice = document.getElementById("sumof-form")
let form1Button = document.getElementById("form1-button")
let form2Button = document.getElementById("form2-button")




const checkingInput= (x,y) =>{
    let count = true
    if(x == ""){
        count = !count
        y.style.backgroundColor = "red" 
    }else{
        y.style.backgroundColor = "White"
       
    }
    return count
}


form1Button.addEventListener("click", function(){


    checkingInput(inputValue1.value, inputValue1)
    let result1 = Number(checkingInput(inputValue1.value, inputValue1))
    checkingInput(inputValue2.value, inputValue2)
    let result2 = Number(checkingInput(inputValue2.value, inputValue2))
    checkingInput(inputValue3.value, inputValue3)
    let result3 = Number(checkingInput(inputValue3.value, inputValue3))

    if((result1 + result2 + result3) == 3){
        form1.style.display = "none" 
        form2.style.display = "flex"
        inputValue1.value = ""
        inputValue2.value = ""
        inputValue3.value = ""
        form2Namevalue.value = ''
        form2Surnamevalue.value = ''
        form2Emailvalue.value = ''
        form2Namevalue.style.display = 'flex'
        form2Surnamevalue.style.display  = 'flex'
        form2Emailvalue.style.display = 'flex'
        form2Button.style.display = 'flex'
        success.style.display =  'none'
    }
    // else{
    //     form1.style.display = "flex" 
    //     form2.style.display = "none"
        
    // }

})



form2Button.addEventListener("click", function(){
    
    checkingInput(form2Namevalue.value,form2Namevalue)
    let result11 = Number(checkingInput(form2Namevalue.value,form2Namevalue))
    checkingInput(form2Surnamevalue.value,form2Surnamevalue)
    let result22 = Number(checkingInput(form2Surnamevalue.value,form2Surnamevalue))
    checkingInput(form2Emailvalue.value,form2Emailvalue)
    let result33 = Number(checkingInput(form2Emailvalue.value,form2Emailvalue))


    if((result11 + result22 + result33) == 3){
        form2Namevalue.style.display = 'none'
        form2Surnamevalue.style.display  = 'none'
        form2Emailvalue.style.display = 'none'
        form2Button.style.display = 'none'
        success.style.display =  'block'
        // footer[0].style.display = 'none'
        form2Namevalue.value = ''
        form2Surnamevalue.value = ''
        form2Emailvalue.value = ''
        
    }else{
        form1.style.display = "none" 
        form2.style.display = "flex"
    }

})
   

// დაჯავშნა
let success = document.getElementById('success')
let reserve = document.getElementById('aside-reserv')
let body = document.getElementsByTagName('body')

reserve.addEventListener('click', () =>{
    hotelDescription.style.display = 'none'
    form1.style.display = 'flex'
    body[0].style.height = '100vh'
  
    sumreservePrice.innerHTML = sumofpriseArr[sumofpriseArr.length-1]
    console.log(sumofpriseArr[sumofpriseArr.length-1])
})
    



// --------------------------------------------------
// adventures
// --------------------------------------------------


let adventuresSection = document.getElementById("adventures")
let adventuresDescriptionSection = document.getElementById("adventures-description")

// 
let divAdventres = document.getElementsByClassName("div-adventres")


let adventuresImageSrc = [["url(/img/green1.jpg)","url(/img/green2.jpg)","url(/img/green3.jpg)","url(/img/green4.jpg)","url(/img/green3.jpg)"],
["url(/img/goderdzi1.jpg)","url(/img/goderdzi2.jpg)","url(/img/goderdzi3.jpg)","url(/img/goderdzi4.jpg)","url(/img/goderdzi5.jpg)"],
["url(/img/beshumi1.jpg)","url(/img/beshumi2.jpg)","url(/img/beshumi3.jpg)","url(/img/beshumi4.jpg)","url(/img/beshumi5.jpg)"],
["url(/img/machakhela1.jpg)","url(/img/machakhela2.jpg)","url(/img/machakhela3.jpg)","url(/img/machakhela4.jpg)","url(/img/machakhela5.jpg)"],
["url(/img/qeda1.jpg)","url(/img/qeda2.jpg)","url(/img/qeda3.jpg)","url(/img/qeda4.jpg)","url(/img/qeda5.jpg)"],
["url(/img/shuakhevi1.jpg)","url(/img/shuakhevi2.jpg)","url(/img/shuakhevi3.jpg)","url(/img/shuakhevi4.jpg)","url(/img/shuakhevi5.jpg)"]]


let aboutTrip = [
    ['3 დღე','საავტომობილო/საფეხმავლო','რთული','120კმ','2,058 მ','400₾'],
    ['2 დღე','საავტომობილო','მარტივი',' 106 კმ','2,350 მ','250₾'],
    ['2 დღე','საავტომობილო','საშუალო','135 კმ','1950 მ','150₾'],
    ['ერთი  ან  რამოდენიმე დღე','საავტომობილო','მარტივი','47 კმ','300/800 მ','70₾'],
    ['1 დღე','საავტომობილო','მარტივი',' 55 კმ','390/800 მ','120₾'],
    ['1 დღე','სამანქანო/საფეხმავლო','მარტივი','64,4 კმ','381/2148 მ','80₾']
]

let image = document.getElementsByClassName("image")
let mainImage = document.getElementById("main-trip-image")
// 
let arro1 = document.getElementsByClassName("arro1")
let arro2 = document.getElementsByClassName("arro2")
let tripPrice1 = document.getElementsByClassName('trip-price')
// tourdescription
let tourDescription = document.getElementById('tour-description')
let tripSpan = document.getElementsByClassName('trip-span')

let numofindx = 0

for(let i = 0;i<divAdventres.length;i++){
    divAdventres[i].addEventListener('mouseover',()=>{
        tripPrice1[i].style.visibility = 'visible'
        
    })
    divAdventres[i].addEventListener('mouseout',()=>{
        tripPrice1[i].style.visibility = 'hidden'
    })


    divAdventres[i].addEventListener("click", () => {
        adventuresSection.style.display = "none"
        adventuresDescriptionSection.style.display = "flex"
        
        // console.log(adventuresImageSrc[i][0])
        mainImage.style.backgroundImage = adventuresImageSrc[i][0]

        for(let x =0;x< image.length;x++){
            // console.log(x)
            image[x].style.backgroundImage = adventuresImageSrc[i][x]
            image[x].addEventListener("click",() =>{
                mainImage.style.backgroundImage = adventuresImageSrc[i][x]
            })
        }
        // console.log(adventuresImageSrc[i].length)

        arro1[0].addEventListener("click", () =>{ 
            
            
            if(numofindx <= 0){
                numofindx = adventuresImageSrc[i].length-1
                mainImage.style.backgroundImage = adventuresImageSrc[i][numofindx]
                console.log(numofindx)
            }else{
                numofindx -=1
                console.log(numofindx)
                mainImage.style.backgroundImage = adventuresImageSrc[i][numofindx]
            }
        })


        arro2[0].addEventListener("click", () =>{
            if(numofindx > adventuresImageSrc[i].length-2){
                numofindx = 0
                mainImage.style.backgroundImage = adventuresImageSrc[i][numofindx]
                console.log(numofindx)
                
            }else{
                numofindx +=1
                console.log(numofindx)
                mainImage.style.backgroundImage = adventuresImageSrc[i][numofindx]
            }
  
        })

        tourDescription.innerHTML = divAdventres[i].querySelector('.about-of-tour').innerHTML
        for(let x =0; x<aboutTrip.length;x++){
            tripSpan[x].innerHTML = aboutTrip[i][x]
        }
    
    })

}


let journey = document.getElementById('journey')

journey.addEventListener('click',() =>{
    aboutAchara.style.display = "none"
    maintitle.style.display = 'none'
    header[0].style.backgroundImage = 'none'
    header[0].style.backgroundColor = '#40E0D0'
    header[0].style.boxShadow = '0px 0px 10px black'
    header[0].style.height = '100%'
    navbar[0].style.color= 'black'
    hotelDescription.style.display = 'none'
    form1.style.display ='none'
    form2.style.display ='none'
    adventuresSection.style.display = 'flex'
    descriptionAchara.style.display = 'none'
    aboutHotels.style.display = 'none'
    adventuresDescriptionSection.style.display = 'none'
    // footer[0].style.display = 'none'
})

// comments

let usernameTrip = document.getElementById('username-trip')
let inputComment= document.getElementById('input-comment')
let commentBtn = document.getElementById('comment-btn')
let commentDiv = document.getElementById('comment-div')
let star = document.getElementsByClassName('star')


let starArr1 = []
let starArr = []
for(let i =0; i<star.length;i++){
    star[i].addEventListener('click', ()=>{
        starArr.push(i) 
        if(starArr1[starArr1.length-1]>i){
            let m = 4
            while(m>i){
                 star[m].style.color = 'black'
                 m--
            }
        } else{
           starArr1.push(i) 
        }
        
        
        let n = 0
        while (n<i+1){
            star[n].style.color = 'yellow'
            // console.log(n)
            n++

        }
        
        
        console.log(starArr1)
})}





commentBtn.addEventListener('click',()=>{
    let inputCommentname = document.createElement('p')
    inputCommentname.classList.add('username-comment')
    let outputComment = document.createElement('p')
    outputComment.classList.add('output-comment')
    let commentAccount = document.createElement('div')
    commentAccount.classList.add('comment-account')
    let outputStar = document.createElement('div')
    outputStar.classList.add('output-star')

 

    let n = starArr[starArr.length-1]
    let i = 0
    while(i<n+1){
        
        console.log(i) 
        let newStar = document.createElement('i')
        newStar.classList.add('fa-solid','fa-star','star-new')
        
        outputStar.appendChild(newStar)
        i++
    }

       
    
    inputCommentname.innerHTML = usernameTrip.value
    outputComment.innerHTML = inputComment.value
    
    if(usernameTrip.value != "" && starArr.length != 0){
        usernameTrip.style.backgroundColor = '#FFFFFF'
        for(let s=0;s<5;s++){
            star[s].style.color = 'black'
        }
        commentAccount.appendChild(inputCommentname)
        commentAccount.appendChild(outputComment)
        commentAccount.appendChild(outputStar)
        commentDiv.appendChild(commentAccount)

    
        usernameTrip.value = ''
        inputComment.value = ''
        starArr=[]

    }else if(usernameTrip.value == "" && starArr.length != 0 ){ 
        usernameTrip.style.backgroundColor = 'red'
    }else if( starArr.length == 0 && usernameTrip.value != ""){
        for(let s=0;s<5;s++){
            star[s].style.color = 'red'
            starArr1.push(s) 
        }
    }else{        
        usernameTrip.style.backgroundColor = 'red'
        for(let s=0;s<5;s++){
            star[s].style.color = 'red'}

        }
    
})

// ------------------------------
// filter
// ------------------------------


let minNumber = document.getElementById('min-number')
let maxNumber = document.getElementById('max-number')
let numberBtn = document.getElementById('number-enter')

let tripPrice = document.getElementsByClassName('trip-price')
// let check = document.getElementsByClassName('check')
// console.log(tripPrice[0].parentNode)


numberBtn.addEventListener('click', ()=>{
    for(let x=0;x<tripPrice.length;x++){
            tripPrice[x].parentNode.style.display = 'none'
            if(tripPrice[x].innerHTML< Number(minNumber.value) && maxNumber.value == ''){
                    tripPrice[x].parentNode.style.display = 'flex'
                }else if(tripPrice[x].innerHTML< Number(maxNumber.value) && minNumber.value == '' ){
                    tripPrice[x].parentNode.style.display = 'flex'
                }else if(minNumber.value != '' && maxNumber.value != '' && tripPrice[x].innerHTML <= Number(maxNumber.value) && tripPrice[x].innerHTML >= Number(minNumber.value)){
                    tripPrice[x].parentNode.style.display = 'flex'
                }
                else if(minNumber.value == '' && maxNumber.value == ''){
                    tripPrice[x].parentNode.style.display = 'flex'
                }

             }
})



// footer

let footer = document.getElementsByTagName('footer')