import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { tGroup } from '../groupdata';
import React from 'react';
import SettingChart from './SettingChart';
import { LineChart } from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {
    const [series, setSeries] = React.useState({
        'Максимальная высота': true,
        'Средняя высота': false,
        'Минимальная высота': false,
    });

    const [isBar, setIsBar] = React.useState(true);

    let seriesY = Object.entries(series)
        .filter(item => item[1] == true)
        .map(item => {
            return { "dataKey": item[0], "label": item[0] }
        });

    const chartSetting = {
        yAxis: [
            {
                label: 'Высота (м)',
            }
        ],
        height: 400,
    };

    const barLabel = seriesY.length === 1 ? "value" : undefined;

    return (
        <Container maxWidth="lg">
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    barLabel={barLabel}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            )}
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
        </Container>
    );
}

export default GroupChart;