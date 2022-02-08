const Paragraph = ({ title, paragraph }) => {
  return (
    <>
      <div className="nk-box">
        <div className="container text-center">
          <div className="nk-gap-6"></div>
          <div className="nk-gap-2"></div>
          <h1 className="nk-title h1">{title}</h1>
          <div className="nk-gap-1"></div>
          <p className="lead">{paragraph}</p>
          <div className="nk-gap-6"></div>
          <div className="nk-gap-2"></div>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
