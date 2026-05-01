const energyData = [
  { year: 2020, source: "Solar",      twh: 14.5 },
  { year: 2020, source: "Wind",       twh: 21.8 },
  { year: 2020, source: "Hydro",     twh: 32.5 },
  { year: 2020, source: "Geothermal",twh: 0.7  },
  { year: 2020, source: "Biomass",   twh: 4.2  },
  { year: 2021, source: "Solar",     twh: 25.6 },
  { year: 2021, source: "Wind",       twh: 25.9 },
  { year: 2021, source: "Hydro",      twh: 27.8 },
  { year: 2021, source: "Geothermal", twh: 0.7  },
  { year: 2021, source: "Biomass",    twh: 4.3  },
  { year: 2022, source: "Solar",      twh: 43.2 },
  { year: 2022, source: "Wind",       twh: 32.8 },
  { year: 2022, source: "Hydro",      twh: 23.1 },
  { year: 2022, source: "Geothermal", twh: 0.7  },
  { year: 2022, source: "Biomass",    twh: 4.5  }
];

function populateEnergyTable() {
  const tbody = document.getElementById("table-body");
  if (!tbody) return;
  energyData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.year}</td><td>${row.source}</td><td>${row.twh}</td>`;
    tbody.appendChild(tr);
  });
}

function createEnergyChart() {
  const ctx = document.getElementById("energy-chart");
  if (!ctx) return;

  const sources = ["Solar", "Wind", "Hydro", "Geothermal", "Biomass"];
  const colors  = ["#FFD700", "#87CEEB", "#4169E1", "#FF4500", "#228B22"];
  const years   = [2020, 2021, 2022];

  const datasets = sources.map((src, i) => ({
    label: src,
    data: years.map(yr => energyData.find(r => r.year === yr && r.source === src)?.twh ?? 0),
    backgroundColor: colors[i],
    borderColor: colors[i],
    borderWidth: 1
  }));

  new Chart(ctx, {
    type: "bar",
    data: { labels: years.map(String), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: "Australian Energy Generation by Source (TWh)" }
      },
      scales: {
        x: { title: { display: true, text: "Year" } },
        y: { beginAtZero: true, title: { display: true, text: "Generation (TWh)" } }
      }
    }
  });
}

const tvData = [
  { Screen_Tech: "LED", Screen_Size: 43, Brand: "Samsung", Power_Consumption: 75, Star_Rating: 4.5 },
  { Screen_Tech: "LED", Screen_Size: 50, Brand: "LG", Power_Consumption: 90, Star_Rating: 4.0 },
  { Screen_Tech: "LED", Screen_Size: 55, Brand: "Hisense", Power_Consumption: 105, Star_Rating: 3.5 },
  { Screen_Tech: "OLED", Screen_Size: 55, Brand: "LG", Power_Consumption: 92, Star_Rating: 5.0 },
  { Screen_Tech: "OLED", Screen_Size: 65, Brand: "Sony", Power_Consumption: 115, Star_Rating: 4.5 },
  { Screen_Tech: "OLED", Screen_Size: 77, Brand: "Samsung", Power_Consumption: 145, Star_Rating: 4.5 },
  { Screen_Tech: "LCD", Screen_Size: 40, Brand: "TCL", Power_Consumption: 85, Star_Rating: 3.0 },
  { Screen_Tech: "LCD", Screen_Size: 50, Brand: "Panasonic", Power_Consumption: 108, Star_Rating: 3.5 },
  { Screen_Tech: "LCD", Screen_Size: 60, Brand: "Kogan", Power_Consumption: 130, Star_Rating: 3.0 }
];

function countTechnologies(data) {
  const counts = { LED: 0, OLED: 0, LCD: 0 };
  data.forEach((tv) => {
    counts[tv.Screen_Tech] += 1;
  });
  return counts;
}

function averagePowerByTechnology(data) {
  const totals = {
    LED: { sum: 0, count: 0 },
    OLED: { sum: 0, count: 0 },
    LCD: { sum: 0, count: 0 }
  };

  data.forEach((tv) => {
    totals[tv.Screen_Tech].sum += tv.Power_Consumption;
    totals[tv.Screen_Tech].count += 1;
  });

  return {
    LED: totals.LED.sum / totals.LED.count,
    OLED: totals.OLED.sum / totals.OLED.count,
    LCD: totals.LCD.sum / totals.LCD.count
  };
}

function createTechnologyChart(counts) {
  const ctx = document.getElementById("technologyChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["LED", "OLED", "LCD"],
      datasets: [
        {
          label: "Number of TVs",
          data: [counts.LED, counts.OLED, counts.LCD],
          backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
          borderColor: ["#2563eb", "#059669", "#d97706"],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Screen Technology Distribution"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Screen Technology"
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of TVs"
          },
          ticks: {
            precision: 0
          }
        }
      }
    }
  });
}

function createAveragePowerChart(averages) {
  const ctx = document.getElementById("avgPowerChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["LED", "OLED", "LCD"],
      datasets: [
        {
          label: "Average Power (Watts)",
          data: [averages.LED, averages.OLED, averages.LCD],
          backgroundColor: ["#60a5fa", "#34d399", "#fbbf24"],
          borderColor: ["#2563eb", "#059669", "#d97706"],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Average Power Consumption by Technology"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Screen Technology"
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Average Power Consumption (W)"
          }
        }
      }
    }
  });
}

function createSizePowerScatter(data) {
  const ctx = document.getElementById("sizePowerChart");

  const points = data.map((tv) => ({
    x: tv.Screen_Size,
    y: tv.Power_Consumption
  }));

  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "TV Models",
          data: points,
          backgroundColor: "#1f7aa8"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Screen Size vs Power Consumption"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Screen Size (inches)"
          }
        },
        y: {
          title: {
            display: true,
            text: "Power Consumption (W)"
          }
        }
      }
    }
  });
}

function populateTopicGallery() {
  const gallery = document.getElementById("topic-gallery");
  if (!gallery) return;

  const topics = [
    { label: "Solar",  icon: "☀️",  desc: "Rooftop & utility-scale PV",   link: "solar.html"       },
    { label: "Wind",   icon: "🌬️",  desc: "Onshore & offshore wind",       link: "wind.html"        },
    { label: "Hydro",  icon: "💧",  desc: "Pumped hydro & run-of-river",    link: "hydro.html"       },
    { label: "Biomass",icon: "🌿",  desc: "Bioenergy & waste-to-energy",    link: "biomass.html"     },
    { label: "Geothermal", icon: "🌋", desc: "Enhanced geothermal systems", link: "geothermal.html"  },
    { label: "Nuclear",icon: "⚛️",  desc: "SMRs & next-gen reactors",       link: "nuclear.html"     },
    { label: "TV Story", icon: "📺", desc: "Screen tech & power consumption", link: "tv-story.html" }
  ];

  gallery.innerHTML = topics.map(t => `
    <a href="${t.link}" ${t.link.startsWith('index.html') ? '' : ''} class="gallery-item" style="text-decoration:none;color:inherit;">
      <div style="font-size:2.2rem">${t.icon}</div>
      <h3 style="margin:0.4rem 0 0.2rem">${t.label}</h3>
      <p style="margin:0;font-size:0.88rem;color:var(--muted)">${t.desc}</p>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  populateEnergyTable();
  createEnergyChart();
  populateTopicGallery();

  const techCounts = countTechnologies(tvData);
  const avgPower = averagePowerByTechnology(tvData);

  createTechnologyChart(techCounts);
  createAveragePowerChart(avgPower);
  createSizePowerScatter(tvData);
});
