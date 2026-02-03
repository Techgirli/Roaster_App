from flask import Flask
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

# Create the Flask app instance first
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"


@app.route("/roster/<team>")
def get_roster(team):
    team_ids = {'dodgers': 119, 'yankees': 147, 'redsox': 110, 'cubs': 112}
    team_id = team_ids.get(team)
    if not team_id:
        return {"error": "Team not supported"}, 400

    url = f"https://statsapi.mlb.com/api/v1/teams/{team_id}/roster?rosterType=40Man"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return [player['person']['fullName'] for player in data['roster']]
    return {"error": "API request failed"}, 500


if __name__ == '__main__':
    app.run(debug=True, port=4094)
