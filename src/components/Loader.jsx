export function Loader({ isVisible }) {
  return (
    <div className={`loader ${isVisible ? '' : 'loader--hidden'}`} aria-hidden={!isVisible} aria-label="Loading portfolio">
      <div className="loader__mark"><span>C</span><span>I</span><span>S</span></div>
      <p>Engineering intelligent systems</p>
      <div className="loader__track"><span /></div>
    </div>
  )
}
