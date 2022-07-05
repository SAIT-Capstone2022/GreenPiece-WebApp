import React, { Component, useRef, useState, useEffect } from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// const sdk = new ChartsEmbedSDK({
//     baseUrl: "https://charts.mongodb.com/charts-greenhouse-project-zfldl"
// });

// const chart = sdk.createChart({
//     chartId: "62bb709e-5246-46c9-801d-18966de071e1",
//     height: "700px"
// });

// export default class Chart extends Component {
//     render() {
//         return (
//             chart.render().catch((err) => console.log(err))
//         );
//     }
// }

export default class Chart extends Component {
    render() {
        const sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-greenhouse-project-zfldl' });
        const chartDiv = useRef(null);
        const [rendered, setRendered] = useState(false);
        const [chart] = useState(sdk.createChart({
            chartId: "62bb709e-5246-46c9-801d-18966de071e1",
            height: "700px",
            theme: "light"
        }));

        useEffect(() => {
            chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
        }, [chart]);

        // useEffect(() => {
        //     if (rendered) {
        //         chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
        //     }
        // }, [chart, filter, rendered]);

        return <div className="chart" ref={chartDiv} />;
    }
};
