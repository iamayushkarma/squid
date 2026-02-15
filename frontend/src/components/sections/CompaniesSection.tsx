import Urban from "/svg/urban.svg";
import Natural from "/svg/natural.svg";
import Wave from "/svg/wave.svg";
import happy from "/svg/happy.svg";
import Alise from "/svg/alise.svg";
import Smile from "/images/smile.png";

type CompanyCardProp = {
  companyLogo: string;
};

const companies = [Smile, Urban, Natural, Wave, happy, Alise];

function CompaniesSection() {
  return (
    <div
      id="section-two"
      className="flex flex-col items-center h-[45.35rem] bg-background-secondary"
    >
      <div className="w-4/5 mx-auto mt-32">
        <h2 className="text-text-primary text-5xl w-1/2 font-semibold mx-auto text-center leading-16">
          Companies we Worked With in SInce 2015
        </h2>
        <div className="flex flex-wrap gap-8 justify-center mt-16">
          {companies.map((company, index) => (
            <CompanyCard key={index} companyLogo={company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompaniesSection;

function CompanyCard({ companyLogo }: CompanyCardProp) {
  return (
    <div className="p-4 w-40 bg-background rounded-xl flex items-center justify-center">
      <img src={companyLogo} alt="Company logo" className="w-[6.31rem]" />
    </div>
  );
}
