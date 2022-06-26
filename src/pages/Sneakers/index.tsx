import { h } from "preact";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  memo,
} from "preact/compat";
import topVideo from "/assets/video/pexels-ivan-khmelyuk-7222009.mp4";
import { styled } from "goober";
import PickUP1 from "/assets/img/pickup1.jpg";
import PickUP2 from "/assets/img/pickup2.jpg";
import PickUP3 from "/assets/img/pickup3.jpg";
import PickUP4 from "/assets/img/pickup4.jpg";
import PickUP5 from "/assets/img/pickup5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

const PickUp = [PickUP1, PickUP2, PickUP3, PickUP4, PickUP5];
type Props = { pickup: string };

const ScrollCard: FunctionComponent<Props> = memo(({ pickup }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <ScrollView active={inView}>
      <div ref={ref}>
        <Image src={pickup} />
        <dl>
          <dt>category</dt>
          <dd>
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト{" "}
          </dd>
        </dl>
      </div>
    </ScrollView>
  );
});

type MutableRef<T> = {
  current: T;
};

const FormPropaty = {
  name: "Name",
  mail: "Mail",
  message: "Message",
};
type SProps = { scrollRef: MutableRef<React.RefObject<HTMLDivElement>[]> };
const Sneaker: FunctionComponent<SProps> = ({ scrollRef }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 400,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <$TopVideo>
        <video
          muted
          ref={videoRef}
          loop
          autoPlay
          src={topVideo}
          type="video/mp4"
        />
      </$TopVideo>
      <h2 ref={scrollRef.current[0]}>PICKUP</h2>
      <Slider ref={sliderRef} {...settings}>
        {PickUp.map((pickup) => {
          return <Image src={pickup} />;
        })}
      </Slider>
      <h2 ref={scrollRef.current[1]}>Content</h2>
      <ScrollWrapper>
        {PickUp.map((pickup) => {
          return <ScrollCard pickup={pickup} />;
        })}
      </ScrollWrapper>
      <Contact>
        <ContactLabel>Contact</ContactLabel>
        <div id="text">
          <p>テキストテキスト テキストテキスト</p>
          <ul>
            <li>
              テキストテキスト テキストテキスト テキストテキスト
              テキストテキスト テキストテキスト
            </li>
            <li>
              テキストテキスト テキストテキスト テキストテキスト
              テキストテキスト テキストテキスト
            </li>
          </ul>
        </div>
        <div id="form">
          <form>
            <dl>
              {Object.entries(FormPropaty).map(([key, val]) => {
                return (
                  <div key={key}>
                    <dt key={key}>
                      <label for={key}>{val}:</label>
                    </dt>
                    <dd>
                      <input type="text" id={key}></input>
                    </dd>
                  </div>
                );
              })}
            </dl>
            <SendButton type="submit">Send</SendButton>
          </form>
        </div>
      </Contact>
      <Footer>.Sneacker</Footer>
    </>
  );
};

const Footer = styled("footer")`
  padding-top: 4rem;
  background-color: #000;
  color: #fff;
`;

const ContactLabel = styled("h2")`
  grid-area: title;
  text-align: center;
`;

const Contact = styled("div")`
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "areaA areaB";
  #text {
    margin-right: 1rem;
    grid-area: areaA;
    ul {
      list-style: none;
    }
    ul li + li {
      margin: 0 1rem 0 1rem;
    }
  }
  #form {
    margin-left: 1rem;
    grid-area: areaB;
    text-align: left;
    dd {
      margin: 0;
    }
    textarea,
    input {
      height: 2rem;
      width: 80%;
      margin-bottom: 2rem;
    }
  }
`;

const Unit = styled("div")`
  float: left;
  margin: 0 0 0 5px;
  border: 1px solid #dddddd;
  background: #efefef;
`;
const $TopVideo = styled("div")`
  > video {
    width: 100%;
  }
`;

const ScrollWrapper = styled("div")`
  display: grid;
  margin-top: 4rem;
  justify-content: center;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled("img")`
  max-width: 100%;
  padding: 0 1em;
`;

const ScrollView = styled<{ active: boolean }>("div")`
  > div {
    padding: 1em;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: ${(props) =>
      props.active ? "translateY(0)" : "translateY(50px)"};
    transition: all 1s ease;
    > dl > dd {
      margin: 1em;
    }
  }
`;

const SendButton = styled("button")`
  background-color: #000;
  border: #fff solid 2px;
  color: #fff;

  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem;
`;

export default Sneaker;
