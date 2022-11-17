//Search
var arrayOfProduct = [
    {
    id: 1,
    name: 'Indonesia Coffee',
    price: '$30.00',
    priceCurrent:30,
    image: '/Product-List-main/img/product-img-10.png',
    link:'/Product-List-main/html/Detail_ProductList.html',
    type:1
    },
    {
    id: 2,
    name: 'FRENCH PRESS',
    price: '$23.99',
    priceCurrent:23,
    image: '/Product-List-main/img/product-img-11.png',
    link: '/Product-List-main/html/Detail_FrenchPress.html',
    type:2
    },
    {
    id: 3,
    name: 'KENYA COFFEE',
    price: '$18.00',
    priceCurrent:18,
    image: '/Product-List-main/img/productList-img-3.png',
    link: '/Product-List-main/html/Detail_KenyaCoffee.html',
    type:3
    },
    {
    id: 4,
    name: 'DOLCE GUSTO',
    price: '$12.00',
    priceCurrent:12,
    image: '/Product-List-main/img/backgroundCopy_1.png',
    link: '/Product-List-main/html/Detail_DolceGusto.html',
    type:4
    },
    {
    id: 5,
    name: 'Columbia Coffee',
    price: '$21.00',
    priceCurrent:21,
    image: '/Product-List-main/img/productList-img-5.png',
    link:'/Product-List-main/html/Detai_ColumbiaCoffee.html',
    type:3
    },
    {
    id: 6,
    name: 'Coffee Kettle',
    price: '$90.00',
    priceCurrent:90,
    image: '/Product-List-main/img/ProductList-img-6.png',
    link:'/Product-List-main/html/Detail_CoffeeKettle.html',
    type:2
    },
    {
    id: 7,
    name: 'Measuring Coffee',
    price: '$16.00',
    priceCurrent:16,
    image: '/Product-List-main/img/ProductList-img-MeasuringCup.png',
    link:'./Detail_MeasuringCup.html',
    type:4
    },
    {
    id: 8,
    name: 'Guatemala Coffee',
    price: '$25.00',
    priceCurrent:25,
    image: '/Product-List-main/img/product-img-8.png',
    link:'/Product-List-main/html/Detail_Guatemala.html',
    type:1
    },
    {
    id: 9,
    name: 'Filter handle',
    price: '$80.00',
    priceCurrent:80,
    image: '/Product-List-main/img/ProductList-img-9.png',
    link:'/Product-List-main/html/Detail_FilterHandle.html',
    type:2,
    }
    ]
    //Lấy những id của product có tên trùng với tên nhập vào ô input
    var arrId = [];
    var inputvalue = document.querySelector('.search__input');
    var BtnSearch = document.querySelector('.price-filter');
    var productList = document.querySelector('.main-content');
    var valueRadio;
    var valueProduct;
    function CheckProduct()
    {
        if(inputvalue.value == '')
        {
            arrId = [1,2,3,4,5,6,7,8,9]
        }
        else
        {
            arrayOfProduct.forEach(function(item)
            {
                if(item.name.toUpperCase().indexOf(inputvalue.value.toUpperCase()) > -1 )
                {
                    arrId.push(item.id)
                }
            })
        }
        checkOptionPrice(arrId,valueRadio,arrayOfProduct);
        checkOptionTypes(arrId,valueProduct,arrayOfProduct);
        console.log(arrId)
    }
    function checkOptionTypes(arr,optionType,object)
    {
    
        var idWrong =[];
        if(optionType == 1)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 1)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 2)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 2)
                {
                    
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 3)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 3)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 4)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 4)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        else
            return;
        
    }
    function checkOptionPrice(arr,optionType,object)
    {
    
        var idWrong =[];
        if(optionType == 1)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent > 50)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 2)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent <= 50 || object[item-1].priceCurrent > 100)
                {
                    
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 3)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent  <= 100)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        else
            return;
        
    }
    function clearArr(arrId)
    {
        arrId.splice(0,arrId.length)
    }
   //Nhấp nút filter thì bắt đầu render ra
    BtnSearch.onclick = () => {
       //reset lại vòng lặp mỗi lần click
        clearArr(arrId);
        CheckProduct();
       var htmls=[];
       var value;
       if(arrId.length == 0)
       {
            productList.innerHTML = `<div class="col-lg-12 no-find"> Couldn't find your product </div>`
        
       }
       else
       {
       arrId.forEach((item)=>
       {
            arrayOfProduct.forEach((product)=>{
               
                if(item == product.id)
                {
                    
                    value =
                    `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a class="body__product-img--modal-link">
                                <div class="body__product-button--modal" onclick="blockModal()">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product.name}</h2>
                        <h3 class="body__product-price">${product.price}</h3>
                    </div>
                </div>
               
                    `
                    htmls.push(value)
                }
            })
       })
        productList.innerHTML = htmls.join('')
    }

    }
    //Bắt buộc phải đăng nhập mới đc add hàng
    
    function blockModal()
    {
        document.querySelector('.modal-login').style.display='block';
    }
    function closeModal()
    {
        document.querySelector('.js-close').onclick = () =>
        {
            document.querySelector('.modal-login').style.display='none';
        }
    }
   


    //hàm để render lại sản phẩm ban đầu
   function RenderFirst()
   {
    var firstpage =arrayOfProduct.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a class="body__product-img--modal-link">
                                <div class="body__product-button--modal" onclick="blockModal()">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   
    //clear option
    var option = document.querySelectorAll('.checkbox');
    var option_product = document.querySelectorAll('.phanloai');
    ClearOption(option,option_product);
    function ClearOption(option,option_product)
    {
        
        for(let i=0;i<option.length;i++)
            option[i].checked = false;
        for(let i=0;i<option_product.length;i++)
            option_product[i].checked = false;
        inputvalue.value='';
        RenderFirst();
    }
    function getOptionPrice()
    {
        
        for(let i=0;i<option.length;i++)
        {
        option[i].onclick = ()=>
        {
           valueRadio = parseInt(option[i].value);
        }
        }
    }
    function getOptionTypes()
    {
        
        for(let i=0;i<option_product.length;i++)
        {
        option_product[i].onclick = ()=>
        {
            valueProduct = parseInt(option_product[i].value);
        }
        }
    }
    
    
    getOptionPrice();
    getOptionTypes();
    