import ReactApexChart from 'react-apexcharts'
import { useState, useEffect } from 'react'
import './index.css'

const ApexChart = (props: any) => {
  const [state, setState] = useState<any>();
  useEffect(() => {
    setState({
      series: props.percent,
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: props.labels,
        legend: {
          show: props.legend,
          position: 'bottom',
        },
        colors: props.color,
        //remove the white outline of the chart
        stroke: {
          show: false,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 380
            },
            legend: {
              position: 'bottom'
            },
            fill: {
              colors: props.color
            },
          }
        }]
      },
    })
  }, [])

  return (
    <div>
      {
        state
          ? <ReactApexChart
            options={state.options}
            series={state.series}
            type="pie"
            width={props.type === 1 ? 380 : 500}
          />
          : <></>
      }
    </div >
  );
}

export default ApexChart