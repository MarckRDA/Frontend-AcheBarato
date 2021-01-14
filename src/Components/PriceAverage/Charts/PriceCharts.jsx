import * as React from "react";
import Component from "react";
import "./PriceCharts.css";
import { Chart,} from "react-google-charts";


const PriceCharts = () => {
  return (
<>
    <Chart
      //Exportar csv com o histórico de preço
      chartType="ColumnChart"
      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA"
      toolbarItems={[
        {
          type: 'csv',
          datasource:
            'https://spreadsheets.google.com/tq?key=1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA',
        },
      ]}

      width={'500px'}
      height={'300px'}
      chartType="ScatterChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Data', 'Preço'],
        [8, 37],
        [4, 33.5],
        [11, 34.5],
        [14, 39.8],
        [15, 30.5],
        [16, 30.8],
        [18, 30],
      ]}
      options={{
        title: 'VAriação de preço do produto por datas',
        hAxis: { title: 'Data' },
        vAxis: { title: 'Preço' },
        legend: 'none',
        trendlines: { 0: {} },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    
</>    
  );
};




export default PriceCharts;

