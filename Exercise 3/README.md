# TV Energy Consumption Storytelling Website (Exercise 3)

## Data Story (Audience and Purpose)

### Audience
The main audience is general TV buyers in Australia.  
They are mostly non-technical users who want practical guidance before purchase.

### Purpose
The purpose of this data story is to help consumers make better TV buying decisions by showing:
- which screen technologies are common,
- which technologies tend to use less power,
- and how screen size affects energy usage.

The website focuses on clear storytelling with simple charts and short explanations, rather than complex technical analysis.

---

## About the data

### Data source
This project uses a small sample TV dataset included in JavaScript for educational storytelling in Exercise 3.  
Supporting chart images are also included from the local `charts/` folder for presentation references.

### Data processing
Data exploration and aggregation can be performed in **KNIME** using:
- grouping by `Screen_Tech` (GroupBy),
- counting frequency by technology,
- calculating average `Power_Consumption` by technology (aggregation),
- and plotting `Screen_Size` vs `Power_Consumption` for relationship analysis.

Equivalent processing logic is also implemented in JavaScript for Chart.js visualisation.

### Privacy
No personal or sensitive user data is used.  
The dataset contains product-level attributes only (technology, size, brand, power, star rating).

### Accuracy and limitations
- The dataset is a sample and may not represent the full Australian TV market.
- Power consumption can vary with viewing settings, brightness, usage hours, and product generation.
- Findings should be treated as indicative guidance for comparison, not absolute market truth.

### Ethics
The visual story is designed to support fair and informed consumer decisions.  
Charts and explanations are written in plain language to avoid misleading interpretation and reduce information barriers for non-technical users.

---

## AI Declaration
Generative AI assistance was used to help draft and refine:
- webpage structure,
- CSS presentation,
- JavaScript chart logic,
- and README documentation text.

All generated output was reviewed, edited, and aligned with the assignment requirements by the student.
