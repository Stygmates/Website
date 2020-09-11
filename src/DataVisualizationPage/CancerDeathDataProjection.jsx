import React, {useEffect, useState} from 'react';
import { readRemoteFile } from 'react-papaparse';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//Required for the export button
require("highcharts/modules/exporting")(Highcharts);

const CancerDeathDataProjection = () => {
    const url = "https://www.data.gouv.fr/fr/datasets/r/fa75a2f1-5854-461f-814f-4b93c0d24a0c";
    const [cervicalData, setCervicalData] = useState([]);
    const [uterineData, setUterineData] = useState([]);
    const [colonRectumCancerMenData, setColonRectumCancerMenData] = useState([]);
    const [colonRectumCancerWomenData, setColonRectumCancerWomenData] = useState([]);
    const [stomacCancerMenData, setStomacCancerMenData] = useState([]);
    const [stomacCancerWomenData, setStomacCancerWomenData] = useState([]);
    const [liverCancerMenData, setLiverCancerMenData] = useState([]);
    const [liverCancerWomenData, setLiverCancerWomenData] = useState([]);
    const [larynxCancerMenData, setLarynxCancerMenData] = useState([]);
    const [larynxCancerWomenData, setLarynxCancerWomenData] = useState([]);

    useEffect(() => {
        readRemoteFile(url, {
            complete: (results) => {
                var cervicalCancer = [];
                var uterineCancer = [];
                var colonRectumCancerMen = [];
                var colonRectumCancerWomen = [];
                var stomacCancerMen = [];
                var stomacCancerWomen = [];
                var liverCancerMen = [];
                var liverCancerWomen = [];
                var larynxCancerMen = [];
                var larynxCancerWomen = [];
                results.data.forEach((element) => {
                    var ageRange;
                    var value;
                    switch(element[0]){
                        case "Col de l'ut�rus":
                            ageRange = element[3];
                            value = parseInt(element[5]);
                            cervicalCancer.push([ageRange, value]);
                            break;
                        case "Corps de l'ut�rus":
                            ageRange = element[3];
                            value = parseInt(element[5]);
                            uterineCancer.push([ageRange, value]);
                            break;
                        case "Colon-rectum":
                            ageRange = element[3];
                            value = parseInt(element[5]);
                            switch(element[1]){
                                case "Homme":
                                    colonRectumCancerMen.push([ageRange, -value]);
                                    break;
                                case "Femme":
                                    colonRectumCancerWomen.push([ageRange, value]);
                                    break;
                                default:
                                    break;
                            }
                            break;

                            case "Estomac":
                                ageRange = element[3];
                                value = parseInt(element[5]);
                                switch(element[1]){
                                    case "Homme":
                                        stomacCancerMen.push([ageRange, -value]);
                                        break;
                                    case "Femme":
                                        stomacCancerWomen.push([ageRange, value]);
                                        break;
                                    default:
                                        break;
                                }
                                break;

                            case "Foie":
                                ageRange = element[3];
                                value = parseInt(element[5]);
                                switch(element[1]){
                                    case "Homme":
                                        liverCancerMen.push([ageRange, -value]);
                                        break;
                                    case "Femme":
                                        liverCancerWomen.push([ageRange, value]);
                                        break;
                                    default:
                                        break;
                                }
                                break;
                            case "Larynx":
                                ageRange = element[3];
                                value = parseInt(element[5]);
                                switch(element[1]){
                                    case "Homme":
                                        larynxCancerMen.push([ageRange, -value]);
                                        break;
                                    case "Femme":
                                        larynxCancerWomen.push([ageRange, value]);
                                        break;
                                    default:
                                        break;
                                }
                                break;

                        default:
                            break;
                    }
                });
                setCervicalData(cervicalCancer);
                setUterineData(uterineCancer);
                setColonRectumCancerMenData(colonRectumCancerMen);
                setColonRectumCancerWomenData(colonRectumCancerWomen);
                setStomacCancerMenData(stomacCancerMen);
                setStomacCancerWomenData(stomacCancerWomen);
                setLiverCancerMenData(liverCancerMen);
                setLiverCancerWomenData(liverCancerWomen);
                setLarynxCancerMenData(larynxCancerMen);
                setLarynxCancerWomenData(larynxCancerWomen);
            }
        });
      }, []);

    var categories = [
        '0-14 year old', '15-49 year old', '50-64 year old', '65-74 year old',
        '75-84 year old', '85+ year old'
    ];
    const options = {
        title: {
            text: 'Projection of the number of cancer deaths in France depending on the location of the tumor (2017)'
        },
        chart: {
            type: 'bar',
            backgroundColor: 'transparent'
        },
        credits: {
            href: "https://www.data.gouv.fr/fr/datasets/projections-dincidence-et-mortalite-2017-par-classe-dage-et-sexe-hcl-francim-spfrance-inca/",
            text: "data.gouv.fr"
        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value);
                }
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
                data: uterineData,
                name: "Uterine cancer deaths(women)"
            },
            {
                data: cervicalData,
                name: "Cervical cancer deaths(women)"
            },
            {
                data: colonRectumCancerMenData,
                name: "Colon-rectum cancer deaths(men)"
            },
            {
                data: colonRectumCancerWomenData,
                name: "Colon-rectum cancer deaths(women)"
            },
            {
                data: stomacCancerMenData,
                name: "Stomac cancer deaths(men)"
            },
            {
                data: stomacCancerWomenData,
                name: "Stomac cancer deaths(women)"
            },
            {
                data: liverCancerMenData,
                name: "Liver cancer deaths(men)"
            },
            {
                data: liverCancerWomenData,
                name: "Liver cancer deaths(women)"
            },
            {
                data: larynxCancerMenData,
                name: "Larynx cancer deaths(men)"
            },
            {
                data: larynxCancerWomenData,
                name: "Larynx cancer deaths(women)"
            }
        ]

    };

    return <div id="cancerdeathdataprojection" align="center"><HighchartsReact containerProps={{ style: { width: "80%" } }}  highcharts={Highcharts} options={options}/></div>
}
export default CancerDeathDataProjection;