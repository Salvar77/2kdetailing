import { useState } from "react";
import classes from "./BooksyBubble.module.scss";
import { FaCalendarAlt } from "react-icons/fa";

const BooksyBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpenBooksy = (e) => {
    // Na mobile pierwsze kliknięcie tylko rozwija bubble
    if (window.innerWidth < 992 && !isExpanded) {
      e.stopPropagation();
      setIsExpanded(true);
      return;
    }
    
    // Otwieramy bezpośredni link do Booksy w nowej karcie
    window.open("https://booksy.com/pl-pl/343853_2k-auto-detailing-opole_auto-detailing_12012_opole", "_blank");
  };

  return (
    <div 
      className={`${classes.booksyBubble} ${isExpanded ? classes.expanded : ""}`}
      onClick={handleOpenBooksy}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={classes.bubbleContent}>
        <FaCalendarAlt className={classes.calendarIcon} />
        <span className={classes.text}>Umów wizytę</span>
      </div>
    </div>
  );
};

export default BooksyBubble;
