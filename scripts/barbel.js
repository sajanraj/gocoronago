const { useEffect, useState } = React;

const Navigation = () => {
  const [offsetTop, setOffsetTop] = useState(0);
  let thisElement = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", () => setOffsetTop(window.scrollY));
  }, []);

  useEffect(() => {
    var tl = new TimelineMax();

    if (offsetTop === 0) {
      const style = {
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(255, 255, 255, .1)",
        boxShadow: "none",
        color: "#F0F0F2"
      };

      tl.to(thisElement, 0.3, style, "a").to(
        ".navbar__container",
        0.3,
        { padding: "20px 70px", ease: Power1.easeOut },
        "a"
      );
    } else {
      const style = {
        backgroundColor: "#F0F0F2",
        borderBottom: "0",
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,.3)",
        color: "#222126"
      };

      tl.to(thisElement, 0.3, style, "a").to(
        ".navbar__container",
        0.3,
        { padding: "20px 55px" },
        "a"
      );
    }
  }, [offsetTop]);

  return (
    <div class="navbar" ref={(el) => (thisElement = el)}>
      <div class="navbar__container">
        <div class="navbar__logo">LOGO</div>
        <ul class="navbar__items">
          <li class="navbar__link">Home</li>
          <li class="navbar__link">About</li>
          <li class="navbar__link">Support</li>
          <li class="navbar__link">Contact</li>
        </ul>
      </div>
      <div class="navbar__container">
        <ul class="navbar__items">
          <li class="navbar__link">My Account</li>
          <li class="navbar__link">Logout</li>
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<Navigation />, document.getElementById("root"));
