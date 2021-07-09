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
//                                  Ending
// ----------------------------------------------------------------------------
