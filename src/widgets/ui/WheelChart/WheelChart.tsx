import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import type  { IFieldValue } from "@/entities/record/model/types";

interface WheelChartProps {
  width?: number;
  height?: number;
  radius?: number;
  maxValue?: number;
  data: IFieldValue[];
}

export const WheelChart = ({ data, width = 900, height = 500,  radius = 200, maxValue = 10  }: WheelChartProps) => {

  const chartContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  if (!chartContainerRef.current || !data.length) return;
    // Очищаем контейнер
    d3.select(chartContainerRef.current).selectAll('*').remove();

    // Создаём SVG
    const svg = d3
      .select(chartContainerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;');

    // Pie layout
    const pie = d3.pie<IFieldValue>().sort(null).value(() => 1);
    const arcs = pie(data);
    const arcGenerator = d3.arc<d3.DefaultArcObject>();
    const labelRadius = radius + 25;
    const arcLabel = d3.arc<d3.PieArcDatum<IFieldValue>>().innerRadius(labelRadius).outerRadius(labelRadius);

    // Рисуем сектора
    arcs.forEach((arc, index) => {
      const item = arc.data;
      const fillRatio = item.value / maxValue;
      const color = item.color_hex || d3.schemeCategory10[index % 10];

      // Контур
      svg
        .append('path')
        .attr('d', arcGenerator({ innerRadius: 0, outerRadius: radius, startAngle: arc.startAngle, endAngle: arc.endAngle }) as string)
        .attr('fill', 'none')
        .attr('stroke', '#777')
        .attr('stroke-width', 0.5);

      // Заполнение
      svg
        .append('path')
        .attr('d', arcGenerator({ innerRadius: 0, outerRadius: radius * fillRatio, startAngle: arc.startAngle, endAngle: arc.endAngle }) as string)
        .attr('fill', color)
        .attr('opacity', 0.9)
        .attr('stroke', '#777')
        .attr('stroke-width', 0.5);

      // Подпись
      const [x, y] = arcLabel.centroid(arc);
      const angle = (arc.startAngle + arc.endAngle) / 2;
      
      svg
        .append('text')
        .attr('transform', `translate(${x}, ${y})`)
        .attr('dy', '0.35em')
        .style('text-anchor', angle < Math.PI ? 'start' : 'end')
        .style('font-size', '14px')
        .style('font-weight', '500')
        .style('fill', '#333')
        .style('paint-order', 'stroke')
        .style('stroke', 'white')
        .style('stroke-width', '2px')
        .text(item.name);
    });

    return () => {
      if (chartContainerRef.current) {
        d3.select(chartContainerRef.current).selectAll('*').remove();
      }
    };
  }, [data]);

   return <div ref={chartContainerRef} />;
};