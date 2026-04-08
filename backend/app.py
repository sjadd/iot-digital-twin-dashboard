from flask import Flask, jsonify, send_from_directory
from datetime import datetime
import math

app = Flask(__name__, static_folder="../frontend", static_url_path="")

_tick = {"value": 0}


def generate_device_state():
    _tick["value"] += 1
    t = _tick["value"]

    temperature = round(30 + 6 * math.sin(t / 4), 1)
    humidity = round(45 + 10 * math.cos(t / 5), 1)
    vibration = round(0.4 + 0.25 * abs(math.sin(t / 3)), 2)

    status = "WARNING" if temperature >= 35 else "ACTIVE"

    return {
        "device_id": "DT-ESP32-001",
        "device_name": "Digital Twin Demo Node",
        "temperature_c": temperature,
        "humidity_percent": humidity,
        "vibration_level": vibration,
        "status": status,
        "last_updated": datetime.utcnow().isoformat() + "Z",
    }


@app.route("/api/device", methods=["GET"])
def get_device():
    return jsonify(generate_device_state())


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def static_proxy(path):
    return send_from_directory(app.static_folder, path)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
