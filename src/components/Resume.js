import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <h2 className="text-center">Resume</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card p-3">
              <div className="card-body">
                {/* ... (other content) ... */}
                <h4>Download Resume</h4>
                <p>
                  Click the link below to download my resume in PDF format:
                </p>
                <a
                  href="/Simon_Pereira_Resume.pdf"
                  download="Simon_Pereira_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
