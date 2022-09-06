import { Input } from "antd";
const { Search } = Input;
const searchFn = (val) =>{
  console.log("val", val);
}

const MyFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="foot">
          <p className="title">SIGN UP FOR OUR DAILY INSIDER</p>
          <div className="input-wrap">
            <Search
              allowClear
              enterButton="Subscribe"
              placeholder="Enter you email"
              onSearch={searchFn}
              size="large"
              type="email"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-uls">
          <div className="copyright-ul">
            <p className="copyright-title">Explore</p>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </div>
          <div className="copyright-ul">
            <p className="copyright-title">Support</p>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </div>
          <div className="copyright-ul">
            <p className="copyright-title">Stay connected</p>
            <div className="social-contact">
              <p className="facebook"></p>
              <p className="twitter"></p>
              <p className="instagram"></p>
            </div>
          </div>
        </div>
        <div className="university">
          <p className="university-title">DEV@Deakin 2022</p>
          <div className="policy-term">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Code of Conduct</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
