import "./HomeTitleStyles.css";

function HomeTitle(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.titleImg} alt="titleImg" />
        <div className="title-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>

      </div>
    </>
  );
}

export default HomeTitle;
