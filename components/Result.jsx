import { calculateInvestmentResults } from "../src/util/investment";
import "../components/Result.css";
import(calculateInvestmentResults);

function Result({ resultInput }) {
  console.log("result .....");
  console.log(resultInput);

  const resultData = calculateInvestmentResults(resultInput);
  console.log(resultData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Tahun</th>
          <th>Nilai Investasi</th>
          <th>Bunga {Tahunan}</th>
          <th>Total Bunga</th>
          <th>Investasi Tahunan</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.interest}</td>
              <td>{data}</td>
              <td>{data.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
