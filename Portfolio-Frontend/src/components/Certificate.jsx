import React from 'react';

function Certificate() {
  return (
    <div className="py-8">
      <h3 className="text-3xl text-gray-800 font-bold mb-8 text-center">
        Certificates
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { src: './images/certificates/c1.png', title: 'BACKEND DOMINATION', issuedBy: 'Assigned by Sheriyans Coding School' },
          { src: './images/certificates/c2.png', title: 'ANDROID DEVELOPMENT', issuedBy: 'Assigned by Inradeep Information Technologies pvt.Ltd ' },
          { src: './images/certificates/c3.png', title: 'Career Essentials in Generative AI', issuedBy: 'Assigned by Microsoft and LinkedIn' },
        ].map((certificate, index) => (
          <div
            key={index}
            className="w-64 md:w-1/4 flex flex-col items-center text-center group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={certificate.src}
                alt={certificate.title}
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-xl py-3 text-black font-semibold">
              {certificate.title}
            </p>
            <p className="text-gray-600 text-sm">{certificate.issuedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
