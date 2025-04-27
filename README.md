# Recharts Z-Score Highlight Chart

This project modifies the standard Recharts SimpleLineChart example to highlight sections where the absolute value of the z-score exceeds 1.

## ✨ Features

- **Dynamic Z-Score Calculation**: For each data point, calculates the z-score based on the dataset.
- **Highlighting Outliers**:
  - Sections with `|z-score| > 1` are rendered in **red**.
  - Normal sections (`|z-score| <= 1`) are rendered in **blue**.
- **Custom Dots**: Matching the line color for normal and outlier points.
- **Fully Responsive**: Uses `ResponsiveContainer` from Recharts.
- **Clean TypeScript Structure**: Fully typed components and utilities.

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/max-shakhzod/react-charts.git

    Install dependencies:
   ```

npm install

Start the development server:

    npm run dev

    Open your browser at http://localhost:3000.

🛠️ Project Structure

    Chart.tsx: Main chart component.

    CustomDots.tsx: Custom dot components for normal and outlier points.

    utils/DataUtils.ts: Utility functions to calculate mean, standard deviation, z-scores, and split data.

    types.ts: TypeScript types for data structure.

📊 Z-Score Calculation

The z-score for a value xx is calculated as:
z=x−μσ
z=σx−μ​

Where:

    μμ is the mean of all values

    σσ is the standard deviation of all values

Data points with ∣z∣>1∣z∣>1 are considered outliers.
