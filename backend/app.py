from src import app

@app.route('/')
def home():
    return jsonify(message="Welcome to the backend!")

if __name__ == '__main__':
    app.run(debug=True)
