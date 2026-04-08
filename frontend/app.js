const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const statusEl = document.getElementById("status");
const statusDotEl = document.getElementById("statusDot");
const deviceIdEl = document.getElementById("deviceId");
const deviceNameEl = document.getElementById("deviceName");
const vibrationEl = document.getElementById("vibration");
const lastUpdatedEl = document.getElementById("lastUpdated");
const alertBoxEl = document.getElementById("alertBox");

const chartContext = document.getElementById("telemetryChart").getContext("2d");

const history = {
    labels: [],
    temperature: [],
    humidity: []
};

const telemetryChart = new Chart(chartContext, {
    type: "line",
    data: {
        labels: history.labels,
        datasets: [
            {
                label: "Temperature (°C)",
                data: history.temperature,
                borderWidth: 2,
                tension: 0.35
            },
            {
                label: "Humidity (%)",
                data: history.humidity,
                borderWidth: 2,
                tension: 0.35
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});

function updateHistory(label, temperature, humidity) {
    history.labels.push(label);
    history.temperature.push(temperature);
    history.humidity.push(humidity);

    if (history.labels.length > 12) {
        history.labels.shift();
        history.temperature.shift();
        history.humidity.shift();
    }

    telemetryChart.update();
}

function formatTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleTimeString();
}

function updateStatus(status) {
    statusEl.textContent = status;

    if (status === "WARNING") {
        statusDotEl.className = "status-dot warning";
        alertBoxEl.classList.remove("hidden");
    } else {
        statusDotEl.className = "status-dot active";
        alertBoxEl.classList.add("hidden");
    }
}

async function fetchDeviceState() {
    try {
        const response = await fetch("/api/device");
        const data = await response.json();

        deviceIdEl.textContent = data.device_id;
        deviceNameEl.textContent = data.device_name;
        temperatureEl.textContent = `${data.temperature_c} °C`;
        humidityEl.textContent = `${data.humidity_percent} %`;
        vibrationEl.textContent = data.vibration_level.toFixed(2);
        lastUpdatedEl.textContent = formatTime(data.last_updated);

        updateStatus(data.status);
        updateHistory(formatTime(data.last_updated), data.temperature_c, data.humidity_percent);
    } catch (error) {
        console.error("Failed to load device state:", error);
    }
}

fetchDeviceState();
setInterval(fetchDeviceState, 2000);
