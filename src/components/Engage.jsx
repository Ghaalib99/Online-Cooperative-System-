import "../assets/css/engage.css"

export default function Engage({
  first_step,
  second_step,
  third_step,
  fourth_step,
  call_to_action,
  call_to_action2,
  title = "How It Works",
  howToOur = false,
  remove3rdButton = false,
}) {
  return (
    <>
      <div className="auto-container">
        <div className="sec-title text-center">
        <h2 className="text-[#000] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-bold leading-[3.5rem]">{title}</h2>

        <p className="font-bold text-xl mb-5 text-[#e9ad53]">Join our thousands of members all across the country to: </p>

        </div>

        <div className="schedule-tabs tabs-box">
          <div className="tabs-content">
            {/*Tab*/}
            <div className="tab active-tab" id="tab-1">
              <div className="schedule-timeline">
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        {/* 1 <br /> */}
                      </div>
                      {/* <h4>Click Button</h4> */}
                      {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                         <div className="text" style={{ color: "#000000" }}>
                        {first_step}
                      </div>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block even">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        {/* 2 <br /> */}
                      </div>
                      {/* <h4>Review</h4> */}
                      <div className="text" style={{ color: "#000000" }}>
                        {second_step}
                      </div>
                    </div>
                  </div>
                </div>
                {/* schedule Block */}
                <div className="schedule-block">
                  <div className="inner-box">
                    <div className="inner">
                      <div className="date">
                        {/* 3<br /> */}
                      </div>
                      {/* <h4>Payment</h4> */}
                      {/* <div class="text" style="color: #000000">Submit Service Information.</div> */}
                      {remove3rdButton ? (
                        <div className="text" style={{ color: "#000000" }}>
                          {third_step}
                        </div>
                      ) : (
                        <div
                          className="theme-btn btn-style-three"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="btn-title">{third_step}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {call_to_action}

      {!remove3rdButton && call_to_action2}
    </>
  );
}
