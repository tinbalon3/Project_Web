                var left=document.querySelector('.customer_button-slider-left');
                var feedback=document.querySelectorAll('.js-feedback');


                // gallery
                const button_next_right=document.querySelector('.js-next-right');
                const next_img=document.querySelector('.img__overlay-this');
                const button_next_left=document.querySelector('.js-next-left')
                const hoverimg=document.querySelectorAll('.js-onmouse');
                const search=document.querySelectorAll('.js-search');
                var imgs=[
                '/Web-index/img/gallery1.jpg',
                '/Web-index/img/gallery2.jpg',
                '/Web-index/img/gallery3.jpg',
                '/Web-index/img/gallery4.jpg',
                '/Web-index/img/gallery6.jpg' ]

                // declare variable modal
                const click_img=document.querySelectorAll('.js-img');
                const modal=document.querySelector('.js-modal')
                const modalclose=document.querySelector('.js-modal-close')

                // declare variable blog
                const layout_blog=document.querySelectorAll('.js_layout_blog');
                const blog_list=document.querySelectorAll('.js_blog');
                var search_blog=document.querySelectorAll('.js-blog_search');
                var modal_blog=document.querySelector('.js-modal-blog');
                var close_blog=document.querySelector('.js-close-blog');
                var next_right_blog=document.querySelector('.js-right-blog');
                var next_left_blog=document.querySelector('.js-left-blog');
                var img_blog=document.querySelector('.js-img-blog')
                var imgsblog=[
                '/Web-index/img/blog1.jpg',
                '/Web-index/img/blog2.jpg',
                '/Web-index/img/blog3.jpg'
                ]



                // when scroll, header will change
                var prevScrollpos = window.pageYOffset;
                window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                document.querySelector('.header').style.top = "0";
                document.querySelector('.header').classList.add('thaydoiheader');
                } else {
                document.querySelector('.header').style.top = "-96px";
                }
                if(currentScrollPos == 0)
                {
                document.querySelector('.header').classList.remove('thaydoiheader');
                }
                prevScrollpos = currentScrollPos;
                }



                // button at feedback
                left.classList.add('matieu');
                var t=0;
                function next_right()
                {
                t++;
                if(t!=0)
                {
                left.classList.remove('matieu');
                left.classList.add('open');

                }
                if(t>=feedback.length)
                {
                t=0;
                left.classList.add('matieu');
                feedback[feedback.length-1].classList.add('close');
                feedback[feedback.length-1].classList.remove('open-section');
                feedback[0].classList.remove('close');
                feedback[0].classList.add('open-section');
                }
                else
                {

                feedback[t-1].classList.add('close');
                feedback[t-1].classList.remove('open-section');
                feedback[t].classList.add('open-section');
                feedback[t].classList.remove('close');
                }

                }
                function next_left()
                {
                t--;
                if(t==0)
                {
                left.classList.add('matieu');
                }
                else
                {
                left.classList.remove('matieu');
                left.classList.add('open');
                }
                if(t<0)
                {
                t=feedback.length-1;  
                feedback[0].classList.add('close');
                feedback[0].classList.remove('open-section');
                feedback[t].classList.add('open-section');
                feedback[t].classList.remove('close');
                }
                else
                {
                feedback[t+1].classList.add('close');
                feedback[t+1].classList.remove('open-section');
                feedback[t].classList.add('open-section');
                feedback[t].classList.remove('close');
                }

                }
                //    end


                // hover on img at gallery and display search
                for(let i=0;i<hoverimg.length;i++)
                {
                hoverimg[i].addEventListener('mouseover',function()
                {
                search[i].classList.add('open');
                })
                }
                for(let i=0;i<hoverimg.length;i++)
                {
                hoverimg[i].addEventListener('mouseout',function()
                {
                search[i].classList.remove('open');
                })
                }
                // end




                // hover on imgs at blog and display search
                for(let i=0;i<blog_list.length;i++)
                {
                blog_list[i].addEventListener('mouseover',function()
                {
                search_blog[i].classList.add('open');
                layout_blog[i].classList.add('open');
                })
                }
                for(let i=0;i<blog_list.length;i++)
                {
                blog_list[i].addEventListener('mouseout',function()
                {
                search_blog[i].classList.remove('open');
                layout_blog[i].classList.remove('open');
                })
                }
                // end
                // Modal blog
                for(let i=0;i<search_blog.length;i++)
                {
                search_blog[i].addEventListener('click',function()
                {
                img_blog.setAttribute('src',imgsblog[i]);
                modal_blog.classList.add('open')
                })
                }

                close_blog.addEventListener('click',function()
                {
                modal_blog.classList.remove('open')
                })

                var index=0; 
                next_right_blog.addEventListener('click',function()
                {

                index++;
                if(index>=imgsblog.length)
                {
                index=0;
                }

                img_blog.setAttribute('src',imgsblog[index]);
                })
                next_left_blog.addEventListener('click',function()
                {
                index--;
                if(index<0)
                {
                index=imgsblog.length-1;
                }
                img_blog.setAttribute('src',imgsblog[index]);
                })

                // end



                // Change img when click in blog
                for(let i=0;i<search.length;i++)
                {
                search[i].addEventListener('click',function()
                {
                next_img.setAttribute('src',imgs[i]);
                modal.classList.add('open')
                })
                }

                modalclose.addEventListener('click',function()
                {
                modal.classList.remove('open')
                })
                //    end

                // Modal gallery
                var i=0; 
                button_next_right.addEventListener('click',function()
                {

                i++;
                if(i>=imgs.length)
                {
                i=0;
                }

                next_img.setAttribute('src',imgs[i]);
                })
                button_next_left.addEventListener('click',function()
                {
                i--;
                if(i<0)
                {
                i=imgs.length-1;
                }
                next_img.setAttribute('src',imgs[i]);
                })

                // end



                // Change img when click in gallery
                for(let i=0;i<search.length;i++)
                {
                search[i].addEventListener('click',function()
                {
                next_img.setAttribute('src',imgs[i]);
                modal.classList.add('open')
                })
                }

                modalclose.addEventListener('click',function()
                {
                modal.classList.remove('open')
                })
                // end

                // Change img header
                var images = document.querySelectorAll('.slider_img'), x = 0;
                setInterval("changeImage()",3000);
                function changeImage() {
                images[x].style.display='none';
                x++;        
                if(x < images.length)
                {
                images[x].style.display='block';
                }
                if(x >= images.length) {
                x = 0;
                images[x].style.display='block';
                } 
                }

                //load page
                window.onload = (event) => {
                    document.getElementById('loader').style.animation=`fadeOutPage linear 1s forwards`;
                    setTimeout(function()
                    {
                        document.getElementById('box').style.minHeight='100%';  
                    },1200)
                    document.getElementById('loader').style.display='none';
                };
                AOS.init();
