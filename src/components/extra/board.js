import React from 'react';
class Board extends React.Component {
    render() {
        return ( 
       
            <div className="card" style={style45}>
            <img src="/img/trophy-1@2x.png" style={styleimg1} class="sc-efQSVx lfdskt" />
            <img src="/img/5526619-emojis-transparent-png-party-emoji-png-transparent-png-e-1@2x.png" style={styleimg1} class="sc-hiwPVj kLxsqy" />
            <img src="/img/-3@2x.png" style={styleimg1} class="sc-hUpaCq gJloKt" />
             {/* <img className="card-img-top" src="..." alt="Card image cap" />
               */} <div className="card-body">
                <h5 className="card-title" style={style5}>Earn amazing<br />
            rewards.</h5>
            <h5 className="card-title" style={style6}>
                Participate in activities to earn things<br />
            such as NFT’s, Badges or mentorships</h5>   <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>   


        );
    }
  }
export default Board;

const style45 ={
    backgroundColor: "blue"
  };

const styleimg1 ={
    left: '0px',
    zIndex: '50',
    height: '15%',
    width: '15%',
    position: 'absolute'
};

const style6 ={
    color: 'white',
    fontFamily: 'var(--font-family-raleway)',
    fontSize: 'var(--font-size-xxxxxl)',
    fontWeight: '500',
    fontStyle: 'normal',
  //  position: 'absolute',
    top: '597px',
    left: '173px',
    letterSpacing: '0px'
};

const style5 ={
    color: 'white',
    fontFamily: 'var(--font-family-raleway)',
    fontSize: '70px',
    fontWeight: '700',
    fontStyle: 'normal',
    //position: 'absolute',
    top: '396px',
    left: '173px',
    letterSpacing: '0px'
};