const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')


    const getData = () => {
        fetch('/db/db.json')
        .then((res) => res.json())
        .then((data) => {
            const array = data.filter(function(item) {
                return item.gender === 'Womens'
            })

            localStorage.setItem('goods', JSON.stringify(array))
            
        })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault
            getData()
        })
    })

    localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]));


    const goods = JSON.parse(localStorage.getItem('goods'))
    console.log(goods);

    localStorage.removeItem('goods')
    console.log(localStorage)
}

getGoods()