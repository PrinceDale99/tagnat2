
* {
  margin: 0px;
  padding: 0px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.goto {
  position: absolute;
  top: -78px;
}

.loader {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  animation: fade 1s infinite;
}

.circle:nth-child(1) { animation-delay: 0.2s; }
.circle:nth-child(2) { animation-delay: 0.4s; }
.circle:nth-child(3) { animation-delay: 0.6s; }

@keyframes fade {
  0%, 20%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

body {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

button {
  font-family: 'Segoe UI', sans-serif;
}

h3 {
  font-size: 40px;
  font-weight: normal;
  color: #404040;
  padding-top: 20px;
}

.round-image {
  border: black 5px solid;
  border-radius: 50%;
  margin: 5px;
}

header {
  position: fixed;
  top: 0px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 78px;
  background: #F8F8F9;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 5;
}

header .logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 2%;
}

nav {
  padding: 30px;
  width: 100%;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  display: inline-block;
  outline: none;
  color: #5f5f79;
  margin-left: 30px;
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 0.04em;
}

nav ul li a:hover {
  color: #808080;
  text-decoration: none;
}

nav ul li:not(:first-child) {
  margin-left: 25px;
}

@media screen and (max-width: 768px) {
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    z-index: -1;
    background: #1f2227;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .nav-container ul {
    position: absolute;
    top: 25%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    width: 100%;
  }
  .nav-container ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }
  .nav-container ul li a {
    padding: 10px 25px;
    opacity: 0;
    visibility: hidden;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .nav-container ul li:nth-child(1) a {
    -webkit-transition-delay: 0.2s;
            transition-delay: 0.2s;
  }
  .nav-container ul li:nth-child(2) a {
    -webkit-transition-delay: 0.3s;
            transition-delay: 0.3s;
  }
  .nav-container ul li:nth-child(3) a {
    -webkit-transition-delay: 0.4s;
            transition-delay: 0.4s;
  }
  .nav-container ul li:nth-child(4) a {
    -webkit-transition-delay: 0.5s;
            transition-delay: 0.5s;
  }
  .nav-container ul li:not(:first-child) {
    margin-left: 0;
  }
  .nav-open {
    position: absolute;
    right: 10px;
    top: 20px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
  }
  .nav-open i {
    display: block;
    width: 20px;
    height: 2px;
    background: #1f2227;
    border-radius: 2px;
    margin-left: 14px;
  }
  .nav-open i:nth-child(1) {
    margin-top: 16px;
  }
  .nav-open i:nth-child(2) {
    margin-top: 4px;
    opacity: 1;
    visibility: visible;
  }
  .nav-open i:nth-child(3) {
    margin-top: 4px;
  }
}

#nav:checked + .nav-open {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

#nav:checked + .nav-open i {
  background: #fff;
  -webkit-transition: -webkit-transform 0.2s ease;
  transition: -webkit-transform 0.2s ease;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
}

#nav:checked + .nav-open i:nth-child(1) {
  -webkit-transform: translateY(6px) rotate(180deg);
          transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-open i:nth-child(2) {
  opacity: 0;
  visibility: hidden;
}

#nav:checked + .nav-open i:nth-child(3) {
  -webkit-transform: translateY(-6px) rotate(90deg);
          transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-container {
  z-index: 9990;
  opacity: 1;
  visibility: visible;
}

#nav:checked ~ .nav-container ul li a {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
          transform: translateY(0);
}

.hidden {
  display: none;
}

main .home, main .introduction, main .skills, main .portfolio {
  min-height: calc(100vh - 70px);
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: relative;
}

main .home {
  margin-top: 78px;
  background: -webkit-gradient(linear, left top, right top, from(#00cdac), to(#8ddad5));
  background: linear-gradient(to right, #00cdac 0%, #8ddad5 100%);
}

main .home .title {
  min-height: 250px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

main .home .title h1 {
  font-size: 72px;
}

main .home .welcomeImage {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

main .home .footer {
  min-height: 150px;
}

main .home .title, main .home .footer {
  width: 100%;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .introduction {
  background: -webkit-gradient(linear, left top, right top, from(#F6D365), to(#f3d46f));
  background: linear-gradient(to right, #F6D365 0%, #f3d46f 100%);
}

main .introduction .row1 {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

main .introduction .row1 .intro, main .introduction .row1 .hi-img {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .introduction .row1 .intro {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  margin-left: 5%;
  text-align: left;
}

main .introduction .row1 .intro h1 {
  font-size: 130px;
}

main .introduction .row1 .intro h2 {
  font-size: 90px;
}

main .introduction .row1 .hi-img {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

main .introduction .row2 {
  min-height: 150px;
}

main .introduction .row2 h1 {
  font-size: 35px;
  padding-bottom: 15px;
  font-weight: 400;
  color: #404040;
}

main .skills {
  background: -webkit-gradient(linear, left top, right top, from(#00cdac), to(#8ddad5));
  background: linear-gradient(to right, #00cdac 0%, #8ddad5 100%);
}

main .skills .skill-title {
  padding-top: 20px;
  height: 100px;
  font-size: 25px;
  color: white;
}

main .skills .items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .skills .item {
  height: 200px;
  width: 200px;
  background: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 20px;
  border-radius: 50%;
}

main .skills img {
  max-height: 130px;
  max-width: 130px;
}

main #skill1 {
  display: none;
}

main #skill2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

main #skill2 img {
  max-height: calc(100vh - 70px);
  max-width: 100vw;
  padding: 10px;
  height: 90%;
  width: 90%;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .portfolio {
  background: -webkit-gradient(linear, left top, right top, from(#F6D365), to(#f3d46f));
  background: linear-gradient(to right, #F6D365 0%, #f3d46f 100%);
}

main .portfolio .title {
  padding: 20px;
  font-size: 45px;
  cursor: pointer;
}

main .portfolio .grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 100%;
}

main .portfolio .column {
  max-width: 700px;
  max-height: 500px;
  min-height: 200px;
  min-width: 200px;
  margin: 5px;
  background: #395B50;
}

main .portfolio .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .portfolio .card {
  width: 500px;
  height: 300px;
  max-height: 300px;
  background: transparent;
  margin: 10px;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  cursor: default;
}

main .portfolio .card img {
  height: 100%;
  width: 100%;
  padding: 5px;
}

main .portfolio .flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform 0.6s;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-box-shadow: 0 4px 8px 0 black;
          box-shadow: 0 4px 8px 0 black;
}

main .portfolio .card:hover .flip-card-inner {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}

main .portfolio .flip-card-front, main .portfolio .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

main .portfolio .flip-card-front {
  background: #bbb;
  color: black;
}

main .portfolio .flip-card-back {
  background: #f8f8f9;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-line-pack: center;
      align-content: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-shadow: 0 4px 8px 0 black;
          box-shadow: 0 4px 8px 0 black;
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}

main .portfolio .flip-card-back p {
  color: #5f5f79;
  font-weight: 600;
}

main .portfolio .flip-card-back h1 {
  padding-top: 5px;
}

main .contact {
  height: 300px;
  background: #F8F8F9;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

main .contact .h1 {
  font-size: 45px;
  font-weight: 600;
}

main .contact p {
  font-size: 30px;
}

main .contact img {
  height: 60px;
  margin: 10px;
}

.social img:hover, .round-image:hover, .item:hover {
  -webkit-animation: bounce 1s;
          animation: bounce 1s;
}

@-webkit-keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}

@media screen and (max-width: 900px) {
  .row1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-transition: opacity 3s ease-in-out;
    transition: opacity 3s ease-in-out;
  }
  .row2, .row1 img {
    margin-top: 20px;
  }
  .row2 h1 {
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  .skills #skill1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .skills #skill2 {
    display: none;
  }
  .home .title h1 {
    font-size: 50px !important;
  }
  .home .title h3 {
    font-size: 30px !important;
  }
  body {
    overflow-x: hidden;
  }
}

@media screen and (max-width: 450px) {
  .home .title h1 {
    font-size: 40px !important;
  }
  .home .title h3 {
    font-size: 30px !important;
  }
  .welcomeImage img, .hi-img img {
    width: 80%;
  }
  .intro h2 {
    font-size: 21.5vw !important;
  }
  .row2 h1 {
    font-size: 25px !important;
  }
  .contact {
    height: 250px;
  }
  .contact .h1 {
    font-size: 35px !important;
    font-weight: 600;
  }
  .contact p {
    font-size: 20px !important;
  }
  .social img {
    height: 50px !important;
    margin: 5px;
  }
}
