import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const InputTypeButton = ({ iconClass, title, description, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`p-6 rounded-lg shadow-md transition-all w-full mb-3 p-4 ${
      isSelected 
        ? 'bg-blue-100 border-2 border-blue-500 shadow-blue-100' 
        : 'bg-white hover:bg-gray-50 border border-gray-200'
    }`}
  >
    <div className="">
    <div className="flex items-center mb-3">
      <i className={`${iconClass} mr-3 text-2xl ${isSelected ? 'text-blue-500' : 'text-gray-600'}`}></i>
      <h3 className={`text-xl font-semibold ${isSelected ? 'text-blue-700' : 'text-gray-800'}`}>{title}</h3>
    </div>
    <p className={`text-sm ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}>{description}</p>
    </div>
  </button>
);

const FormInput = ({ label, type, accept }) => (
  <label className="block mb-4">
    <span className="text-gray-700 font-medium">{label}</span>
    <input 
      type={type} 
      accept={accept}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200"
      required 
    />
  </label>
);

const FormButton = ({ children }) => (
  <button 
    type="submit" 
    className="w-full bg-blue-600 text-black font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
  >
    {children}
  </button>
);

const ExcelSheetForm = () => (
  <form className="space-y-6">
    <FormInput label="Upload Excel Sheet" type="file" accept=".xlsx, .xls" />
    <FormButton>Upload Excel Sheet</FormButton>
  </form>
);

const BibTeXForm = () => (
  <form className="space-y-6">
    <FormInput label="Upload BibTeX File" type="file" accept=".bib" />
    <FormButton>Upload BibTeX File</FormButton>
  </form>
);

const ManualEntryForm = () => (
  <form className="space-y-6">
    <FormInput label="Title" type="text" />
    <FormInput label="Authors" type="text" />
    <FormInput label="Publication Year" type="number" />
    <FormInput label="Journal/Conference" type="text" />
    <FormButton>Submit Publication</FormButton>
  </form>
);

export default function Index() {
  const [selectedType, setSelectedType] = useState(null);

  const inputTypes = [
    {
      id: 'excel',
      iconClass: 'fas fa-file-excel',
      title: 'Excel Sheet',
      description: 'Upload the excel sheet with the details to be fetched.',
      form: ExcelSheetForm
    },
    {
      id: 'bibtex',
      iconClass: 'fas fa-file-alt',
      title: 'BibTeX File',
      description: 'Use a consolidated BibTeX file to import your publication records seamlessly.',
      form: BibTeXForm
    },
    {
      id: 'manual',
      iconClass: 'fas fa-edit',
      title: 'Manual Entry',
      description: 'Manually enter your queries to fetch required records.',
      form: ManualEntryForm
    }
  ];

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-800">
                ScholarTrack - Effortlessly Summarize and Showcase Faculty Publications
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-gray-600">
                ScholarTrack is your go-to solution for generating comprehensive publication summaries. Seamlessly gather and export year-wise records from top academic databases like Google Scholar and DBLP.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="pt-32 sm:pt-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 rounded-xl" style={{ zIndex: -1 }}></div>
              <div className="bg-white rounded-lg p-8 shadow-lg relative">
                <h2 className="font-semibold text-3xl text-gray-800 mb-6">Select Your Input Type</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {inputTypes.map((type) => (
                    <InputTypeButton
                      key={type.id}
                      iconClass={type.iconClass}
                      title={type.title}
                      description={type.description}
                      isSelected={selectedType === type.id}
                      onClick={() => setSelectedType(type.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {selectedType && (
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                {inputTypes.find(t => t.id === selectedType).title}
              </h3>
              <div className="bg-white rounded-lg shadow-lg p-8">
                {inputTypes.find(t => t.id === selectedType).form()}
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer/>
    </>
  );
}