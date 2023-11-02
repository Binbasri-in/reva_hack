from flask import Blueprint, jsonify
from cybernews.cybernews import CyberNews

new = Blueprint("new", __name__)
news = CyberNews()

@new.route('/news/data-breach')
def fetch_data_breach_news():
    data = news.get_news("cyberAttack")
    return jsonify(data)