import "./YearSelector.css";
export default function YearSelector({}) {
  let yearStart = 2000;
  let yearEnd = new Date().getFullYear();
  let yearList = [];

  for (let i = yearStart; i <= yearEnd; i++) {
    yearList.push(i);
  }
  const optionYear = yearList.map((year) => <option className="optionYear" key={year}>{year}</option>)

  return (
      <select className="year-selector">
          {optionYear}
      </select>
  )
}
