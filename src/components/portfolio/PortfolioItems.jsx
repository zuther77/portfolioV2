import React from 'react'

const PortfolioItems = ({item}) => {

  

  return (
    <div 
      className="work_card" 
      key={item.id}
        onClick={() => {
          window.open(item.link, "_blank");
        }}
      >
       
          <img 
                    src={item.image} alt="" 
                    className="work_img" 
          />
          <div className="hiddenlayer">
            <h3 className="work_title">{item.title}</h3>
            <p  className="work_button">
                Code <i className='bx bx-right-arrow-alt work_button-icon'></i>
            </p>
        </div>
        
        
        
    </div>
  );
};

export default PortfolioItems;