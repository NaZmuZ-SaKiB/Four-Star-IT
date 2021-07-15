// ----------------------------------------------------------------------------
//                         making the header sticky
// ----------------------------------------------------------------------------

const headerTop = document.getElementById('header-top')

window.addEventListener('scroll', hideHeader)

function hideHeader() {
    if (window.scrollY > headerTop.offsetHeight + 50) {
        headerTop.classList.add('hide-header-top')
        headerTop.parentNode.style.width = '100%'
        headerTop.parentNode.style.position = 'fixed'
    } else {
        headerTop.classList.remove('hide-header-top')
        headerTop.parentNode.style = ''
    }
}


// ----------------------------------------------------------------------------
//                    submenu toggle in small screen size
// ----------------------------------------------------------------------------

const submenu1ToggleBtn = document.querySelectorAll('#toggle-submenu-1')

submenu1ToggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('hide-submenu-1')
    })
})

// ----------------------------------------------------------------------------
//                    filter close when nav is on functionality
// ----------------------------------------------------------------------------

const filterToggleCheckBox = document.getElementById('filter-toggle-btn')
const navToggleBtn = document.querySelector('.nav-toggle-btn')

navToggleBtn.addEventListener('click', () => {
    filterToggleCheckBox.checked = false
})


// ----------------------------------------------------------------------------
//                         filter collapse functionality
// ----------------------------------------------------------------------------

const filterCollapseBtn = document.querySelectorAll('#filter-collapse')
const filterCollapseHeading = document.querySelectorAll('.filter-collaps-heading')

filterCollapseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.classList.toggle('show-filter')
    })
});

filterCollapseHeading.forEach(heading => {
    heading.addEventListener('click', () => {
        heading.parentNode.classList.toggle('show-filter')
    })
});


// ----------------------------------------------------------------------------
//                Product Image Show function in product page
// ----------------------------------------------------------------------------

const productImgBig = document.getElementById('product-main-img')
const productImgSmall = document.querySelectorAll('.product-small-img')

productImgSmall.forEach(image => {
    image.addEventListener('click', () => {
        productImgBig.src = image.src
    })
})
