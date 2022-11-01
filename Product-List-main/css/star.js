var checkStar=[5];
for(let i=0;i<checkStar.length;i++)
{
    checkStar[i]=false;
}
function check(index)
{
    for(let i=0;i<=index;i++)
    {
            checkStar[i]=true;
            document.querySelectorAll('.getHideStar')[i].style.display='none';
            document.querySelectorAll('.activeStar')[i].style.display='block';
    }
}
function clear(index)
{
    for(let i=index+1;i<5;i++)
    {
        document.querySelectorAll('.activeStar')[i].style.display='none';
        document.querySelectorAll('.getHideStar')[i].style.display='block';
    }
}
for(let i=0;i<document.querySelectorAll('.getHideStar').length;i++)
{
    document.querySelectorAll('.getHideStar')[i].addEventListener('click',function()
    {
        console.log('ok ')
        clear();
        check(i);
    })
}
for(let i=0;i<document.querySelectorAll('.getHideStar').length;i++)
{
    document.querySelectorAll('.activeStar')[i].addEventListener('click',function()
    {
        clear(i);
        
    })
}

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