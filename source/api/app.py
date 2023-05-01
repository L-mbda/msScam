from flask import Flask, render_template

app = Flask(__name__, template_folder='./pages/', static_folder='./static', static_url_path='/SecurityCenter_files')

@app.route('/')
def index():
    return render_template('sec_center.html')

if __name__ == '__main__':
    app.run(debug=True)