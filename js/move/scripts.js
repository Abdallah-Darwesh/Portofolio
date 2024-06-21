
// important
(function(){
    const customerImg = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index =0;
    const customers =[]

    function Customer(img, name, text ){
        this.img =img;
        this.name=name;
        this.text=text;

    }

    function createCustomer(img, name, text){
        let Img = `./img1/${img}.jpg`
        let customer =new Customer(Img,name,text)

        customers.push(customer)
        
    
    }

    createCustomer(1,'saaed',' Velit corporis cumque illum, dolores reprehenderit delectus?')
    createCustomer(2,'John','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit corporis cumque illum, officiis reiciendis necessitatibus non distinctio nostrum, quidem maiores sit voluptatibus dolorem molestias quo voluptates magnam, dolores reprehenderit delectus?')
    createCustomer(3,'Adham','Velit corporis cumque illum, officiis reiciendis necessitatibus non distinctio nostrum, quidem maiores sit voluptatibus dolorem molestias quo voluptates magnam, dolores reprehenderit delectus?')


    btn.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.parentElement.classList.contains('prevbtn')){
            if(index===0){
                index =customers.length
            }
            index--;
            customerImg.src =customers[index].img
            customerName.textContent =customers[index].name
            customerText.textContent =customers[index].text
        }
        if(e.target.parentElement.classList.contains('nextbtn')){
            index++
            if(index===customers.length){
                index =0
            }
            
            customerImg.src =customers[index].img
            customerName.textContent =customers[index].name
            customerText.textContent =customers[index].text
        }
    })
})




    
})();