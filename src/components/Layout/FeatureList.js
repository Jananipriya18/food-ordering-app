import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

export const FeatureList = () => {
    
  return (
        <Container style={{marginTop: '50px',
          marginBottom: '50px'}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why opt for our app when ordering food? 🍔📲</Accordion.Header>
            <Accordion.Body>
            Our food ordering app offers a unique combination of features such as real-time order tracking,
             a wide variety of restaurant choices, exclusive deals and discounts, and a user-friendly 
             interface. We strive to provide a seamless and convenient food ordering experience that you
              won't find elsewhere!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do we guarantee the utmost freshness and quality of your app-ordered delights?</Accordion.Header>
            <Accordion.Body>
            We partner with top-rated restaurants and follow stringent quality control measures. 
            Our app also allows you to read reviews and ratings from other customers, ensuring you make an informed choice. 
            Plus, our real-time tracking feature ensures that your food is delivered hot and fresh to your doorstep.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do we guarantee the utmost freshness and quality of your app-ordered delights?</Accordion.Header>
            <Accordion.Body>
            We partner with top-rated restaurants and follow stringent quality control measures. 
            Our app also allows you to read reviews and ratings from other customers, ensuring you make an informed choice. 
            Plus, our real-time tracking feature ensures that your food is delivered hot and fresh to your doorstep.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What sets your app apart from other food delivery apps?</Accordion.Header>
            <Accordion.Body>
            We focus on local restaurants, offering a wide variety of cuisines and flavors you won't find on other apps.
             Supporting local businesses while enjoying great food is a win-win!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What benefits do loyal customers receive when using your app frequently?</Accordion.Header>
            <Accordion.Body>
            We value our loyal customers and offer a loyalty program that rewards you for every order. 
            You can earn points for each purchase, which can be redeemed for discounts, free meals, or other exclusive
             offers. The more you use our app, the more you save.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How secure is the payment process on our app?</Accordion.Header>
            <Accordion.Body>
            Your security is our priority. Our app uses state-of-the-art encryption technology to protect your
             payment information. We also offer multiple payment options, including credit/debit cards, digital
              wallets, and cash on delivery, so you can choose the method you're most comfortable with.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <grid class="rainbow">
          <div>
            <div>
              <div>
                <button class="Tasty" className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#de0079'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#fb004d'}
    onClick={(e) => e.target.style.backgroundColor = '#f2858c'}
  >
                    Taste Authentic Flavours of India</button>
              </div>
            </div>
            <div>
              <button className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#0efff9'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#9b60cf'}
    onClick={(e) => e.target.style.backgroundColor = '#6cf0d1'}
  >
              Freshly Prepared Always
              </button>
            </div>
            <div>
              <button className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#ffc43c'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#f46c93'}
    onClick={(e) => e.target.style.backgroundColor = '#ff8015'}
  >
                Freshly Prepared Always
              </button>
            </div>
            <div>
              <button className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#dfc1a1'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#e5b3bb'}
    onClick={(e) => e.target.style.backgroundColor = '#1b3e40'}
  >
                Cleanliness & Hygiene Guaranteed
              </button>
            </div>
            <div>
              <button className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#a9c88a'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#dd9616'}
    onClick={(e) => e.target.style.backgroundColor = '#d9df57'}
  >
                Try 1000+ Regional Dishes.
              </button>
            </div>
            <div>
              <button className="Tasty"
    style={{
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fffaf2',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#b4abc4'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff93d3'}
    onClick={(e) => e.target.style.backgroundColor = '#237380'}
  >
                Highest rating by consumers
              </button>
            </div>
          </div>
        </grid> */}
        
        </Container>
  );
};