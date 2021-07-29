import './GeneralBackground.css';
/** an example of what sections will look like */
// const sections = [
//     <div>haha</div>,
//     <div>heihei</div>,
//     <div>huohuo</div>
// ]

const GeneralBackground = ({ sections }) => {
  return (
    <div>
      {sections.map((section, idx) => (
        <div className={idx / 2 === 0 ? 'yellowBg' : 'whiteBg'}>{section}</div>
      ))}
    </div>
  );
};

export default GeneralBackground;
