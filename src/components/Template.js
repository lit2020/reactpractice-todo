import React from "react";
import './Template.css';
const Template = ({ todoLength, children }) => {
   return (
      <div className="Template">
         <div className="title">오늘의 할 일 ({todoLength})</div>
         {todoLength == 0 && (
            <div className="free">
               <img src="https://blog.kakaocdn.net/dn/bk27Si/btq1TMtu6to/fvRLQeJeZoLz4MAR9O6z01/img.jpg" />
            </div>
         )}
         <div>{children}</div>
      </div>
   )
}

export default Template;