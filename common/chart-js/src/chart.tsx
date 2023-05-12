import React, { memo } from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import Flex from "@commons/flex";
import { barChartProp } from "./interface";

const BarChart = ({
  mode = 'bar',
  width,
  height,
  margin,
  padding,
  label = "chart",
  dataSource
}: any) => {
  const { t } = useTranslation()
  const view = () => {

    switch (mode) {
      case "line":
        return <Chart type='line' data={dataSource} />;
      case "pie":
        return <Chart type='pie' data={dataSource} />;
      case "bar":
        return <Chart type='bar' data={dataSource} />;
    }
  }

  return (
    <>
      <Flex
        flexDirection="column"
        width={width}
        height={height}
        margin={margin}
        padding={padding}
      >
        <Flex width="100%" justifyContent="center">
          <p>{t(label)}</p>
        </Flex>
        {view()}
      </Flex>
    </>
  )
}

export default memo(BarChart)