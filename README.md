# IoT Device Digital Twin Dashboard

IoT Device Digital Twin Dashboard is a lightweight full-stack project that demonstrates how a physical IoT device can be represented, monitored, and visualized through a virtual software twin.

The system combines:
- a Flask backend for simulated device telemetry
- a browser-based dashboard for visualization
- real-time polling for live state updates
- a clean user interface suitable for public portfolio presentation

## Project objective

The objective of this repository is to present a simple and professional digital twin concept for IoT systems. It is intended as a portfolio project that reflects device monitoring, telemetry visualization, and dashboard-oriented software design.

## Features

- Simulated IoT device telemetry
- REST API built with Flask
- Real-time dashboard updates using browser polling
- Temperature and humidity trend chart
- Device status indicator
- Alert message for elevated temperature
- Clean and reusable project structure

## System overview

The backend generates a simulated device state with:
- temperature
- humidity
- vibration level
- device health status

The frontend requests new values every two seconds and updates the digital twin dashboard in real time.

## Repository structure

```text
iot-digital-twin-dashboard/
├── backend/
│   └── app.py
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── .github/
│   └── workflows/
│       └── python-ci.yml
├── requirements.txt
├── README.md
├── LICENSE
└── RELEASE_NOTES_v1.0.0.md
```

## API example

`GET /api/device`

Example response:

```json
{
  "device_id": "DT-ESP32-001",
  "device_name": "Digital Twin Demo Node",
  "temperature_c": 33.8,
  "humidity_percent": 47.1,
  "vibration_level": 0.56,
  "status": "ACTIVE",
  "last_updated": "2026-04-08T12:00:00Z"
}
```

## Getting started

1. Create a virtual environment.
2. Install the dependencies:
   `pip install -r requirements.txt`
3. Start the backend:
   `python backend/app.py`
4. Open your browser at:
   `http://127.0.0.1:5000`

## Professional value

This project is suitable for a public GitHub portfolio because it demonstrates:
- full-stack IoT thinking
- dashboard design for telemetry monitoring
- practical use of REST APIs
- digital twin representation of physical assets
- clean documentation and project structure

## Roadmap

Planned next improvements:
- WebSocket-based real-time streaming
- Multi-device monitoring
- Historical data persistence
- User authentication
- MQTT integration

## Suggested GitHub topics

`iot` `digital-twin` `dashboard` `flask` `telemetry` `visualization` `realtime` `smart-systems`

## License

MIT License
