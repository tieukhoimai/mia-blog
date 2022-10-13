---
title: "Colors and Data"
description: "Color makes a chart look better and makes it easier for people to understand the data it shows. Based on the types of data, the colors used for data visualization can be put into three groups: categorical colors, sequential colors, and diverging colors."
date: "2022-09-25"
banner:
  src: "resource/thumbnail.png"
  alt: "Colors and Data"
  caption: ''
categories:
  - "Data Visualization"
  - "Statistics"
keywords:
  - "dashboard"
  - "visualization"
  - "statistics"
  - "type of data"
---

# Overview

Visualizations are tools that can help people understand difficult ideas better. And a bad choice of color can hide important information and cause confusion. Graphics can help send the right message if they use the right color palettes. Color makes a chart look better and makes it easier for people to understand the data it shows.

![Overview](resource/background.png)

Based on the **types of data**, the colors used for data visualization can be put into three groups: **categorical colors, sequential colors, and diverging colors**.

<br>

# 1. Types of Data

![Type of Data](resource/types-of-data.png)

There are two main types of data

- Qualitative/ categorical data, fields that contain qualitative information are **dimensions**. 
- Quantitative/ numerical data - will always be a number that can be **measured**, which called a **metric**.

Based on these we can classify to four primary levels of measurement are nominal, ordinal, interval, and ratio.

<table style="overflow-x:auto; font-size: 0.8em">
   <thead>
      <tr>
         <th colspan="4" >Types of data</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td rowspan="2" >Qualitative</td>
         <td colspan="2" >Nominal</td>
         <td>Categories without order. These are discrete and unique categories that have no inherent order. These variables are also called factors.</td>
         <td>- Languages: English,  Chinese, Vietnamese, etc.<br>
         - Relationship status: married, single, etc.<br>
         - Public transportation bus, train, car, etc.</td>
      </tr>
      <tr>
         <td colspan="2" >Ordinal</td>
         <td>Categories with order. These are discrete and unique categories with an order. These variables are also called ordered factors.</td>
         <td>
         - Economic status: poor, middle income, wealthy<br>
         - Likert scales: Very satisfied, satisfied, neutral, dissatisfied, very dissatisfied</td>
      </tr>
      <tr>
         <td rowspan="4" >Quantitative</td>
         <td rowspan="2" >Discrete</td>
         <td>Nominal</td>
         <td>When numbers are assigned to characteristics for the purpose of data classification arbitrarily and without any regard to order.</td>
         <td>Gender: <br>
          - Females are assigned the number 1 <br>
          - Males are assigned the number 2</td>
      </tr>
      <tr>
         <td>Ordinal</td>
         <td>When numbers are purposefully assigned to data that have a sense of rank or order, but the magnitude of difference between those numbers is not known or cannot be measured.</td>
         <td>Grade score can range from as low as 0 and as high as 20.</td>
      </tr>
      <tr>
         <td rowspan="2" >Continous</td>
         <td>Interval</td>
         <td>
          - When numbers have units that are of equal magnitude as well as rank order on a scale without an absolute zero<br>
          - Scales of this type can have an arbitrarily assigned "zero", but it will not correspond to an absence of the measured variable. </td>
         <td>Temperature in Fahrenheit scale: 10, 0, +10, +20, +30.</td>
      </tr>
      <tr>
         <td>Ratio</td>
         <td>- When numbers have units that are of equal magnitude as well as rank order on a scale with an absolute zero</td>
         <td>
          - Distance (from zero miles/km upwards)</br>
          - Time intervals</td>
      </tr>
   </tbody>
</table>

<br>

# 2. Colors and Data

## 2.1. Categorical Colors
![Colors Palete](resource/categorical-colors.png)

A qualitative palette is used when the variable is a **categorical data**.  Categorical variables are those that have different labels but don't have an inherent order. 

**Categorical colors are optimized for maximum differentiation.** Use these for a nominal scale. Do not use them for **ordinal, interval, or ratio scales**. 

Some examples include country, languages, and gender. Each possible value of the variable is given a color from a qualitative palette.

In a qualitative palette, the colors for each group need to be different, and you should try to keep the palette to a maximum of six colors that have been optimized and won't be too confusing.

## 2.2. Sequential Colors

![Colors Palete](resource/sequential-colors.png)

A sequential palette can be used when the variable that is supposed to be colored is a number or has values that are naturally ordered. Using these colors for dimensions can make it harder to see the numbers and cause people to misunderstand visualizations.

**Sequential colors are optimized for numeric meaning**. Use these to create **ordinal and interval scales or also use these for ratio scales**. Don't use these as scales for categorical data. Using these colors for dimensions can make it harder to see the numbers and cause people to misunderstand visualizations.

## 2.3. Diverging Colors

![Colors Palete](resource/diverging-colors.png)

If our numeric variable has a central value that makes sense, like zero, we can use a diverging palette. Diverging palettes are made up of two sequential palettes that share an endpoint at the central value. Colors on one side of the center are given values that are bigger than the center, while colors on the other side are given values that are smaller than the center.

**Diverging colors are designed to be balanced from a central midpoint.** Use these for **ordinal and ratio scales**, especially when there's a meaningful middle value. You can also use these to make interval scales. Don't use these with categorical data.

# 3. More about Data | Inferential statistics

Statistical approaches are classified into two types: descriptive statistics and inferential statistics. Parametric tests are used to examine quantitative (rather than qualitative) information, whereas non-parametric tests are more typically employed for qualitative, non-numerical data.

<table style="overflow-x:auto; font-size: 0.8em">
   <thead>
      <tr>
         <th>Inferential statistics	</th>
         <th>Definition</th>
         <th>Characteristics</th>
         <th>Type of data</th>
         <th>Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Nonparametric Statistical Tests</td>
         <td>Refers to the use of statistical tests or methods when the data being studied comes from a sample or population of people that does not follow a normal distributed.</td>
         <td>
         - Assumes patient population being studied is not normally distributed (i.e., as seen with outliers)<br>
         - The usual central measure is a median</td>
         <td>
         Nominal<br>
         Ordinal</td>
         <td>
         - Mann-Whitney test (assumes 2 independent groups (i.e., not related) being studied)<br>
         - Kruskal-Wallis test (assumes > 2 independent groups being studied/compared)<br>
         - Spearman (correlation test)
         </td>
      </tr>
      <tr>
         <td>Parametric Statistical Analysis</td>
         <td>Refers to the use of statistical tests or methods when the data being studied comes from a sample or population of people that is normally distributed.</td>
         <td>
         - Assumes patient population being studied is normally distributed<br>
         - Assumes the variance is homogeneous <br>
         - The usual central measure is a mean</td>
         <td>
         Interval<br>
         Ratio</td>
         <td>
          - T-test (assumes 2 independent groups (i.e., not related) being studied)<br>
          - One-way ANOVA (assumes > 2 independent groups being studied/compared)<br>
          - Pearson (correlation test)</td>
      </tr>
   </tbody>
</table>

# 4. References

Wilke, C. O. (2019). *Fundamentals of data visualization: a primer on making info*

Gaddis, M. L., & Gaddis, G. M. (1990). Introduction to biostatistics: part 1, basic concepts. *Annals of emergency medicine*, *19*(1), 86-89.

[Nominal Data](https://www.ebmconsult.com/articles/nominal-data)

[What is Ratio Data](https://careerfoundry.com/en/blog/data-analytics/what-is-ratio-data/)

[Nonparametric Statistical Analysis](https://www.ebmconsult.com/articles/nonparametric-statistical-analysis)

[Parametric Statistical Analysis](https://www.ebmconsult.com/articles/parametric-statistical-analysis)

[Data Visualization Fundamentals](https://spectrum.adobe.com/page/data-visualization-fundamentals/)

[Color For Data Visualization](https://spectrum.adobe.com/page/color-for-data-visualization/)