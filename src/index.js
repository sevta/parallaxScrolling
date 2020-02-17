import React from 'react'
import ReactDOM from 'react-dom'
import Scrollbar from 'smooth-scrollbar'
import './assets/index.scss'

let $root = document.querySelector('#app')

function App() {
  const $wrapper = React.useRef()
  const $bg = React.useRef()
  const $ornament1 = React.useRef()
  const $section2 = React.useRef()
  const $footer = React.useRef()
  let scrollbar

  React.useEffect(() => {
    setSmoothScrolling()
  }, [])

  function setSmoothScrolling() {
    scrollbar = Scrollbar.init($wrapper.current)
    scrollbar.addListener(status => {
      let y = status.offset.y
      runParallax($bg.current, y, .35);
      runParallax($ornament1.current, y, .75);
      // runParallax($footer.current, -y, .07)
    })
  }

  function runParallax(ref, y, val) {
    ref.style.transform = `translate3d(0, ${y * val}px, 0)`
  }

  function gotoSection() {
    console.log(scrollbar)
    scrollbar.scrollIntoView($section2.current)
  }

  return (
    <React.Fragment>
      <div className='wrapper' ref={$wrapper}>
        <div className='content'>
          <div className='header z-10'>
            <div className='ornament-1 font-sans bg-gray-900' ref={$ornament1}
              style={{
                left: `calc(50% - (379px / 2))`
              }}
            >STICKER-1</div>
            <button className='text-white font-bold cursor-pointer z-10 absolute' onClick={gotoSection}>scroll to section2</button>
            <div className='bg' ref={$bg}></div>
            <div>Header</div>
          </div>
          <section class='section-1 bg-gray-900'>
            <div className='container mx-auto py-10 text-white'>
              <p className='text-4xl text-gray-100 font-bold uppercase'>Lorem  ipsum dolor sit amet amet</p>
            </div>
          </section>
          <section class='section-2' ref={$section2}>
            <div className='container mx-auto py-10 text-white'>
              <p className='text-4xl text-gray-900 font-bold uppercase'>Lorem  ipsum dolor sit amet amet</p>
            </div>
          </section>
        </div>
      </div>
      <footer className='footer font-sans bg-gray-900 p-10 text-white w-full'>
        <div className='text-3xl'>footer</div>
        <div className='text-3xl'>footer</div>
        <div className='text-3xl'>footer</div>

      </footer>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, $root)