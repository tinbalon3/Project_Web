//Search
var arrayOfProduct = [
    {
    id: 1,
    name: 'ETHIOPIA COFFEE',
    price: '$15.99',
    priceCurrent:15,
    image: './img/productList-img-1.png',
    link:'/Product-List-main/html/Detail_ProductList.html'
    },
    {
    id: 2,
    name: 'FRENCH PRESS',
    price: '$23.99',
    priceCurrent:23,
    image: './img/productList-img-21.png',
    link: './html/Detail_FrenchPress.html'
    },
    {
    id: 3,
    name: 'KENYA COFFEE',
    price: '$18.00',
    priceCurrent:18,
    image: './img/productList-img-3.png',
    link: './html/Detail_KenyaCoffee.html'
    },
    {
    id: 4,
    name: 'DOLCE GUSTO',
    price: '$12.00',
    priceCurrent:12,
    image: './img/backgroundCopy_1.png',
    link: './html/Detail_DolceGusto.html'
    },
    {
    id: 5,
    name: 'Columbia Coffee',
    price: '$21.00',
    priceCurrent:21,
    image: './img/productList-img-5.png',
    link:'/Product-List-main/html/Detai_ColumbiaCoffee.html'
    },
    {
    id: 6,
    name: 'Coffee Kettle',
    price: '$90.00',
    priceCurrent:90,
    image: './img/ProductList-img-6.png',
    link:'./html/Detail_CoffeeKettle.html'
    },
    {
    id: 6,
    name: 'Espresso Machine',
    price: '$600.00',
    priceCurrent:600,
    image: './img/ProductList-img-7.png',
    link:'./html/Detail_EspressoMachine.html'
    },
    {
    id: 8,
    name: 'Guatemala Coffee',
    price: '$25.00',
    priceCurrent:25,
    image: './img/product-img-8.png',
    link:'./html/Detail_Guatemala.html',
    },
    {
    id: 9,
    name: 'Filter handle',
    price: '$80.00',
    priceCurrent:80,
    image: './img/ProductList-img-9.png',
    link:'./html/Detail_FilterHandle.html',
    }
    ]
    //Lấy những id của product có tên trùng với tên nhập vào ô input
    var arrId = [];
    var inputvalue = document.querySelector('.search__input');
    var BtnSearch = document.querySelector('.price-filter');
    var productList = document.querySelector('.main-content');
    var valueRadio;
    function CheckProduct()
    {
        arrayOfProduct.forEach(function(item)
        {
            if(item.name.toUpperCase().indexOf(inputvalue.value.toUpperCase()) > -1 )
            {
                if(valueRadio == 1)
                {
                    if(item.priceCurrent <= 50)
                    {
                        arrId.push(item.id)
                    }
                }
                else if(valueRadio == 2)
                {
                    if(item.priceCurrent > 50 && item.priceCurrent <= 100)
                    {
                        arrId.push(item.id)
                    }
                }
                else if(valueRadio == 3)
                {
                    if(item.priceCurrent > 100 )
                    {
                        arrId.push(item.id)
                    }
                }
                else
                    arrId.push(item.id)
            }
        })
        console.log(arrId)
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
                            <a href="${product.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
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
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
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
   
    function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector(".search__input");
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.querySelectorAll(".body__product");
    for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".body__product-name");
    txtValue = a.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    } else {
    li[i].style.display = "none";
    }
    }
    }
    //clear option
    function ClearOption()
    {
        var ele = document.querySelectorAll(".checkbox");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        inputvalue.value='';
        RenderFirst();
    }
    ClearOption();
    var option = document.querySelectorAll('.checkbox');
    for(let i=0;i<option.length;i++)
    {
        option[i].onclick = ()=>
        {
           valueRadio = parseInt(option[i].value);
        }
    }