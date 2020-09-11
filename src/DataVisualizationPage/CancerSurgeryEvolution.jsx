import React, {useEffect, useState, memo} from 'react';
import { readRemoteFile } from 'react-papaparse';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//Required for the export button
require("highcharts/modules/exporting")(Highcharts);


const CancerSurgeryEvolution = () => {
  const url = "https://www.data.gouv.fr/fr/datasets/r/2f90b078-7c3b-4e73-a23f-68ad72da9a8e";
  const [breastData, setBreastData] = useState([]);
  const [skinData, setSkinData] = useState([]);
  const [uterusData, setUterusData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const [melanomaData, setMelanomaData] = useState([]);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    var bd = [];
    var melanoma = [];
    var skin = [];
    var uterus = [];
    var others = [];
    var total = [];
    readRemoteFile(url, {
      complete: (results) => {
        results.data.forEach((element) => {
          var year, cases;
          switch(element[1]){
            case "Sein":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              bd.push([year, cases]);
              break;
            case "M�lanome de la peau":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              melanoma.push([year, cases]);
              break;
            case "Peau hors m�lanome":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              skin.push([year, cases]);
              break;
            case "Col ut�rus":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              uterus.push([year, cases]);
              break;
            case "Autres cancers":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              others.push([year, cases]);
              break;
            case "Total":
              year = parseInt(element[0]);
              cases = parseInt(element[2]);
              total.push([year, cases]);
              break;
            default:
              break;
          }
        });
        setBreastData(bd);
        setMelanomaData(melanoma);
        setSkinData(skin);
        setUterusData(uterus);
        setOthersData(others);
        setTotalData(total);
      }
    });
  }, []);
  

  //Highcharts options
  const options = {
    title: {
        text: 'Evolution of the number of surgeries depending on the location of the tumor in France between 2011 and 2016'
    },
    chart: {
      backgroundColor: "transparent"
    },
    xAxis: {
      title: {
        text: "Year"
      },
      minTickInterval: 1
    },
    yAxis: {
      title: {
        text: "Number of surgeries"
      }
    },
    credits: {
      href: "https://www.data.gouv.fr/fr/datasets/evolution-de-la-chirurgie-en-cancerologie-par-localisation/",
      text: "data.gouv.fr"
    },
    series: [{
        data: breastData,
        name: "Breast cancers"
    },
    {
      data: melanomaData,
      name: "Melanoma"
    },
    {
        data: skinData,
        name: "Skin cancers (aside from melanoma)"
    },
    {
      data: uterusData,
      name: "Uterus cancers"
    },
    {
      data: othersData,
      name: "Other cancers"
    },
    {
      data: totalData,
      name: "Total"
    }
  ]
}
  return <div id="cancersurgeryevolution" align="center"><HighchartsReact containerProps={{ style: { width: "80%" } }}  highcharts={Highcharts} options={options}/></div>
}
export default memo(CancerSurgeryEvolution);