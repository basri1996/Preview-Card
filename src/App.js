import "./App.css";
import img1 from "./images/image-equilibrium.jpg";
import img2 from "./images/image-avatar.png";
import { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  function hoverHandle() {
    setHover(true);
  }

  function hoverLeave() {
    setHover(false);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          onMouseEnter={hoverHandle}
          style={styles.img}
          src={img1}
          alt="equilibrium"
        />
        {hover && (
          <div onMouseLeave={hoverLeave} style={styles.hover}>
            {" "}
            <i style={styles.blink}>
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </i>
          </div>
        )}
        <div style={styles.h1}>Equilibrium #3429</div>
        <p style={styles.text1}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div style={styles.icons}>
          <div style={styles.iconDiv1}>
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span style={styles.iconText1}>0.041 ETH</span>
          </div>

          <div style={styles.iconDiv2}>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <span style={styles.iconsText2}>3 days left</span>
          </div>
        </div>

        <div style={styles.line}></div>

        <div style={styles.editorDiv}>
          <img style={styles.image2} src={img2} alt="avatriko" />
          <span style={styles.iconText3}>Creation of</span>
          <span style={styles.iconText4}>Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#0D192C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: "350px",
    height: "596px",
    backgroundColor: "#15263F",
    boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.0952917)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    position: "relative",
  },

  img: {
    width: "302px",
    height: "302px",
    borderRadius: "8px",
    marginTop: "8px",
    borderTopLeftRadius: "8px",
  },

  h1: {
    color: "#FFF",
    width: "302px",
    height: "28px",
    fontWeight: "600",
    fontSize: "22px",
    display: "flex",
    paddingTop: "8px",
  },

  text1: {
    color: "#8BACD9",
    width: "302px",
    height: "52px",
    fontWeight: "300",
    fontSize: "18px",
  },

  icons: {
    display: "flex",
    width: "302px",
    justifyContent: "space-between",
  },

  iconDiv1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText1: {
    color: "#00FFF8",
    marginLeft: "5px",
  },

  iconDiv2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  iconsText2: {
    color: "#8BACD9",
    marginLeft: "5px",
  },

  line: {
    width: "302px",
    height: "1px",
    backgroundColor: "#2E405A",
  },

  editorDiv: {
    width: "302px",
    display: "flex",
    alignItems: "center",
  },

  image2: {
    width: "33px",
    height: "33px",
    borderRadius: "50%",
    border: "1px solid white",
    marginRight: "8px",
  },

  iconText3: {
    color: "#8BACD9",
    marginleft: "8px",
  },

  iconText4: {
    color: "#fff",
    marginLeft: "8px",
  },

  hover: {
    width: "302px",
    height: "302px",
    backgroundColor: "rgba(0, 255, 248, 0.5)",
    position: "absolute",
    top: "0",
    borderRadius: "8px",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
